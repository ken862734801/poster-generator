import { useCallback, useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImageThumbnail, Modal } from './index';
import { Button } from '@/components/common';
import { getAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib';

interface File {
  id: string;
  src: string;
  alt: string;
  loading?: boolean;
}

export const ImagePanel = () => {
  const { user } = getAuth();

  const [files, setFiles] = useState<File[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const BUCKET = process.env.NEXT_PUBLIC_SUPABASE_BUCKET!;

  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        const { data: list, error: listError } = await supabase.storage
          .from(BUCKET)
          .list(user.id, {
            limit: 50,
            sortBy: { column: 'created_at', order: 'desc' },
          });
        if (listError) throw listError;

        const loaded = await Promise.all(
          list.map(async (file) => {
            const { data: urlData, error: urlError } = await supabase.storage
              .from(BUCKET)
              .createSignedUrl(`${user.id}/${file.name}`, 3600);
            if (urlError) throw urlError;
            return {
              id: `${user.id}/${file.name}`,
              src: urlData.signedUrl,
              alt: file.name,
            } as File;
          })
        );
        setFiles(loaded);
      } catch (error) {
        console.error('Error loading files:', error);
      } finally {
        console.log('Files loaded successfully.');
      }
    })();
  }, [user]);

  const handleFileUpload = useCallback(
    async (list: FileList) => {
      if (!user) return;

      for (const file of Array.from(list)) {
        const extension = file.name.split('.').pop();
        const id = `${user.id}/${uuidv4()}.${extension}`;

        setFiles((prevFiles) => [
          { id, src: '', alt: file.name, loading: true },
          ...prevFiles,
        ]);

        try {
          const { error: uploadError } = await supabase.storage
            .from(BUCKET)
            .upload(id, file, { upsert: false });
          if (uploadError) throw uploadError;

          const { data: urlData, error: urlError } = await supabase.storage
            .from('user-media')
            .createSignedUrl(id, 3600);
          if (urlError) throw urlError;

          setFiles((prevFiles) =>
            prevFiles.map((file) =>
              file.id === id
                ? { id, src: urlData.signedUrl, alt: file.alt, loading: false }
                : file
            )
          );
        } catch (error) {
          console.error('Error creating signed URL:', error);
          setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
        } finally {
          console.log('File uploaded successfully.');
        }
      }
    },
    [user]
  );

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      handleFileUpload(event.target.files);
      event.target.value = '';
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) =>
    event.preventDefault();

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length) {
      handleFileUpload(event.dataTransfer.files);
    }
  };

  const handleClick = () => inputRef.current?.click();

  const openModal = (id: string) => {
    setSelectedFile(id);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setSelectedFile(null);
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleDelete = async () => {
    if (!selectedFile) return;
    try {
      const { error } = await supabase.storage
        .from('user-media')
        .remove([selectedFile]);
      if (error) throw error;

      setFiles((prevFiles) =>
        prevFiles.filter((file) => file.id !== selectedFile)
      );
    } catch (error) {
      console.error('Error deleting file:', error);
    } finally {
      closeModal();
    }
  };

  return (
    <>
      <div
        className="h-[75vh] p-4 overflow-auto"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {files.length === 0 && (
          <div className="relative h-full">
            <div className="absolute -translate-x-1/2 translate-y-10 top-1/4 left-1/2">
              <img
                src="./placeholder.jpg"
                className="mb-4 w-30 h-30 grayscale"
              />
            </div>
          </div>
        )}
        {files.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {files.map((file) => (
              <ImageThumbnail
                key={file.id}
                src={file.src}
                alt={file.alt}
                loading={file.loading}
                onDelete={() => openModal(file.id)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="border-t border-t-[var(--border-default)] flex flex-col justify-center">
        <Button
          className="btn btn-wide font-normal mx-auto mt-5 mb-2 bg-[var(--button-hover)] hover:bg-[var(--button-default)]"
          onClick={handleClick}
        >
          Upload File
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={onFileChange}
        />
        <p className="text-xs text-center">
          Or drag and drop your files above.
        </p>
      </div>
      <Modal ref={dialogRef} onCancel={handleCancel} onConfirm={handleDelete} />
    </>
  );
};

export default ImagePanel;

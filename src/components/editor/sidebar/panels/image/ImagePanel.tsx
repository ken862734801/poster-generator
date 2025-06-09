import { useCallback, useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageThumbnail from './ImageThumbnail';
import { UploadSimpleIcon } from '@phosphor-icons/react';

export interface File {
  id: string;
  src: string;
  alt?: string;
}

export const ImagePanel = () => {
  const [files, setFiles] = useState<File[]>(() => {
    const storedFiles = localStorage.getItem('files');
    return storedFiles ? JSON.parse(storedFiles) : [];
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    localStorage.setItem('files', JSON.stringify(files));
  }, []);

  const handleFileUpload = useCallback((files: FileList) => {
    Array.from(files)
      .filter((file) => file.type.startsWith('image/'))
      .forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result as string;
          const newFile: File = {
            id: uuidv4(),
            src: dataUrl,
            alt: file.name,
          };
          setFiles((prevFiles) => [...prevFiles, newFile]);
        };
        reader.readAsDataURL(file);
      });
  }, []);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      handleFileUpload(event.target.files);
      event.target.value = '';
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('Drag over event triggered!');
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files?.length) {
      handleFileUpload(event.dataTransfer.files);
      console.log('Files dropped:', event.dataTransfer.files);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div onDrop={onDrop} onDragOver={onDragOver}>
      {files.length == 0 ? (
        <div>
          <p>The files array is empty!</p>
        </div>
      ) : (
        <div>
          {files?.map((file) => (
            <ImageThumbnail key={file.id} src={file.src} alt={file.alt} />
          ))}
        </div>
      )}
      <div>
        <button onClick={handleClick}>
          <UploadSimpleIcon />
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
        />
      </div>
    </div>
    // <div className="grid grid-cols-3 gap-4">
    //   {/* This is hard coded for testing, but you can get rid of it. */}
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    //   <ImageThumbnail
    //     src="https://picsum.photos/seed/picsum/200/300"
    //     onClick={handleClick}
    //     onDelete={handleDelete}
    //   />
    // </div>
  );
};

export default ImagePanel;

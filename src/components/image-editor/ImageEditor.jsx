import './image-editor.css';
import uploadImage from '../../assets/icons/upload-image.jpg';
import { Trash } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

function ImageEditor(props){
    const { poster, setPoster } = props;
    const [images, setImages] = useState([]);

    function handleFileUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImages = [...images, reader.result];
                setImages(newImages);
                localStorage.setItem('uploadedImages', JSON.stringify(newImages));
            };
            reader.readAsDataURL(file);
        }
    }

    function deleteImage(index) {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
        localStorage.setItem('uploadedImages', JSON.stringify(newImages));
    }

    function updateImage(src){
        const newPoster = {...poster};
        newPoster.data.image = src;
        setPoster(newPoster);
    };

    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem('uploadedImages'));
        if(storedImages){
            setImages(storedImages);
        }
    }, []);

    return (
        <div className='image-editor'>
            { images.length === 0 ? (
                <div className='image-gallery--empty'>
                    <div className='upload-image--container'>
                        <img src={ uploadImage } alt='uploading file image'/>
                        <p>Your uploaded images will appear here</p>
                    </div>
                </div>
            ) : (
                <div className='image-gallery'>
                    {images.map((image, index) => (
                        <div className='image--container' key={ index }>
                            <img onClick={() => updateImage(image)} src={image}/>
                            <div onClick={() => deleteImage(index)} className='trash-icon--container' title='Delete'>
                                <Trash className='trash-icon' size={16}/>
                            </div>
                        </div>
                    ))}
                </div>
            ) }
            <div className='image-editor-button--container'>
                <input onChange={(e) => handleFileUpload(e)} id='image-input' className='hidden' type='file'></input>
                <label id='upload-button' className='upload-button' htmlFor='image-input'>Upload</label>
            </div>
        </div>
    )
};

export default ImageEditor;
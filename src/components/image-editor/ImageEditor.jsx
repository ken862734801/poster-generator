import './image-editor.css';
import uploadImage from '../../assets/icons/upload-image.jpg';
import { Trash } from '@phosphor-icons/react';
import { useState } from 'react';

function ImageEditor(){
    const [images, setImages] = useState([uploadImage, uploadImage, uploadImage, uploadImage]);

    return (
        <div className='image-editor'>
            { images.length === 0 ? (
                <div className='image-gallery--empty'>
                    <div className='upload-image--container'>
                        <img src={ uploadImage }/>
                        <p>Your uploaded images will appear here</p>
                    </div>
                </div>
            ) : (
                <div className='image-gallery'>
                    {images.map((image, index) => (
                        <div className='image--container' key={ index }>
                            <img src={image}/>
                            <div className='trash-icon--container' title='Delete'>
                                <Trash className='trash-icon' size={16}/>
                            </div>
                        </div>
                    ))}
                </div>
            ) }
            <div className='image-editor-button--container'>
                <input id='image-input' className='hidden' type='file'></input>
                <label id='upload-button' className='upload-button' htmlFor='image-input'>Upload</label>
            </div>
        </div>
    )
};

export default ImageEditor;
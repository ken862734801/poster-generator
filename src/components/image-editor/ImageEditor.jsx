import './image-editor.css';
import uploadImage from '../../assets/icons/upload-image.jpg';
import { useState } from 'react';

function ImageEditor(){
    const [gallery, setGallery] = useState([]);

    return (
        <div className='image-editor'>
            { gallery.length === 0 ? (
                <div className='image-gallery--empty'>
                    <div className='upload-image--container'>
                        <img src={ uploadImage }/>
                        <p>Your uploaded images will appear here</p>
                    </div>
                </div>
            ) : (
                <div className='image-gallery'></div>
            ) }
            <div className='image-editor-button--container'>
                <input id='image-input' className='hidden' type='file'></input>
                <label id='upload-button' className='upload-button' htmlFor='image-input'>Upload</label>
            </div>
        </div>
    )
};

export default ImageEditor;
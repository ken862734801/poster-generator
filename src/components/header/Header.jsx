import './header.css';
import { useState } from 'react';
import Spinner from '../spinner/Spinner';
import DomToImage from 'dom-to-image';

function Header(){
    const [isLoading, setIsLoading] = useState(false);

    async function saveAsPng(name){
        setIsLoading(true);
        try {
            const dataUrl = await DomToImage.toPng(document.getElementById('poster--container'), { quality: 1});
            await new Promise(function(resolve){
                setTimeout(function(){
                    resolve();
                }, 2000);
            })
            let link = document.createElement('a');
            link.download = name;
            link.href = dataUrl;
            link.click();
        } catch (error){
            console.error('An error occurred:', error)
        } finally {
            setIsLoading(false)
        }
    };

    const styleObject = {
        width: '20px',
        height: '20px',
        border: '2px solid #f3f3f3',
        borderTop: '2px solid #555'
    }

    return (
        <header>
            <div className='header--container'>
                <a href=''>
                    <h1>poster generator</h1>
                </a>
                <button onClick={() => saveAsPng('generated-poster')}>
                    { isLoading? (<Spinner settings = { styleObject }/>) : (<p>Download</p>) }
                </button>
                {/* <button onClick={()=> saveAsPng('my-generated-poster')}> Download </button> */}
            </div>
        </header>
    )
};

export default Header;
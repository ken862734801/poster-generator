import "./header.css";
import { Config } from "../../utils/Config.js";
import DomToImage from "dom-to-image";

function saveAsPng(name){
    DomToImage.toPng(document.getElementById("poster-container"), {quality:1})
        .then(function(dataUrl){
            let link = document.createElement("a");
            link.download = name;
            link.href = dataUrl;
            link.click();
        })
};

export default function Header(){
    return(
        <header>
            <div className="header-container">
                <a href=""><h1>Poster Generator</h1></a>
                <button onClick={()=> saveAsPng(Config.FILE_NAME)}>DOWNLOAD</button>
            </div>
        </header>
    )
}
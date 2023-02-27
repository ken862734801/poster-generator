import "./header.css";
import { useState } from "react";
import DomToImage from "dom-to-image";

function savePng(name){
    DomToImage.toPng(document.getElementById("poster-container"), {quality:1})
        .then(function(dataUrl){
            let link = document.createElement("a");
            link.download = name;
            link.href = dataUrl;
            link.click();
        })
};

export default function Header(){
    const [fileName, setFileName] = useState("my-image-name.png");

    return(
        <header>
            <div className="header-container">
                <a href=""><h1>Poster Generator</h1></a>
                <button onClick={()=> savePng(fileName)}>DOWNLOAD</button>
            </div>
        </header>
    )
}
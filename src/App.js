import "./App.css";

import React, {useEffect, useState } from "react";
import { usePalette } from 'react-palette';
import DomToImage from 'dom-to-image';
import TemplateOne from './components/template_one';

const getData = async (artist, album) => {
  try{
    const response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + process.env.REACT_APP_API_KEY + "&artist=" + artist + "&album=" + album + "&format=json");
    const data = await response.json();
      console.log(data);
      return data
  } catch (err){
    console.error(err);
  }
};

const clearUserInput = () => {
  let artistInput = document.getElementById("artist-input");
  let albumInput = document.getElementById("album-input");
    artistInput.value = "";
    albumInput.value = "";
};

// getData("Drake", "Views");

const App = () => {
  const [year, setYear] = useState("");
  const [album, setAlbum] = useState("");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("");
  const {data, loading, error} = usePalette(image);


  const handleUserInput = async () => {
    let artistInput = document.getElementById("artist-input").value;
    let albumInput = document.getElementById("album-input").value;
    if(artistInput === "" || albumInput === ""){
      return
    }else{
      console.log(artistInput, albumInput);
      createPoster(await getData(artistInput, albumInput));
      clearUserInput();
    }
  };
  

  const createPoster = (response) => {
    setYear(response.album.wiki.published.split(",")[0].split(" ")[2])
    setArtist(response.album.artist);
    setAlbum(response.album.name);
    setImage(response.album.image[5]["#text"].replace("/300x300", ""));

  }

  const saveJPEG = () => {
    DomToImage.toJpeg(document.getElementById('poster-wrapper'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });

  }

  return (
    <div className="App">
        <input type="text" id="artist-input" required></input>
        <input type="text" id="album-input" required></input>
        <button onClick={handleUserInput}>SUBMIT</button>
        <button onClick={saveJPEG}>Save</button>
        <button>Template #1</button>
        <button>Template #2</button>
        <TemplateOne
         year={year} album={album} image={image} artist={artist}
         vibrant={data.vibrant} lightVibrant={data.lightVibrant} 
         darkVibrant={data.darkVibrant} muted={data.muted} lightMuted={data.lightMuted}
         />
    </div>
  );
}

export default App;

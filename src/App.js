import './App.css';

import React, {useEffect, useState } from "react";
import { usePalette } from 'react-palette';
import DomToImage from 'dom-to-image';
import Test from './test';

const getData = async (artist, album) => {
  try{
    const response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + process.env.REACT_APP_API_KEY + "&artist=" + artist + "&album=" + album + "&format=json");
    const data = await response.json();
      console.log(data);
      return data
  } catch (err){
    console.error(err)
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
    setArtist(response.album.artist);
    setAlbum(response.album.name);
    setImage(response.album.image[5]["#text"].replace("/300x300", ""));

  }

  const saveJPEG = () => {
    DomToImage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
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
      {/* <Test/> */}
        <div id="my-node">
          <div>{album}</div>
          <img src={image}></img>
          <div>{artist}</div>
          <div style={{ color: data.vibrant }}><p>Text with the vibrant color</p></div>
          <div style={{ color: data.lightVibrant }}><p>Text with the vibrant color</p></div>
          <div style={{ color: data.darkVibrant }}><p>Text with the vibrant color</p></div>
          <div style={{ color: data.muted }}><p>Text with the vibrant color</p></div>
          <div style={{ color: data.lightMuted }}><p>Text with the vibrant color</p></div>
        </div>
        <button onClick={saveJPEG}>Save</button>
      </div>
  );
}

export default App;

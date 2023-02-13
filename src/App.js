// import "./App.css";

import React, {useEffect, useState } from "react";
import { usePalette } from 'react-palette';
import DomToImage from 'dom-to-image';
import {Poster, dateString, saveJpeg, divideTracklist} from "./Utils";
import TemplateOne from "./TemplateOne";
import "./Test.css";

const getData = async (artist, album) => {
  try{
      const response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + process.env.REACT_APP_API_KEY + "&artist=" + artist + "&album=" + album + "&format=json");
      if(!response.ok) throw console.log("Album was not found!");
        const data = await response.json();
          console.log(data)
          return data
  } catch(err){
      console.error(err)
  }
}

// getData("Drake", "Views");

const App = () => {
  const [year, setYear] = useState("");
  const [album, setAlbum] = useState("Album");
  const [image, setImage] = useState("");
  const [artist, setArtist] = useState("Artist");
  const [date, setDate] = useState(dateString);
  const [genreTag1, setGenreTag1] = useState("");
  const [genreTag2, setGenreTag2] = useState("");
  const [genreTag3, setGenreTag3] = useState("");
  const [tracklist, setTracklist] = useState([""])
  const {data, loading, error} = usePalette(image);
  const [genre, setGenre] = useState([""]);
  const [duration, setDuration] = useState("00:00:00");

  const clearUserInput = () => {
    let artistInput = document.getElementById("artist-input");
    let albumInput = document.getElementById("album-input");
        artistInput.value = "";
        albumInput.value = "";
}


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

    let dateArr = response.album.wiki.published.split(",")[0].split(" ");
    let releaseDate = `${dateArr[1]} ${dateArr[0]}, ${dateArr[2]}`;
    let albumGenre = response.album.tags.tag;
    let genreArr = [];
     for(let i = 1; i < albumGenre.length; i++){
      let tag = albumGenre[i].name;
      genreArr.push(tag);
    }

    let tracklistArr = [];
        for(let i = 0; i < response.album.tracks.track.length; i++){
            let tracks = response.album.tracks.track[i].name;
            tracklistArr.push(`${i + 1}. ${tracks}`);
            setTracklist(tracklistArr);
        };
        console.log(tracklistArr);

    let arr = [];
    let list = divideTracklist(tracklistArr, arr);

    setYear(response.album.wiki.published.split(",")[0].split(" ")[2])
    setArtist(response.album.artist);
    setAlbum(response.album.name);
    setImage(response.album.image[5]["#text"].replace("/300x300", ""));
    setDate(releaseDate)
    setGenre(genreArr);
    setGenreTag1(genreArr[0]);
    setGenreTag2(genreArr[1]);
    setGenreTag3(genreArr[2]);
    setTracklist(list);

  }

  const poster = new Poster(album, artist, image, year, date, tracklist, genre);
  console.log(poster);

  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomChange = (event) => {
    const newZoomLevel = parseInt(event.target.value);
    setZoomLevel(newZoomLevel)
  }

  return (
    <div className="App">
      <input type="text" id="artist-input" required></input>
        <input type="text" id="album-input" required></input>
        <button onClick={handleUserInput}>SUBMIT</button>
        <button onClick={saveJpeg}>Save</button>
        <button>Template #1</button>
        <button>Template #2</button>
        <select id="zoom-select" value={zoomLevel} onChange={handleZoomChange}>
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>
        <div className="poster-editor-canvas">
          <TemplateOne
          zoom={zoomLevel}
          year={year} album={album} image={image} artist={artist}
          vibrant={data.vibrant} lightVibrant={data.lightVibrant} 
          darkVibrant={data.darkVibrant} muted={data.muted} lightMuted={data.lightMuted} 
          duration={duration} date={date} genreTag1={genreTag1}  genreTag2={genreTag2} genreTag3={genreTag3}
          tracklist={tracklist}
          />
          {/* <TemplateTwo  album={album} image={image} artist={artist}
          vibrant={data.vibrant} lightVibrant={data.lightVibrant} 
          darkVibrant={data.darkVibrant} muted={data.muted} lightMuted={data.lightMuted}
          date={date} tracklist={poster.tracklist}/> */}
        </div> 
    </div>
  );
}

export default App;

import "./App.css";

import React, {useEffect, useState } from "react";
import Aside from "./components/aside";
import Template from "./components/template";
import ZoomButton from "./components/zoom";
import { usePalette } from 'react-palette';
import DomToImage from 'dom-to-image';

let currentDate = Date.now();
let dateObject = new Date(currentDate);

const monthName = dateObject.toLocaleString("en-US", { month: "short" });
const monthDay = dateObject.getDate();
const currentYear = dateObject.getFullYear();

let dayNum;
if(monthDay < 10){
    dayNum = "0" + monthDay
} else{
    dayNum = monthDay
}

const dateString = `${monthName} ${dayNum}, ${currentYear}`;

const savePng = () => {
  DomToImage.toPng(document.getElementById("poster-container"), {quality:1})
      .then(function(dataUrl){
          let link = document.createElement("a");
          link.download = "my-image-name.png";
          link.href = dataUrl;
          link.click();
      })
};

const App = () => {
  const [margin, setMargin] = useState(410);
  const [album, setAlbum] = useState("Album");
  const [artist, setArtist] = useState("Artist");
  const [image, setImage] = useState("");
  const [date, setDate] = useState(dateString);
  const [duration, setDuration] = useState("00:00:00");
  const [label, setLabel] = useState("Label");
  const [year, setYear] = useState(currentYear);
  const [tracklist, setTracklist] = useState([["1. Track Name", "2. Track Name","3. Track Name",
                                              "4. Track Name", "5. Track Name", "6. Track Name",
                                              "7. Track Name", "8. Track Name", "9. Track Name"]]);
  const [genreTagOne, setGenreTagOne] = useState("Genre");
  const [genreTagTwo, setGenreTagTwo] = useState("Genre");
  const [genreTagThree, setGenreTagThree] = useState("Genre");
  
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  const {data, loading, error} = usePalette(image);
  const [colorOne, setColorOne] = useState();
  const [colorTwo, setColorTwo] = useState();
  const [colorThree, setColorThree] = useState("");
  const [colorFour, setColorFour] = useState("");
  const [colorFive, setColorFive] = useState("");

  useEffect(() => {
    if (error) {
      console.error(error);
    }
    if (data) {
      setColorOne(data.vibrant);
      setColorTwo(data.lightVibrant);
      setColorThree(data.darkVibrant);
      setColorFour(data.muted);
      setColorFive(data.lightMuted);
    }
  }, [data, error]);

  const resetPalette = () => {
      setTextColor("#000000");
      setBgColor("#ffffff");
      setColorOne(data.vibrant);
      setColorTwo(data.lightVibrant);
      setColorThree(data.darkVibrant);
      setColorFour(data.muted);
      setColorFive(data.lightMuted);
  };
  return (
    <div className="App">
      <header>
        <div className="header-container">
          <a href=""><h1>Poster Generator</h1></a>
          <button onClick={savePng}>DOWNLOAD</button>
        </div>
      </header>
      <div className="container">
          <Aside textColor={textColor} setTextColor={setTextColor} bgColor={bgColor} setBgColor={setBgColor} album = {album} setAlbum={setAlbum} artist={artist} setArtist={setArtist} 
                setImage={setImage} date={date} setDate={setDate} year={year} setYear={setYear} duration={duration}
                setDuration={setDuration} label={label} setLabel = {setLabel} setTracklist={setTracklist} genreTagOne={genreTagOne} setGenreTagOne={setGenreTagOne}
                genreTagTwo={genreTagTwo} setGenreTagTwo={setGenreTagTwo} genreTagThree={genreTagThree} setGenreTagThree={setGenreTagThree} setMargin={setMargin}
                colorOne={colorOne} setColorOne ={setColorOne} setColorTwo = {setColorTwo} colorTwo={colorTwo} setColorThree = {setColorThree} colorThree = {colorThree} 
                colorFour={colorFour} setColorFour={setColorFour} setColorFive={setColorFive} colorFive={colorFive} resetPalette={resetPalette}/>

          <main style={{marginLeft: `${margin}px`}}>

            <Template bgColor={bgColor} textColor={textColor} year={year} album={album} artist={artist} 
            image={image} date={date} duration={duration} tracklist={tracklist}
            label={label} genreTagOne={genreTagOne} genreTagTwo={genreTagTwo}
            genreTagThree={genreTagThree} vibrant={colorOne} lightVibrant={colorTwo} 
            darkVibrant={colorThree} muted={colorFour} lightMuted={colorFive}/>

          <ZoomButton/>
          </main>
        </div>
        <div className="media-query-warning">
          <h1>Poster Generator</h1>
          <span>Please use a larger screen</span>
          <p>Poster Generator is currently only supported on notebooks, desktops, and tablets.</p>
          <p>Switch to a device with a larger screen to view this page.</p>
        </div>
    </div>
  );
}

export default App;

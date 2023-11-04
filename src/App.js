import "./App.css";
import React, {useEffect, useState } from "react";
import SearchBar from "./components/search-bar/SearchBar";
import Poster from "./components/poster/Poster";
import { usePalette } from "react-palette";

const dataObjects = [
  {
    artist: 'SZA',
    title: 'CTRL'
  },
  {
    artist: 'Tame Impala',
    title: 'Currents'
  }
];

const dateOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

const date = new Date();
const currentDate = date.toLocaleDateString('en-US', dateOptions)
const currentYear = date.getFullYear();

const initialPosterState = {
  album: 'Album',
  artist: 'Artist',
  date: currentDate,
  genreTagOne: 'Genre',
  genreTagTwo: 'Genre',
  genreTagThree: 'Genre',
  image: '',
  label: 'Label',
  tracklist: [],
  year: currentYear
};

const initialColorPaletteState = {
  colorOne: '',
  colorTwo: '',
  colorThree: '',
  colorFour: '',
  colorFive: ''
};

function handleDateRegex(string){
  const dateRegex = /(\d{1,2}|[A-Za-z]+) (\d{1,2}|[A-Za-z]+),? (\d{4})/;
  const match = dateRegex.exec(string);
  if (match) {
    const day = match[1];
    const month = match[2];
    const year = match[3];
    // return {
    //   day,
    //   month,
    //   year,
    // };
    return `${month} ${day}, ${year}`
  }
};

function getRandomAlbum () {
  const randomIndex = Math.floor(Math.random() * dataObjects.length);
  return dataObjects[randomIndex];
};

function divideTracklist(arr, newArr){
  let left, right;
  if(arr.length <= 10){
    newArr.push(arr);
    return newArr
  } else if (arr.length > 10){
    left = arr.slice(0, 9);
    right = arr.slice(9);
      newArr.push(left);
      return divideTracklist(right, newArr)
  }
};

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState({ artist: '', album: '' });
  const [poster, setPoster] = useState(initialPosterState);
  const [colorPalette, setColorPalette] = useState(initialColorPaletteState);
  const {data, error} = usePalette(poster.image);

  function createPoster (response) {
    const newPoster = { ...initialPosterState };

    if(response.album.name){
      newPoster.album = response.album.name;
    };
    
    if(response.album.artist){
      newPoster.artist = response.album.artist;
    };

    if(response.album.image){
      newPoster.image = response.album.image[5]['#text'].replace('/300x300', '');
    };

    if(response.album.tracks){
      let curr = [];
      for(let i = 0; i < response.album.tracks.track.length; i++){
        let track = response.album.tracks.track[i].name;
        curr.push(`${i + 1}. ${track}`);
      };
      let tmp = [];
      const tracklist = divideTracklist(curr, tmp);
      newPoster.tracklist = tracklist;
    };

    if(response.album.tags){
      let genreArr = [];
      for(let i = 0; i < response.album.tags.tag.length; i++){
        let tag = response.album.tags.tag[i].name;
        genreArr.push(tag);
      };
      newPoster.genreTagOne = genreArr[0];
      newPoster.genreTagTwo = genreArr[1];
      newPoster.genreTagThree = genreArr[2];
    };

    if(response.album.wiki){
      const yearRegex = /\b(\d{4})\b/;
      const regexMatch = (response.album.wiki.summary).match(yearRegex);
      if (regexMatch && regexMatch[1]) {
        newPoster.year = regexMatch[1];
      };
    };

    if(response.album.wiki){
      console.log(response.album.wiki.summary);
      const releaseDate = handleDateRegex((response.album.wiki.summary).toString());
      console.log(releaseDate);
      newPoster.date = releaseDate;
    }

    setPoster(newPoster);
    console.log(newPoster);
  };

  async function fetchData(artist, album) {
    setIsLoading(true);
    try {
      const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + process.env.REACT_APP_API_KEY + '&artist=' + artist + '&album=' + album + '&format=json');
      if (response.ok){
        const data = await response.json();
        console.log(data);
        createPoster(data);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error){
      console.error('An error occurred:', error);
    } finally {
      setIsLoading(false);
    };
  };

  useEffect(() => {
    const randomAlbum = getRandomAlbum();
    fetchData(randomAlbum.artist, randomAlbum.title);
  }, []);

  useEffect(() => {
    try {
      const newColorPalette = { ...colorPalette };
      if(data) {
        newColorPalette.colorOne = data.vibrant;
        newColorPalette.colorTwo = data.lightVibrant;
        newColorPalette.colorThree = data.darkVibrant;
        newColorPalette.colorFour = data.muted;
        newColorPalette.colorFive = data.darkMuted;
      }
      setColorPalette(newColorPalette);
    } catch (error){
      console.error('An error occured:', error);
    };
  }, [data, error]);

  function handleFormClear(){
    setSearchQuery({
      ...searchQuery,
      artist: '',
      album: ''
    });
  }
  function handleFormSubmit(e){
    e.preventDefault();
    fetchData(searchQuery.artist, searchQuery.album);
    handleFormClear();
  };

  return (
    <div className="App">
      {/* <Header/>
       <Container/>
      <Mobile/> */}
      <form onSubmit={handleFormSubmit}>
        <SearchBar 
          nameText={'artist'} 
          placeholderText={'Enter Artist...'}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <SearchBar
          nameText={'album'} 
          placeholderText={'Enter Album...'}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          />
        <button type="submit">Submit</button>
      </form>
      { isLoading ?
       <p> Loading... </p> 
       : 
       <div>
        <Poster 
          poster={poster}
          colorPalette={colorPalette}
        />
       </div> }
    </div>
  );
}

export default App;

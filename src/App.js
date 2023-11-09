import "./App.css";
import React, { useEffect, useState } from "react";
import { divideTrackList, getCurrentDate, getCurrentYear, getRandomObject, handleDateRegex } from "./utils/util";
import TabList from "./components/tab-list/TabList";
import SideNav from "./components/side-nav/SideNav";
import Poster from "./components/poster/Poster";
import { usePalette } from "react-palette";

const dataObjects = [
  {
    artist: 'Tame Impala',
    title: 'Currents'
  },
  {
    artist: 'SZA',
    title: 'CTRL'
  }
];

const currentDate = getCurrentDate();
const currentYear = getCurrentYear();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState({ artist: '', album: '' });
  const [navigationContent, setNavigationContent] = useState({
   content: {
    title: 'Search',
    hidden: false
   }
  });
  const [poster, setPoster] = useState({
    data: {
      artist: '',
      album: '',
      date: currentDate,
      genre: ['genre', 'genre', 'genre'],
      image: '',
      label: 'label',
      tracklist: [],
      year: currentYear
    }
  });
  const [colorPalette, setColorPalette] = useState({
    colors: {
      colorOne: '',
      colorTwo: '',
      colorThree: '',
      colorFour: '',
      colorFive: ''
    }
  });

  function createPoster(response){
    const newPoster = { ...poster };

    if(response.album.name){
      newPoster['data'].album = response.album.name;
    } else {
      console.log('Failed to retrieve album.');
    };
    
    if(response.album.artist){
      newPoster['data'].artist = response.album.artist;
    } else {
      console.log('Failed to retrieve artist.');
    };

    if(response.album.image){
      newPoster['data'].image = response.album.image[5]['#text'].replace('/300x300', '');
    } else {
      console.log('Failed to retrieve image.');
    };

    if(response.album.tracks){
      let temp = [];
      let curr = [];
      for(let i = 0; i < response.album.tracks.track.length; i++){
        let track = response.album.tracks.track[i].name;
        temp.push(`${i + 1}. ${track}`);
      };
      const tracklist = divideTrackList(temp, curr);
      newPoster['data'].tracklist = tracklist;
    } else {
      console.log('Failed to retrieve tracks.')
    }

    if(response.album.tags){
      let tags = [];
      for(let i = 0; i < response.album.tags.tag.length; i++){
        let tag = response.album.tags.tag[i].name;
        tags.push(tag);
      };
      newPoster['data'].genre = tags;
    } else {
      console.log('Failed to retrieve tags.');
    };

    if(response.album.wiki){
      const content = response.album.wiki.summary;
      const dateRegex = handleDateRegex(content, currentDate);
      newPoster['data'].date = dateRegex.releaseDate;
      newPoster['data'].year = dateRegex.releaseYear;
    } else {
      console.log('Failed to retrieve wiki.');
    };

    setPoster(newPoster);
  };

  async function fetchData(artist, album){
    setIsLoading(true);
    try {
      const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + process.env.REACT_APP_API_KEY + '&artist=' + artist + '&album=' + album + '&format=json');
      if(response.ok){
        const data = await response.json();
        createPoster(data);
        console.log(data)
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error){
      console.error('An error occurred:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const randomObject = getRandomObject(dataObjects);
    fetchData(randomObject.artist, randomObject.title);
  }, []);

  const { data, error } = usePalette(poster['data'].image);

  useEffect(() => {
    const newColorPalette = { ...colorPalette };
    try {
      if(data){
        newColorPalette['colors'].colorOne = data.vibrant;
        newColorPalette['colors'].colorTwo = data.lightVibrant;
        newColorPalette['colors'].colorThree = data.darkVibrant;
        newColorPalette['colors'].colorFour = data.muted;
        newColorPalette['colors'].colorFive = data.darkMuted;
      } else {
        console.log('Failed to retrieve data.')
      }
    } catch (error){
      console.error('An error occured:', error);
    } finally {
      setColorPalette(newColorPalette);
    };
  }, [data, error]);

  return (
    <div className="App">
      <TabList
      navigationContent={navigationContent}
      setNavigationContent={setNavigationContent}
      />
      <SideNav
      navigationContent={navigationContent}
      />
      <Poster 
        poster={poster}
        colorPalette={colorPalette}
      />
    </div>
  );
}

export default App;

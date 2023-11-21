import "./App.css";
import React, { useEffect, useState } from "react";
import { divideTrackList, getCurrentDate, getCurrentYear, getRandomObject, handleDateRegex } from "./utils/util";
import Header from "./components/header/Header";
import Poster from "./components/poster/Poster";
import TabList from "./components/tab-list/TabList";
import SideNav from "./components/side-nav/SideNav";
import Spinner from "./components/spinner/Spinner";
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
  const [settings, setSettings] = useState({
    colors: {
      'Background Color': '#FFFFFF',
      'Color': '#000000',
    }
  });
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
      date: '',
      duration: '00:00:00',
      genre: ['genre', 'genre', 'genre'],
      image: '',
      label: 'label',
      tracklist: [],
      year: ''
    }
  });
  const [colorPalette, setColorPalette] = useState({
    colors: {
      'Color One': '',
      'Color Two': '',
      'Color Three': '',
      'Color Four': '',
      'Color Five': ''
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

    if(response.album.tracks){
      let total = 0;
      for(let i = 0; i < response.album.tracks.track.length; i++){
          total+=response.album.tracks.track[i].duration
          newPoster['data'].duration = new Date(total * 1000).toISOString().substr(11,8);
      };
    } else {
      console.log('Failed to retrieve tracks.');
    }

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
        await new Promise(function(resolve){
          setTimeout(function(){
            resolve();
          }, 2000);
        })
        createPoster(data);
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
        newColorPalette.colors['Color One'] = data.vibrant;
        newColorPalette.colors['Color Two'] = data.lightVibrant;
        newColorPalette.colors['Color Three'] = data.darkVibrant;
        newColorPalette.colors['Color Four'] = data.muted;
        newColorPalette.colors['Color Five'] = data.darkMuted;
      } else {
        console.log('Failed to retrieve color data.')
      }
    } catch (error){
      console.error('An error occured:', error);
    } finally {
      setColorPalette(newColorPalette);
    };
  }, [data, error]);

  return (
    <>
      <Header/>
      <div>
        <aside>
          <TabList
            navigationContent={navigationContent}
            setNavigationContent={setNavigationContent}
          />
          {navigationContent['content'].hidden ? null : (
            <SideNav
              colorPalette={colorPalette}
              setColorPalette={setColorPalette}
              fetchData={fetchData}
              navigationContent={navigationContent}
              poster={poster}
              setPoster={setPoster}
              setNavigationContent={setNavigationContent}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              settings={settings}
              setSettings={setSettings}
            />
          )}
        </aside>
        <main>
          {isLoading ? 
            (<div>
              <Spinner/>
            </div>):
            (<Poster 
              colorPalette={colorPalette}
              poster={poster}
              settings={settings}
            />)
          }
        </main>
      </div>
    </>
  );
}

export default App;

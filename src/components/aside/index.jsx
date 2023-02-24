import "./aside.css";
import { useEffect, useState } from "react";
import SearchComponent from "../search";
import ImageComponent from "../image";
import ColorComponent from "../color";
import TextComponent from "../text";
import { Close } from "@material-ui/icons";
import { Search, PaletteOutlined, ImageOutlined, TextFields, AddPhotoAlternateOutlined } from "@material-ui/icons";


const Aside = (props) => {
    const {textColor, setTextColor, bgColor, setBgColor, setMargin, album, setAlbum, artist, setArtist, setImage, date, setDate,
         year, setYear, setTracklist ,duration, setDuration, label, setLabel, genreTagOne, 
         setGenreTagOne, genreTagTwo, setGenreTagTwo, genreTagThree, setGenreTagThree, colorOne, setColorOne,
         setColorTwo, colorTwo, setColorThree, colorThree, setColorFour, colorFour, setColorFive, colorFive, resetPalette } = props;

    const [showNav, setShowNav] = useState(true);
    const [navContent, setNavContent] = useState("Search");
    const [contentHeader, setContentHeader] = useState("Search")

    const getData = async (artist, album) => {
        try{
            const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + process.env.REACT_APP_API_KEY + "&artist=" + artist + "&album=" + album + "&format=json");
            if(!response.ok) throw console.log("Error!");
                const data = await response.json();
                    createPoster(data);
        } catch (err){
            console.error(err)
        }
    };

    useEffect(() => {
        getData("Tomoko Aran", "Fuyukukan");
    }, []);
    
    const createPoster = (response) => {
        setAlbum(response.album.name);
        setArtist(response.album.artist);
        setImage(response.album.image[5]["#text"].replace("/300x300", ""));

        if(response.album.tracks){
            let total = 0;
            let durationArr = [];
            for(let i = 0;  i < response.album.tracks.track.length; i++){
                let duration = response.album.tracks.track[i].duration;
                    durationArr.push(duration);
            }
            for(let i = 0; i < durationArr.length; i++){
                total+=durationArr[i];
                setDuration(new Date(total * 1000).toISOString().substr(11, 8));
            }
        } else{
            console.log("The album duration was not found!");
        };

        let genreArr = [];
        if(response.album.tags){
            for(let i = 1; i < response.album.tags.tag.length; i++){
                let tag = response.album.tags.tag[i].name;
                genreArr.push(tag);
                setGenreTagOne(genreArr[0]);
                setGenreTagTwo(genreArr[1]);
                setGenreTagThree(genreArr[2]);
            }
        }else{
            console.log("The genre was not be found!")
        };

        if(response.album.wiki){
            if(response.album.wiki.content){
                console.log("Content is there!");
                const dateRegex = /released on (\w+ \d{1,2} \w+ \d{4})/;
                const match = (response.album.wiki.content).match(dateRegex);

                if(match){
                    const releaseDateStr = match[1];
                    const newReleaseDate = new Date(releaseDateStr);
                    const options = {year: "numeric", month: "short", day: "numeric" };
                    const formattedDate = newReleaseDate.toLocaleDateString('en-US', options);
                        console.log("Released on " + formattedDate);
                        setDate(formattedDate);
                        setYear(newReleaseDate.getFullYear())
                } else {
                    console.log("Released date was not found in content!")
                }
            }else if(!response.album.wiki.content){
                if(response.album.wiki){
                    let dateArr = response.album.wiki.published.split(",")[0].split(" ");
                    let dateStr = `${dateArr[1]} ${dateArr[0]}, ${dateArr[2]}`;
                        setDate(dateStr);
                        setYear(dateArr[2]);
                } else {
                    console.log("Release date was not found in wiki!");
                };
            }
        }else if(!response.album.wiki){
            console.log("The wiki was not found!");
        };

        const divideTracklist = (arr, newArr) => {
            if(arr.length <= 10){
                newArr.push(arr)
                    return newArr
            }else if(arr.length > 10){
                let left = arr.slice(0,9);
                let right = arr.slice(9);
                    newArr.push(left);
                        return divideTracklist(right, newArr)
            }
        };

        let tracklistArr = [];
        if(response.album.tracks){
            for(let i = 0; i < response.album.tracks.track.length; i++){
                let tracks = response.album.tracks.track[i].name;
                tracklistArr.push(`${i + 1}. ${tracks}`);
                setTracklist(tracklistArr);
            };
            console.log(tracklistArr);
    
            let arr = [];
            let newTracklist = divideTracklist(tracklistArr, arr);
            console.log(newTracklist);
            setTracklist(newTracklist);

        }else if(!response.album.tracks){
            console.log("Tracklist was not found!");
        }
    }

    const handleClick = (content) => {
        setShowNav(true);
        setMargin(410);
        setNavContent(content);
        setContentHeader(content);
    };

    const hideNav = () => {
        setShowNav(false);
        setMargin(85);
    };

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 1100) {
            setShowNav(false);
            setMargin(85);
          }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    

    return (
        <aside>
            <div className="aside-btn-container">
                <div className="aside-btn" onClick={() => handleClick("Search")}>
                    <Search/>
                    <p>Search</p>
                </div>
                <div className="aside-btn" onClick={() => handleClick("Text")}>
                    <TextFields/>
                    <p>Text</p>
                </div>
                <div className="aside-btn" onClick={() => handleClick("Image")}>
                    <AddPhotoAlternateOutlined/>
                    <p>Image</p>
                </div>
                <div className="aside-btn" onClick={() => handleClick("Color")}>
                    <PaletteOutlined/>
                    <p>Color</p>
                </div>
            </div>
            {showNav && (
                <div className="side-nav">
                    <div className="side-nav-header">
                        <p>{contentHeader}</p>
                        <Close className="close-btn" fontSize="small"  onClick={() => hideNav()}/>
                    </div>
                    {navContent === "Search" && <SearchComponent setAlbum={setAlbum} setArtist={setArtist} setImage={setImage} 
                    setDate={setDate} setYear={setYear} setDuration = {setDuration} setTracklist={setTracklist}
                    setGenreTagOne={setGenreTagOne} setGenreTagTwo={setGenreTagTwo} setGenreTagThree={setGenreTagThree}>
                    </SearchComponent>} 

                    {navContent === "Color" && <ColorComponent textColor={textColor} setTextColor={setTextColor} bgColor={bgColor} setBgColor={setBgColor} colorOne = {colorOne} setColorOne={setColorOne} colorTwo = {colorTwo} setColorTwo = {setColorTwo} 
                    colorThree={colorThree} setColorThree={setColorThree} setColorFour = {setColorFour} colorFour={colorFour}  setColorFive={setColorFive} 
                    colorFive={colorFive} resetPalette={resetPalette}></ColorComponent>}

                    {navContent === "Text" && <TextComponent year={year} setYear={setYear} album={album} setAlbum={setAlbum} artist={artist}
                    setArtist={setArtist} date={date} setDate={setDate} duration={duration} label={label} setLabel={setLabel} setDuration={setDuration}
                    genreTagOne={genreTagOne} genreTagTwo={genreTagTwo} genreTagThree={genreTagThree}></TextComponent>}

                    {navContent === "Image" && <ImageComponent setImage={setImage}/>}
                </div>
            )}
        </aside>
    )
};

export default Aside;
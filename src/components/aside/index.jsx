import "./aside.css";
import { useState } from "react";
import Button from "./button";
import SideNav from "./sidenav";
import { divideTracklist, dateString, currentYear } from "../util";
import { Search,
         PaletteOutlined,
         TextFields, 
         AddPhotoAlternateOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { Config } from "../../utils/Config";

export default function Aside (props){
    const { 
            setPosterMargin,
            textColor,
            setTextColor,
            bgColor,
            setBgColor,
            setMargin,
            album,
            setAlbum,
            artist,
            setArtist,
            image,
            setImage,
            date,
            setDate,
            year,
            setYear,
            tracklist,
            setTracklist,
            duration,
            setDuration,
            label,
            setLabel,
            genreTagOne,
            setGenreTagOne,
            genreTagTwo,
            setGenreTagTwo,
            genreTagThree,
            setGenreTagThree,
            colorOne,
            setColorOne,
            colorTwo,
            setColorTwo,
            colorThree,
            setColorThree,
            colorFour,
            setColorFour,
            colorFive,
            setColorFive,
            resetColor
            } = props;

    const [showNav, setShowNav] = useState(true);
    const [navContent, setNavContent] = useState("Search");
    const [navHeader, setNavHeader] = useState("Search");

    async function getData (artist, album){
        try{
            const response = await fetch(Config.API_URL + process.env.REACT_APP_API_KEY + "&artist=" + artist + "&album=" + album + "&format=json");
            if(!response.ok) throw console.log("Error!");
                const data = await response.json();
                createPoster(data)
        } catch (err){
            console.error(err)
        }
    };

    useEffect(()=> {
        getData(Config.DEFAULT_ARTIST, Config.DEFAULT_ALBUM)
    }, []);

    function createPoster(response){

        let errorMessages = [];

        if(response.album.name){
            setAlbum(response.album.name);
        } else {
            console.log("The artist was not found.");
            errorMessages.push("The album was not found.")
        };

        if(response.album.artist){
            setArtist(response.album.artist);
        } else {
            console.log("The artist was not found.");
            errorMessages.push("The artist was not found.");
        };

        if(response.album.image){
            setImage(response.album.image[5]["#text"].replace("/300x300", ""));
        } else {
            console.log("The cover art was not found.");
            errorMessages.push("The cover art was not found.");
        }


        let genreArr = [];
        if(response.album.tags){
            for(let i = 0; i < response.album.tags.tag.length; i++){
                let tag = response.album.tags.tag[i].name;
                    genreArr.push(tag);
                    setGenreTagOne(genreArr[0]);
                    setGenreTagTwo(genreArr[1]);
                    setGenreTagThree(genreArr[2]);
            }
        } else {
            console.log("The genre was not found.");
            errorMessages.push("The genre was not found.")
        };

        let tracklistArr = [];
        if(response.album.tracks){
            for( let i = 0;  i < response.album.tracks.track.length; i++){
                let track = response.album.tracks.track[i].name;
                    tracklistArr.push(`${i + 1}. ${track}`);
            }
            let arr = [];
            let newTracklist = divideTracklist(tracklistArr, arr);
                setTracklist(newTracklist);
        } else {
            console.log("The tracklist was not found.");
            errorMessages.push("The tracklist was not found.")
        };

        let durationArr = [];
        if(response.album.tracks){
            let total = 0;
            for(let i = 0; i < response.album.tracks.track.length; i++){
                let duration = response.album.tracks.track[i].duration;
                    durationArr.push(duration);
            }
            for(let i = 0; i < durationArr.length; i++){
                total+=durationArr[i];
                    setDuration(new Date(total * 1000).toISOString().substr(11,8));
            }
        } else{
            console.log("The duration was not found.");
            errorMessages.push("The duration was not found.");
        };

        if(response.album.wiki){
            const regex = /released on ([a-zA-Z]+) (\d+), (\d{4})/;
            const match = (response.album.wiki.content).match(regex);

            if(match){
                const month = match[1].slice(0, 3);
                const day = match[2];
                const year = match[3];
                    setYear(year);
                    setDate(`${month} ${day}, ${year}`)
            } else {
                return null
            }

        } else {
            console.log("The release date was not found.");
            errorMessages.push("The release date was not found.")
        }

        console.log(errorMessages);

    };

    function handleNavContent (content){
        setShowNav(true);
        setMargin(410);
        setNavContent(content);
        setNavHeader(content);
        setPosterMargin(0);
    };

    function hideNavContent (){
        setShowNav(false);
        setMargin(85);
        setPosterMargin(85);
    };

    useEffect(() => {
        function handleResize(){
            if(window.innerWidth < 1000){
                setShowNav(false);
                setMargin(85);
                setPosterMargin(0);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <aside>
            <div className="button-container">
                <Button icon={<Search/>} text="Search" function={()=> handleNavContent("Search")}/>
                <Button icon={<TextFields/>} text="Text" function={()=> handleNavContent("Text")}/>
                <Button icon={<AddPhotoAlternateOutlined/>} text="Image" function={()=> handleNavContent("Image")}/>
                <Button icon={<PaletteOutlined/>} text="Color" function={()=> handleNavContent("Color")}/>
            </div>
            {showNav && (
                <SideNav
                navHeader={navHeader}
                navContent={navContent}
                hideNavContent={hideNavContent}
                textColor= {textColor}
                setTextColor = {setTextColor}
                bgColor = {bgColor}
                setBgColor={setBgColor}
                album={album}
                setAlbum={setAlbum}
                artist={artist}
                setArtist={setArtist}
                image={image}
                setImage={setImage}
                date={date}
                setDate={setDate}
                year={year}
                setYear={setYear}
                tracklist={tracklist}
                setTracklist={setTracklist}
                duration={duration}
                setDuration={setDuration}
                label={label}
                setLabel={setLabel}
                genreTagOne={genreTagOne}
                setGenreTagOne={setGenreTagOne}
                genreTagTwo={genreTagTwo}
                setGenreTagTwo={setGenreTagTwo}
                genreTagThree={genreTagThree}
                setGenreTagThree={setGenreTagThree}
                colorOne={colorOne}
                setColorOne={setColorOne}
                colorTwo={colorTwo}
                setColorTwo={setColorTwo}
                colorThree={colorThree}
                setColorThree={setColorThree}
                colorFour={colorFour}
                setColorFour={setColorFour}
                colorFive={colorFive}
                setColorFive={setColorFive}
                resetColor={resetColor}
                />
            )}
        </aside>
    )
}
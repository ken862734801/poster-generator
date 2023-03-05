import React, { useEffect, useState } from "react";
import "./search.css";
import SearchBar from "../searchbar";
import { divideTracklist } from "../../util";
import { Close, Search } from "@material-ui/icons";

const SearchComponent = (props) => {
    const { setAlbum, setArtist, setImage, setDate, setYear, setDuration, setTracklist, setGenreTagOne, setGenreTagTwo, setGenreTagThree} = props;

   const [inputValues, setInputValues] = useState({artist: "", album: ""});
   const [formSubmitted, setFormSubmitted] = useState(false);

    const getData = async (artist, album) => {
        try{
            const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + process.env.REACT_APP_API_KEY + "&artist=" + artist + "&album=" + album + "&format=json");
            if(!response.ok) throw alert("The album was not found.");
                const data = await response.json();
                    console.log(data);
                    createPoster(data);
        } catch (err){
            console.error(err)
        }
    };
    
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

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(inputValues.artist, inputValues.album);
        setFormSubmitted(true);
        resetForm();
    };

    const resetForm = () => {
        inputValues.artist = "";
        inputValues.album = "";
    };

    return (
        
            <div className="nav-content-container">
                <form className="search-container" onSubmit={handleSubmit}>
                    <SearchBar formSubmitted={formSubmitted}  inputValues={inputValues} setInputValues={setInputValues} nameText = "artist" placeholderText = "Search Artist"/>
                    <SearchBar formSubmitted={formSubmitted}  inputValues={inputValues} setInputValues={setInputValues}  nameText = "album" placeholderText = "Search Album"/>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
    )
    
}

export default SearchComponent;
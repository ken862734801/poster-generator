import React, { useEffect, useState } from "react";
import "./search.css";
import SearchBar from "../searchbar";
import { Close, Search } from "@material-ui/icons";

const SearchComponent = (props) => {
    const { setShowNav, setAlbum, setArtist, setImage, setDate, setYear, setDuration, setTracklist, setGenreTagOne, setGenreTagTwo, setGenreTagThree} = props;


   const [inputValues, setInputValues] = useState({artist: "", album: ""});

    const getData = async (artist, album) => {
        try{
            const response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=" + process.env.REACT_APP_API_KEY + "&artist=" + artist + "&album=" + album + "&format=json");
            if(!response.ok) throw console.log("Error!");
                const data = await response.json();
                    createPoster(data);
        } catch (err){
            console.error(err)
        }
    };

    // getData("Tame Impala", "Currents");
    
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

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(inputValues.artist, inputValues.album);
        resetForm();
    };

    const resetForm = () => {
        inputValues.artist = "";
        inputValues.album = "";
    };

    return (
        
            <div className="nav-content-container">
                <form className="search-container" onSubmit={handleSubmit}>
                    <SearchBar inputValues={inputValues} setInputValues={setInputValues} nameText = "artist" placeholderText = "Search Artist"/>
                    <SearchBar inputValues={inputValues} setInputValues={setInputValues}  nameText = "album" placeholderText = "Search Album"/>
                    {/* <input className="searchbar" type="text" placeholder="" name="artist" value={inputValues.artist} onChange={handleInputChange}></input>
                    <input className="searchbar" type="text" placeholder=""name="album" value={inputValues.album} onChange={handleInputChange}></input> */}
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
    )
    
}

export default SearchComponent;
import "./aside.css";
import { useState } from "react";
import SearchComponent from "../search";

const Aside = (props) => {
    const {setAlbum, setArtist, setImage, setDate, setYear, setTracklist ,setDuration, setGenreTagOne, setGenreTagTwo, setGenreTagThree } = props;

    return (
        <aside>
            <SearchComponent setAlbum={setAlbum} setArtist={setArtist} setImage={setImage} 
            setDate={setDate} setYear={setYear} setDuration = {setDuration} setTracklist={setTracklist}
            setGenreTagOne={setGenreTagOne} setGenreTagTwo={setGenreTagTwo} setGenreTagThree={setGenreTagThree}>
            </SearchComponent>
        </aside>
    )
};

export default Aside;
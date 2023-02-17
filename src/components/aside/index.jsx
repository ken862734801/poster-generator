import "./aside.css";
import { useState } from "react";
import SearchComponent from "../search";
import { Search, PaletteOutlined, ImageOutlined, TextFields, AddPhotoAlternateOutlined } from "@material-ui/icons";


const Aside = (props) => {
    const {setAlbum, setArtist, setImage, setDate, setYear, setTracklist ,setDuration, setGenreTagOne, setGenreTagTwo, setGenreTagThree } = props;

    const [showNav, setShowNav] = useState(true);
    const [navContent, setNavContent] = useState("search");

    const handleClick = (content) => {
        setShowNav(true);
        setNavContent(content);
    };

    const hideNav = () => {
        setShowNav(false);
    }

    return (
        <aside>
            <div className="aside-btn-container">
                <div className="aside-btn" onClick={() => handleClick("search")}>
                    <Search/>
                    <p>Search</p>
                </div>
                <div className="aside-btn" onClick={() => handleClick("color")}>
                    <PaletteOutlined/>
                    <p>Color</p>
                </div>
                <div className="aside-btn" onClick={() => handleClick("image")}>
                    <AddPhotoAlternateOutlined/>
                    <p>Image</p>
                </div>
                <div className="aside-btn" onClick={() => handleClick("text")}>
                    <TextFields/>
                    <p>Text</p>
                </div>
            </div>
            {/* <SearchComponent setAlbum={setAlbum} setArtist={setArtist} setImage={setImage} 
            setDate={setDate} setYear={setYear} setDuration = {setDuration} setTracklist={setTracklist}
            setGenreTagOne={setGenreTagOne} setGenreTagTwo={setGenreTagTwo} setGenreTagThree={setGenreTagThree}>
            </SearchComponent> */}
            {showNav && (
                <div className="side-nav">
                    <div className="side-nav-header">
                        <p onClick={() => hideNav()}>&#10006;</p>
                    </div>
                    {navContent === "search" && <SearchComponent setAlbum={setAlbum} setArtist={setArtist} setImage={setImage} 
                    setDate={setDate} setYear={setYear} setDuration = {setDuration} setTracklist={setTracklist}
                    setGenreTagOne={setGenreTagOne} setGenreTagTwo={setGenreTagTwo} setGenreTagThree={setGenreTagThree}>
                    </SearchComponent>} 
                    {navContent === "color" && <div>colors</div>}
                </div>
            )}
        </aside>
    )
};

export default Aside;
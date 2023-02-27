import "./sidenav.css";
import SearchComponent from "../search";
import ColorComponent from "../color";
import ImageComponent from "../image";
import TextComponent from "../text";
import { Close } from "@material-ui/icons";

export default function SideNav (props){
    const { navHeader,
            navContent,
            hideNavContent,
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
            resetColor} = props;
    return (
        <div className="side-nav">
            <div className="side-nav-header">
                <p>{navHeader}</p>
                <Close className="close-button" fontSize="small" onClick={hideNavContent}/>
            </div>
            {navContent === "Search" && 
            <SearchComponent setAlbum={setAlbum}
                             setArtist={setArtist}
                             setImage={setImage}
                             setDate={setDate}
                             setYear={setYear}
                             setDuration={setDuration}
                             setTracklist={setTracklist}
                             setLabel={setLabel}
                             setGenreTagOne={setGenreTagOne}
                             setGenreTagTwo={setGenreTagTwo}
                             setGenreTagThree={setGenreTagThree}
            />}
            {navContent === "Text" && 
            <TextComponent  year={year} 
                            setYear={setYear}
                            album={album}
                            setAlbum={setAlbum}
                            artist={artist}
                            setArtist={setArtist}
                            date={date}
                            setDate={setDate}
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
                            tracklist={tracklist}
                            setTracklist={setTracklist}
            />}
            {navContent === "Image" && 
            <ImageComponent image={image}
                            setImage={setImage}
            />}
            {navContent === "Color" &&
            <ColorComponent  textColor={textColor}
                             setTextColor={setTextColor}
                             bgColor={bgColor}
                             setBgColor={setBgColor}
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
            />}
        </div>
    )
}
import "./main.css";
import Poster from "../poster";
import ZoomButton from "../zoom";

export default function Main(props){
    const { 
            posterMargin,
            margin,
            bgColor,
            textColor,
            zoom,
            setZoom,
            album,
            artist, 
            image,
            date,
            duration, 
            label, 
            year,
            tracklist,
            genreTagOne,
            genreTagTwo,
            genreTagThree,
            colorOne,
            colorTwo,
            colorThree,
            colorFour,
            colorFive} = props
    return(
        <main style={{marginLeft: `${margin}px`}}>
            <Poster
                posterMargin={posterMargin}
                bgColor={bgColor}
                textColor={textColor}
                zoom={zoom}
                album={album}
                artist={artist}
                image = {image}
                date= {date}
                duration ={duration}
                label = {label}
                year = {year}
                tracklist = {tracklist}
                genreTagOne = {genreTagOne}
                genreTagTwo = {genreTagTwo}
                genreTagThree = {genreTagThree}
                colorOne = {colorOne}
                colorTwo = {colorTwo}
                colorThree = {colorThree}
                colorFour = {colorFour}
                colorFive = {colorFive}
            />
            <ZoomButton 
                zoom={zoom}
                setZoom = {setZoom} 
            />
        </main>
    )
}
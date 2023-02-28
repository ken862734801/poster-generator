import "./main.css";
import Poster from "../poster";

export default function Main(props){
    const { 
            posterMargin,
            margin,
            bgColor,
            textColor,
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
        </main>
    )
}
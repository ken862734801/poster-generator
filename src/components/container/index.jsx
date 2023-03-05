import "./container.css";
import Aside from "../aside";
import Main from "../main";
import { dateString, currentYear } from "../util";
import { useState, useEffect } from "react";
import { usePalette } from "react-palette";

export default function Container(){
    
    const [margin, setMargin] = useState(410);
    const [posterMargin, setPosterMargin] = useState(0);
    const [bgColor, setBgColor] = useState("#FFFFFF");
    const [textColor, setTextColor] = useState("#000000");

    const [album, setAlbum] = useState("Album");
    const [artist, setArtist] = useState("Artist");
    const [image, setImage]= useState("");
    const [date, setDate] = useState(dateString);
    const [duration, setDuration] = useState("00:00:00");
    const [label, setLabel] = useState("Label");
    const [year, setYear] = useState(currentYear);
    const [tracklist, setTracklist] = useState([["1. Track Name", "2. Track Name","3. Track Name","4. Track Name", "5. Track Name", "6. Track Name","7. Track Name", "8. Track Name", "9. Track Name"]]);
    const [genreTagOne, setGenreTagOne] = useState("Genre");
    const [genreTagTwo, setGenreTagTwo] = useState("Genre");
    const [genreTagThree, setGenreTagThree] = useState("Genre");

    const {data, loading, error} = usePalette(image);
    const [colorOne, setColorOne] = useState();
    const [colorTwo, setColorTwo] = useState();
    const [colorThree, setColorThree] = useState();
    const [colorFour, setColorFour] = useState();
    const [colorFive, setColorFive] = useState();

    useEffect(() => {
        if(error){
            console.error(error)
        }
        if (data){
            setColorOne(data.vibrant);
            setColorTwo(data.lightVibrant);
            setColorThree(data.darkVibrant);
            setColorFour(data.muted);
            setColorFive(data.lightMuted);
        }
    }, [data, error]);

    function resetColor (){
        setTextColor("#000000");
        setBgColor("#FFFFFF");
        setColorOne(data.vibrant);
        setColorTwo(data.lightVibrant);
        setColorThree(data.darkVibrant);
        setColorFour(data.muted);
        setColorFive(data.lightMuted);
    };

    return(
        <div className="container">
            <Aside
                posterMargin={posterMargin}
                setPosterMargin={setPosterMargin}
                margin={margin}
                setMargin={setMargin}
                bgColor={bgColor}
                setBgColor={setBgColor}
                textColor={textColor} 
                setTextColor={setTextColor}
                album={album}
                setAlbum={setAlbum}
                artist={artist} 
                setArtist = {setArtist}
                image = {image}
                setImage = {setImage}
                date = {date}
                setDate = {setDate}
                duration = {duration}
                setDuration = {setDuration}
                label = {label}
                setLabel = {setLabel}
                year = {year}
                setYear = {setYear}
                tracklist = {tracklist}
                setTracklist = {setTracklist}
                genreTagOne = {genreTagOne}
                setGenreTagOne = {setGenreTagOne}
                genreTagTwo = {genreTagTwo}
                setGenreTagTwo = {setGenreTagTwo}
                genreTagThree = {genreTagThree}
                setGenreTagThree = {setGenreTagThree}
                colorOne = {colorOne}
                setColorOne = {setColorOne}
                colorTwo = {colorTwo}
                setColorTwo = {setColorTwo}
                colorThree = {colorThree}
                setColorThree = {setColorThree}
                colorFour = {colorFour}
                setColorFour = {setColorFour}
                colorFive = {colorFive}
                setColorFive = {setColorFive}
                resetColor = {resetColor}
            />
            <Main
                posterMargin={posterMargin}
                margin={margin}
                bgColor={bgColor}
                textColor={textColor} 
                album={album}
                artist={artist} 
                image = {image}
                date = {date}
                duration = {duration}
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
        </div>
    )
}
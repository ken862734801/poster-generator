import React, {useState} from "react";
import { usePalette } from "react-palette";

// class Poster {
//     constructor(album, artist, image, year, date, tracklist, duration, genre){
//         this.album = album;
//         this.artist = artist;
//         this.image = image;
//         this.year = year;
//         this.date = date;
//         this.tracklist = tracklist;
//         this.duration = duration;
//         this.genre = genre;
//     }
// };

// const divideTracklist = (arr, newArr) => {
//     if(arr.length <= 10){
//         newArr.push(arr)
//             return newArr
//     }else if(arr.length > 10){
//         let left = arr.slice(0,9);
//         let right = arr.slice(9);
//         newArr.push(left);
//             return divideTracklist(right, newArr)
//     }
// };

// let currentDate = Date.now();
// let dateObject = new Date(currentDate);

// const monthName = dateObject.toLocaleString("en-US", {month: "short"});
// const monthDay = dateObject.getDate();
// const currentYear = dateObject.getFullYear();

// let dayNum;
// if(monthDay < 10){
//     dayNum = "0" + monthDay
// } else {
//     dayNum = monthDay
// };

// const defaultDate = `${monthName} ${dayNum}, ${currentYear}`

const Test = () => {

    // const [album, setAlbum] = useState("Album");
    // const [artist, setArtist] = useState("Artist");
    // const [backgroundColor, setBackgroundColor] = useState("");
    // const [date, setDate] = useState("");
    // const [duration, setDuration] = useState("");
    // const [font, setFont] = useState();
    // const [genreOne, setGenreOne] = useState("Genre");
    // const [genreTwo, setGenreTwo] = useState("Genre");
    // const [genreThree, setGenreThree] = useState("Genre");
    // const [image, setImage] = useState("");
    // const [tracklist, setTracklist] = useState("");
    // const [year, setYear] = useState(defaultDate);
    // const [zoomLevel, setZoomLevel] = useState(100);

    // const createNewPoster = (response) => {
    //     let posterYear = response.album.wiki.published.split(",")[0].split(" ")[2];
    //     let posterArtist = response.album.artist;
    //     let posterAlbum = response.album.name;
    //     let posterImage = response.album.image[5]["#text"].replace("/300x300", "");

    //     let durationArr = [];
    //     let total = 0;
    //     if(response.album.tracks){
    //         for(let i = 0; i < response.album.tracks.track.length; i++){
    //             let trackDuration = response.album.tracks.track[i].duration;
    //                 durationArr.push(trackDuration);
    //         }
    //         for(let i = 0; i < durationArr.length; i++){
    //             total+=durationArr[i]
    //         }
    //     }else if(!response.album.tracks){
    //         total = 0;
    //     };
    //     let posterDuration = new Date(total * 1000).toISOString().substr(11,8);

    //     let posterGenre = [];
    //     if(response.album.tags.tag){
    //         for(let i = 0; i < response.album.tags.tag; i++){
    //             let tag = response.album.tags.tag[i].name;
    //                 posterGenre.push(tag);
    //         }
    //     }else if(!response.album.tags.tag){
    //         for(let i = 0; i < 3; i++){
    //             posterGenre.push("Genre");
    //         }
    //     };
        
    //     setAlbum(posterAlbum);
    //     setArtist(posterArtist);
    //     setDuration(posterDuration);
    //     setGenreOne(posterGenre[0]);
    //     setGenreTwo(posterGenre[1]);
    //     setGenreThree(posterGenre[2]);
    //     setImage(posterImage);
    //     setYear(posterYear);

    // }

    return(
        <div className="main">
            <aside>
                <div className="aside-btn-container">
                    <button>Search</button>
                    <button>Colors</button>
                </div>
                <div className="aside-sidenav"></div>
            </aside>
            <div className="poster-canvas">
                <div className="poster-wrapper">
                    <div className="poster-container"></div>
                </div>
            </div>
        </div>
    )

};

export default Test;
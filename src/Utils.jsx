import DomToImage from "dom-to-image";

// Functionality to get the current date formated as a string.
let currentDate = Date.now();
let dateObject = new Date(currentDate);

const monthName = dateObject.toLocaleString("en-US", { month: "short" });
const monthDay = dateObject.getDate();
const currentYear = dateObject.getFullYear();

let dayNum;
if(monthDay < 10){
    dayNum = "0" + monthDay
} else{
    dayNum = monthDay
}

const dateString = `${monthName} ${dayNum}, ${currentYear}`;

// Functionality to convert the poster to a jpeg that can be downloaded.
const saveJpeg = () => {
    DomToImage.toJpeg(document.getElementById("poster-container"), {quality:0.95})
        .then(function(dataUrl){
            let link = document.createElement("a");
            link.download = "my-image-name.jpeg";
            link.href = dataUrl;
            link.click();
        })
};

// Class constructer to create a poster object with the necessary fields to render the data.
class Poster {
    constructor(album, artist, image, year, date, tracklist, duration, genre){
        this.album = album;
        this.artist = artist;
        this.image = image;
        this.year = year;
        this.date = date;
        this.tracklist = tracklist;
        this.duration = duration;
        this.genre = genre;
    }
};

// Recursive functionality to divide the tracklist at every 10th song. 
const divideTracklist = (arr, newArr) => {
    if(arr.length <= 10){
        newArr.push(arr)
        return newArr
    }else if(arr.length > 10){
        let left = arr.slice(0, 9);
        let right = arr.slice(9);
        newArr.push(left);
        return divideTracklist(right, newArr)
    }
};



export {dateString, saveJpeg, Poster, divideTracklist}
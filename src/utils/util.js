const date = new Date();

const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
};

const monthOptions = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec"
  };
  

function getCurrentDate () {
    return date.toLocaleDateString('en-US', dateOptions)
};

function getCurrentYear (){
    return date.getFullYear();
};

const currentDate = getCurrentDate();
const currentYear = getCurrentYear();

function handleDateRegex(str){
    const dateRegex = /(\d{1,2}|[A-Za-z]+) (\d{1,2}|[A-Za-z]+),? (\d{4})/;
    const match = dateRegex.exec(str);
    if (match) {
        let day = match[1];
        let month = match[2];
        let year = match[3];
        if(day.length > month.length){
            month = match[1];
            day = match[2];
        }
        if(monthOptions[month]){
            month = monthOptions[month];
        }
        return { releaseDate: `${month} ${day}, ${year}`, releaseYear: year };
    } else {
        return { releaseDate: currentDate, releaseYear: currentYear }
    }
};

function divideTrackList(arr1, arr2){
    let left, right;
    if(arr1.length <= 10){
        arr2.push(arr1);
            return arr2
    } else if (arr1.length > 10){
        left = arr1.slice(0, 9);
        right = arr1.slice(9);
        arr2.push(left);
            return divideTrackList(right, arr2)
    }
};

function getRandomObject (object){
    const randomIndex = Math.floor(Math.random() * object.length);
        return object[randomIndex];
};

export { divideTrackList, getCurrentDate, getCurrentYear, getRandomObject, handleDateRegex };
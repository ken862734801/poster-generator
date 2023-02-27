let currentDate = Date.now();
let dateObject = new Date(currentDate);

const monthName = dateObject.toLocaleString("en-US", {month: "short"});
const monthDay = dateObject.getDate();
const currentYear = dateObject.getFullYear();

let dayNum;
if (monthDay < 10){
    dayNum = "0" + monthDay
}else {
    dayNum = monthDay
};

const dateString = `${monthName} ${dayNum}, ${currentYear}`;

function divideTracklist (arr, newArr){
    if(arr.length <= 10){
        newArr.push(arr)
            return newArr
    } else if (arr.length > 10){
        let left = arr.slice(0,9);
        let right = arr.slice(9);
            newArr.push(left);
                return divideTracklist(right, newArr)
    }
};

export {dateString, currentYear, divideTracklist}
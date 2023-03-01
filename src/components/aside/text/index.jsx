import "./text.css";
import Reset from "../reset";
import { useEffect, useState } from "react";

const TextComponent = (props) => {

    const {year, setYear, album, setAlbum, artist, setArtist, date, setDate, duration, setDuration, label, setLabel, genreTagOne,
    setGenreTagOne, setGenreTagTwo ,genreTagTwo, setGenreTagThree ,genreTagThree, tracklist, setTracklist} = props;

    const [initialValues, setInitialValues] = useState({
        defaultYear: year,
        defaultAlbum: album,
        defaultArtist: artist,
        defaultDate: date,
        defaultDuration: duration,
        defaultLabel: label,
        defaultGenreTagOne: genreTagOne,
        defaultGenreTagTwo: genreTagTwo,
        defaultGenreTagThree: genreTagThree,
        defaultTracklist: JSON.parse(JSON.stringify(tracklist)) // create a new copy of the tracklist array
      });

    const [listLength, setListLength] = useState(0);

    useEffect(() => {
        setInitialValues({
            defaultYear: year,
            defaultAlbum: album,
            defaultArtist: artist,
            defaultDate: date,
            defaultDuration: duration,
            defaultLabel: label,
            defaultGenreTagOne: genreTagOne,
            defaultGenreTagTwo: genreTagTwo,
            defaultGenreTagThree: genreTagThree,
            defaultTracklist: JSON.parse(JSON.stringify(tracklist))
          });
    }, []);

    const handleResetClick = () => {
        setYear(initialValues.defaultYear);
        setAlbum(initialValues.defaultAlbum);
        setArtist(initialValues.defaultArtist);
        setDate(initialValues.defaultDate);
        setDuration(initialValues.defaultDuration);
        setLabel(initialValues.defaultLabel);
        setGenreTagOne(initialValues.defaultGenreTagOne);
        setGenreTagTwo(initialValues.defaultGenreTagTwo);
        setGenreTagThree(initialValues.defaultGenreTagThree);
        setTracklist(JSON.parse(JSON.stringify(initialValues.defaultTracklist)));
      };

    const handleNumberInput = (e) => {
      console.log(e.target.value);
      setListLength(e.target.value);
    }
    const handleTracklistChange = (index, subIndex, value) => {
      setTracklist(prevTracklist => {
        const newTracklist = [...prevTracklist];
        newTracklist[index][subIndex] = value;
          return newTracklist;
      });
    };
      
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
          case "year":
            setYear(value);
            break;
          case "album":
            setAlbum(value);
            break;
          case "artist":
            setArtist(value);
            break;
          case "date":
            setDate(value);
            break;
          case "duration":
            setDuration(value);
            break;
          case "label":
            setLabel(value);
            break;
          case "genreTagOne":
            setGenreTagOne(value);
            break;
          case "genreTagTwo":
            setGenreTagTwo(value);
            break;
          case "genreTagThree":
            setGenreTagThree(value);
            break;
          default:
            break;
        }
      };

      // testing manual tracklist creation
      // const newArray = Array.from({listLength}, (_, i) => `${i+1}. Track Name`);
      // console.log(newArray);
      // let emptyArray = [];

      const divideTracklist = (arr, newArr) => {
        if(arr.length <= 10){
            newArr.push(arr)
                return newArr
        }else if(arr.length > 10){
            let left = arr.slice(0,9);
            let right = arr.slice(9);
                newArr.push(left);
                    return divideTracklist(right, newArr)
        }
    };

    // const updatedArray = divideTracklist(newArray, emptyArray);
    // console.log(updatedArray);

    const handleManualEntry = () => {
      let emptyArray = [];
      const newArray = Array.from({length: listLength}, (_, i) => `${i+1}. Track Name`);
      const updatedArray = divideTracklist(newArray, emptyArray);
      setTracklist(updatedArray);
    }

    return (
        <div className="nav-content-container">
           <div className="text-container">
                {/* <label>Font</label>
                <div className="text-select-container">
                    <select value="Verdana">
                        <option>Arial</option>
                        <option>Monospace</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                </div> */}
                <label>Year</label>
                <div className="text-input-container">
                    <input type="text" name="year" value={year} onChange={handleInputChange} />
                    {/* <select>
                        <option>1</option>
                        <option>2</option>
                    </select> */}
                </div>
                <label>Album</label>
                <div className="text-input-container">
                    <input type="text" name="album" value={album} onChange={handleInputChange} />
                    {/* <input type="text" name="city" list="citynames"/>
                        <datalist id="citynames">
                            <option value="Boston"></option>
                            <option value="Cambridge"></option>
                        </datalist> */}
                </div>
                <label>Artist</label>
                <div className="text-input-container">
                    <input type="text" name="artist" value={artist} onChange={handleInputChange} />
                </div>
                <label htmlFor="">Release Date:</label>
                <div className="text-input-container">
                    <input type="text" name="date" value={date} onChange={handleInputChange} />
                </div>
                <label htmlFor="">Duration:</label>
                <div className="text-input-container">
                    <input type="text" name="duration" value={duration} onChange={handleInputChange} />
                </div>
                <label>Label</label>
                <div className="text-input-container">
                    <input type="text" name="label" value={label} onChange={handleInputChange} />
                </div>
                <label>Genre #1</label>
                <div className="text-input-container">
                    <input type="text" name="genreTagOne" value={genreTagOne} onChange={handleInputChange}/>
                </div>
                <label>Genre #2</label>
                <div className="text-input-container">
                    <input type="text" name="genreTagTwo" value={genreTagTwo} onChange={handleInputChange}/>
                </div>
                <label>Genre #3</label>
                <div className="text-input-container">
                    <input type="text" name="genreTagThree" value={genreTagThree} onChange={handleInputChange}/>
                </div>
                {/* {tracklist.map((subArray, index) => (
                  <div key={index}>
                    {subArray.map((value, subIndex) => (
                      <input
                        key={subIndex}
                        value={value}
                        onChange={(e) => handleTracklistChange(index, subIndex, e.target.value)}
                      />
                    ))}
                  </div>
                ))} */}
              <Reset onClick={handleResetClick}/>
              {/* <p>Select number of songs:</p>
              <input type="number" value={listLength} onChange={handleNumberInput}></input>
              <button onClick = {handleManualEntry}>Manually enter track list</button>  */}
          </div>
        </div>
    )
}

export default TextComponent;

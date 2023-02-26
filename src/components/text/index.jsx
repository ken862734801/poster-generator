import "./text.css";
import { useEffect, useState } from "react";

let test =  [['1. Supermodel', '2. Love Galore', '3. Doves In the Wind', '4. Drew Barrymore', '5. Prom', '6. The Weekend', '7. Go Gina', '8. Garden (Say It Like Dat)', '9. Broken Clocks'], ['10. Anything', '11. Wavy (Interlude)', '12. Normal Girl', '13. Pretty Little Birds', '14. 20 Something']]

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
        defaultGenreTagThree: genreTagThree
    });

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
            defaultGenreTagThree: genreTagThree
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
    };

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
            </div>
            {tracklist.map((subArray, index) => (
              <div key={index}>
                {subArray.map((value, subIndex) => (
                  <input
                    key={subIndex}
                    value={value}
                    onChange={(e) => handleTracklistChange(index, subIndex, e.target.value)}
                  />
                ))}
              </div>
            ))}
            <button onClick={handleResetClick}>Reset</button>
        </div>
    )
}

export default TextComponent;

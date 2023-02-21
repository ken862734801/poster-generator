import "./text.css";

const TextComponent = (props) => {

    const {year, setYear, album, setAlbum, duration, setDuration} = props;

    return (
        <div className="nav-content-container">
           <div className="text-container">
                <label>Font</label>
                <div className="text-select-container">
                    <select defaultValue="Verdana">
                        <option>Arial</option>
                        <option>Monospace</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                </div>
                <label>Year</label>
                <div className="text-input-container">
                    <input type="text" value={year}/>
                    {/* <select>
                        <option>1</option>
                        <option>2</option>
                    </select> */}
                </div>
                <label>Album</label>
                <div className="text-input-container">
                    <input type="text" value={album}/>
                    {/* <input type="text" name="city" list="citynames"/>
                        <datalist id="citynames">
                            <option value="Boston"></option>
                            <option value="Cambridge"></option>
                        </datalist> */}
                </div>
                <label>Artist</label>
                <div className="text-input-container">
                    <input type="text"></input>
                </div>
                <label>Label</label>
                <div className="text-input-container">
                    <input type="text"></input>
                </div>
                <label htmlFor="">Duration:</label>
                <div className="text-input-container">
                    <input type="text" value={duration}></input>
                </div>
            </div>
        </div>
    )
}

export default TextComponent;
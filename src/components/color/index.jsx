import "./color.css";


const ColorComponent = (props) => {

    const { colorOne, setColorOne, colorTwo, setColorTwo, 
            colorThree, setColorThree, colorFour, setColorFour, 
            setColorFive, colorFive} = props;


    const handleColorChange = (e) => {
        const {name, value } = e.target;
        if(e.target.type === "text"){
            switch (name){
                case "colorOne":
                    setColorOne(value);
                    break;
                default:
                    break;
            }
        } else if (e.target.type === "color"){
            switch(name){
                case "colorOne":
                    setColorOne(value);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <div className="nav-content-container">
                <div className="palette-input">
                    <input type="color" name="colorOne" defaultValue={colorOne} onChange={handleColorChange}></input>
                    <label htmlFor=""></label>
                    <input type="text" name="colorOne" defaultValue={colorOne} onChange={handleColorChange}></input>
                </div>
                <div className="palette-input">
                    <input type="color" value={colorTwo}></input>
                    <label htmlFor=""></label>
                    <input type="text" value={colorTwo}></input>
                </div>
                <div className="palette-input">
                    <input type="color" value={colorThree}></input>
                    <label htmlFor=""></label>
                    <input type="text" value={colorThree}></input>
                </div>
                <div className="palette-input">
                    <input type="color" value={colorFour}></input>
                    <label htmlFor=""></label>
                    <input type="text" value={colorFour}></input>
                </div>
                <div className="palette-input">
                    <input type="color" value={colorFive}></input>
                    <label htmlFor=""></label>
                    <input type="text" value={colorFive}></input>
                </div>
        </div>
    )
}

export default ColorComponent;
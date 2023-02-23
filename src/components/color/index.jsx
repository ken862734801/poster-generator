import { useState } from "react";
import "./color.css";


const ColorComponent = (props) => {

    const { textColor, setTextColor, bgColor, setBgColor, colorOne, setColorOne, colorTwo, setColorTwo, 
            colorThree, setColorThree, colorFour, setColorFour, 
            setColorFive, colorFive, resetPalette } = props;

    const handleColorChange = (e) => {
        const {name, value } = e.target;
        if(e.target.type === "text"){
            switch (name){
                case "colorOne":
                    setColorOne(value);
                    break;
                case "colorTwo":
                    setColorTwo(value);
                    break;
                case "colorThree":
                    setColorThree(value);
                    break;
                case "colorFour":
                    setColorFour(value);
                    break;
                case "colorFive":
                    setColorFive(value);
                    break;
                case "bgColor":
                    setBgColor(value);
                    break;
                case "textColor":
                    setTextColor(value);
                    break;
                default:
                    break;
            }
        } else if (e.target.type === "color"){
            switch(name){
                case "colorOne":
                    setColorOne(value);
                    break;
                case "colorTwo":
                    setColorTwo(value);
                    break;
                case "colorThree":
                    setColorThree(value);
                    break;
                case "colorFour":
                    setColorFour(value);
                    break;
                case "colorFive":
                    setColorFive(value);
                    break;
                case "bgColor":
                    setBgColor(value);
                    break;
                case "textColor":
                    setTextColor(value);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <div className="nav-content-container">
                <p>Background</p>
                <div className="background-input">
                    <input type="color" name="bgColor" value={bgColor} onChange={handleColorChange}></input>
                    <label htmlFor=""></label>
                    <input type="text" name="bgColor" value={bgColor} onChange={handleColorChange}></input>
                </div>
                <p>Font</p>
                <div className="font-input">
                    <input type="color" name="textColor" value={textColor} onChange={handleColorChange}></input>
                    <label htmlFor=""></label>
                    <input type="text" name="textColor" value={textColor} onChange={handleColorChange}></input>
                </div>
                <p>Palette</p>
                <div className="palette-input">
                    <input type="color" name="colorOne" value={colorOne} onChange={handleColorChange}></input>
                    <label htmlFor=""></label>
                    <input type="text" name="colorOne" value={colorOne} onChange={handleColorChange}></input>
                </div>
                <div className="palette-input">
                    <input type="color" name="colorTwo" value={colorTwo} onChange={handleColorChange}></input>
                    <label htmlFor=""></label>
                    <input type="text"  name="colorTwo" value={colorTwo} onChange={handleColorChange}></input>
                </div>
                <div className="palette-input">
                    <input type="color" name="colorThree" value={colorThree} onChange={handleColorChange}></input>
                    <label htmlFor=""></label>
                    <input type="text" name="colorThree" value={colorThree} onChange={handleColorChange}></input>
                </div>
                <div className="palette-input">
                    <input type="color" name="colorFour" value={colorFour} onChange={handleColorChange}></input>
                    <label htmlFor=""></label>
                    <input type="text" name="colorFour" value={colorFour} onChange={handleColorChange}></input>
                </div>
                <div className="palette-input">
                    <input type="color" name="colorFive" value={colorFive} onChange={handleColorChange}></input>
                    <label htmlFor=""></label>
                    <input type="text" name="colorFive" value={colorFive} onChange={handleColorChange}></input>
                </div>
                <button onClick={resetPalette}>RESET</button>
        </div>
    )
}

export default ColorComponent;
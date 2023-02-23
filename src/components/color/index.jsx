import { useState } from "react";
import "./color.css";


const ColorComponent = (props) => {

    const { colorOne, setColorOne, colorTwo, setColorTwo, 
            colorThree, setColorThree, colorFour, setColorFour, 
            setColorFive, colorFive } = props;

    // const handleColorChange = (e) => {
    //     const { name, value } = e.target;
    //     if (e.target.type === "text") {
    //       setColors({ ...colors, [name]: value });
    //     } else if (e.target.type === "color") {
    //       setColors({ ...colors, [name]: value });
    //     }
    //   };

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
                    <input type="color" name="colorTwo" defaultValue={colorTwo} onChange={handleColorChange}></input>
                    <label htmlFor=""></label>
                    <input type="text"  name="colorTwo" defaultValue={colorTwo} onChange={handleColorChange}></input>
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
        </div>
    )
}

export default ColorComponent;
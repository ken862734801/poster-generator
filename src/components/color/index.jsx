import "./color.css";


const ColorComponent = () => {
    const inputs = document.querySelectorAll('input[type="color"]');
    const palettes = document.querySelectorAll(".poster-palette-color");

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
        palettes[index].style.backgroundColor = input.value;
        });
    });

    return (
        <div className="nav-content-container">
            <div className="palette-input-container">
                <div className="palette-input">
                    <input type="color"></input>
                    <label htmlFor=""></label>
                    <input type="text"></input>
                </div>
                <div className="palette-input">
                    <input type="color"></input>
                    <label htmlFor=""></label>
                    <input type="text"></input>
                </div>
                <div className="palette-input">
                    <input type="color"></input>
                    <label htmlFor=""></label>
                    <input type="text"></input>
                </div>
                <div className="palette-input">
                    <input type="color"></input>
                    <label htmlFor=""></label>
                    <input type="text"></input>
                </div>
                <div className="palette-input">
                    <input type="color"></input>
                    <label htmlFor=""></label>
                    <input type="text"></input> 
                </div>
            </div>
        </div>
    )
}

export default ColorComponent;
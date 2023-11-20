import './color-input.css';

function ColorInput (props){

    const { type, inputName, inputValue, colorPalette, setColorPalette, settings, setSettings } = props;

    function handleColorInputChange(e, type){
        const { value } = e.target;

        if(type === 'palette'){
            const newColorPalette = { ...colorPalette };
            newColorPalette.colors[inputName] = value;
            setColorPalette(newColorPalette);
        } else if (type === 'settings'){
            const newSettings = { ...settings };
            newSettings.colors[inputName] = value;
            setSettings(newSettings);
        }
    };

    return (
        <>
        <label htmlFor={inputName}>{inputName}</label>
        <div className='color-input'>
            <div>
                <div>
                    <span>HEX</span>
                    <input onChange={(e)=> handleColorInputChange(e, type)} type='text' name={inputName} value={inputValue}></input>
                </div>
                <div>
                    <input onChange={(e)=> handleColorInputChange(e, type)} type='color' name={inputName} value={inputValue}></input>
                </div>
            </div>
        </div>
        </>
    )
};

export default ColorInput;
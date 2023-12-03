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
        <label className='color-input--label' htmlFor={inputName}>
            <p>{inputName}</p>
        </label>
        <div className='color-input'>
            <div className='color-text--box'>
                <span>HEX</span>
                <input onChange={(e)=> handleColorInputChange(e, type)} type='text' name={inputName} value={inputValue}></input>
            </div>
            <div className='color-picker--box'>
                <input onChange={(e)=> handleColorInputChange(e, type)} type='color' name={inputName} value={inputValue}></input>
            </div>
        </div>
        </>
    )
};

export default ColorInput;
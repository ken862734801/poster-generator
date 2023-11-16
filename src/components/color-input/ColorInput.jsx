import './color-input.css';

function ColorInput (props){

    const { inputName, inputLabel, inputValue, settings, setSettings } = props;

    function handleColorInputChange(e){
        const { name, value } = e.target;
        console.log('Changing...')
    };

    return (
        <div className='color-input'>
            <label>{inputLabel}</label>
            <div>
                <div>
                    <span>HEX</span>
                    <input onChange={handleColorInputChange} type='text' name={inputName} value={inputValue}></input>
                </div>
                <div>
                    <input onChange={handleColorInputChange} type='color' name={inputName} value={inputValue}></input>
                </div>
            </div>
        </div>
    )
};

export default ColorInput;
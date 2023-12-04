import './text-input.css';

function TextInput (props){
    const { inputName, inputValue, poster, setPoster, handleOnChange } = props;

    // function handleTextInputChange(e){
    //     const { value } = e.target;
    //     const newPoster = {...poster};
    //     newPoster.data[inputName] = value;
    //     setPoster(newPoster)
    // };
    

    return (
        <>
        <label className="text-input--label" htmlFor={inputName}>
            <p>{inputName}</p>
        </label>
        <div className='text-input'>
            <div className='text-input--box'>
                <input onChange={handleOnChange} type='text' name={inputName} value={inputValue}></input>
            </div>
        </div>
        </>
    )
};

export default TextInput;
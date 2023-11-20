
function TextInput (props){
    const { inputName, inputValue, poster, setPoster } = props;

    function handleTextInputChange(e){
        const { value } = e.target;
        const newPoster = {...poster};
        newPoster.data[inputName] = value;
        setPoster(newPoster)
    };

    return (
        <>
        <label htmlFor=''></label>
        <div className='text-input'>
            <input onChange={handleTextInputChange} type='text' name={inputName} value={inputValue}></input>
        </div>
        </>
    )
};

export default TextInput;
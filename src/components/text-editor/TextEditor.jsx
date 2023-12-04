import './text-editor.css';
import TextInput from '../text-input/TextInput';

const fields = ['year', 'album', 'artist', 'date', 'duration', 'label'];

function TextEditor(props){
    const { poster, setPoster } = props;

    // function renderTextInputFields(arr){
    //     return arr.map((field) => (
    //         <TextInput
    //             key={field}
    //             inputName={field}
    //             inputValue={poster.data[field]}
    //             poster={poster}
    //             setPoster={setPoster}
    //         />
    //     ))
    // }
    // function renderGenreTextInputFields(){
    //     return (poster.data['genre']).map((data, index) => (
    //         <TextInput key={index} inputName={`Genre #${index + 1}`} inputValue={data}/>       
    //     ))
    // }

    function handleTextInputChange(e, key){
        const { value } = e.target;

        if(Array.isArray(poster['data'][key])){

            console.log('This is an array!');
        } else {
            console.log('This is not an array!');
        };
    };


    return (
        <div>
            {fields.map((field) => (
                <TextInput
                    key={field}
                    inputName={field}
                    inputValue={poster['data'][field]}
                    handleOnChange={(e) => handleTextInputChange(e, field)}
                />
            ))}
            {(poster.data['genre']).map((data, index) => (
                <TextInput
                    key={`Genre + ${index + 1}`}
                    inputName={`Genre # ${index + 1}`}
                    inputValue={data}
                    handleOnChange={(e) => handleTextInputChange(e, 'genre')}
                />
            ))}
        </div>
    )
};

export default TextEditor;
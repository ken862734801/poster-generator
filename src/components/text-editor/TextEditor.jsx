import './text-editor.css';
import TextInput from '../text-input/TextInput';

const fields = ['year', 'album', 'artist', 'date', 'duration', 'label'];

function TextEditor(props){
    const { poster, setPoster } = props;

    function renderTextInputFields(arr){
        return arr.map((field) => (
            <TextInput
                inputName={field}
                inputValue={poster.data[field]}
                poster={poster}
                setPoster={setPoster}
            />
        ))
    }
    return (
        <div>
            {renderTextInputFields(fields)}
        </div>
    )
};

export default TextEditor;
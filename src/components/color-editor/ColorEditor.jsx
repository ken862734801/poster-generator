import './color-editor.css';
import ColorInput from '../color-input/ColorInput';
import { ArrowClockwise } from '@phosphor-icons/react';
import { RefreshOutlined } from '@material-ui/icons';
import { usePalette } from 'react-palette';

function ColorEditor(props){

    const { colorPalette, setColorPalette, poster, settings, setSettings } = props;

    return (
        <div>
            {Object.keys(settings.options).map((key, index) => (
                <ColorInput 
                    key={key} 
                    inputName={key} 
                    inputLabel={key}
                    inputValue={settings.options[key]}
                />
            ))}
            {Object.keys(colorPalette.colors).map((key, index) => (
                <ColorInput
                    key={key}
                    inputName={key}
                    inputLabel={key}
                    inputValue={colorPalette.colors[key]}
                />
            ))}
            <button>
                <span>
                    <RefreshOutlined/>
                </span>
            </button>
        </div>
    )
};

export default ColorEditor;

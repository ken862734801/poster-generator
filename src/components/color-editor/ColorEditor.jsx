import './color-editor.css';
import ColorInput from '../color-input/ColorInput';
import { RefreshOutlined } from '@material-ui/icons';
import { usePalette } from 'react-palette';

function ColorEditor(props){

    const { colorPalette, setColorPalette, settings, setSettings, poster } = props;
    const { data } = usePalette(poster['data'].image);

    function handleColorReset(){
        setSettings((prev) => ({
            ...prev,
            colors: {
                'background color': '#FFFFFF',
                'color': '#000000',
            }
        }));
        if(data){
            setColorPalette({
                colors: {
                    'color one': data.vibrant,
                    'color two': data.lightVibrant,
                    'color three': data.darkVibrant,
                    'color four': data.muted,
                    'color five': data.darkMuted
                  }
            })
        } else {
            console.log('Failed to retrieve color data.')
        };
    };

    return (
        <div>
            {Object.keys(settings.colors).map((key) => (
                <ColorInput 
                    key={key} 
                    inputName={key} 
                    inputValue={settings.colors[key]}
                    type='settings'
                    settings={settings}
                    setSettings={setSettings}
                />
            ))}
            {Object.keys(colorPalette.colors).map((key) => (
                <ColorInput
                    key={key}
                    inputName={key}
                    inputValue={colorPalette.colors[key]}
                    type='palette'
                    colorPalette={colorPalette}
                    setColorPalette={setColorPalette}
                />
            ))}
            <button onClick={handleColorReset}>
                <span>
                    <RefreshOutlined/>
                </span>
            </button>
        </div>
    )
};

export default ColorEditor;

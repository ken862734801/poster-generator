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
                'Background Color': '#FFFFFF',
                'Color': '#000000',
            }
        }));
        if(data){
            setColorPalette({
                colors: {
                    'Color One': data.vibrant,
                    'Color Two': data.lightVibrant,
                    'Color Three': data.darkVibrant,
                    'Color Four': data.muted,
                    'Color Five': data.darkMuted
                  }
            })
        } else {
            console.log('Failed to retrieve color data.')
        };
    };

    return (
        <div>
            {Object.keys(settings.colors).map((key, index) => (
                <ColorInput 
                    key={key} 
                    inputName={key} 
                    inputValue={settings.colors[key]}
                    type='settings'
                    settings={settings}
                    setSettings={setSettings}
                />
            ))}
            {Object.keys(colorPalette.colors).map((key, index) => (
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

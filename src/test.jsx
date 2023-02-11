import { usePalette } from 'react-palette'


function Test(){
    const { data, loading, error } = usePalette("https://th.bing.com/th?id=OP.4hEhMYMuBIEHYA474C474&w=122&h=122&c=17&o=5&pid=21.1");
    console.log(data);
    return(
        <div>
            <div style={{ color: data.vibrant }}><p>Text with the vibrant color</p></div>
            <div style={{ color: data.lightVibrant }}><p>Text with the vibrant color</p></div>
            <div style={{ color: data.darkVibrant }}><p>Text with the vibrant color</p></div>
            <div style={{ color: data.muted }}><p>Text with the vibrant color</p></div>
            <div style={{ color: data.lightMuted }}><p>Text with the vibrant color</p></div>
        </div>
    )
}

export default Test;
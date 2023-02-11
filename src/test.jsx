import { usePalette } from 'react-palette'


function Test(){
    const { data, loading, error } = usePalette("https://th.bing.com/th/id/R.47d1d0093a1abb8b3c6e2193fffb86c3?rik=Gt6szniqPv%2fPdw&riu=http%3a%2f%2fwww.analogueseduction.net%2fuser%2fproducts%2flarge%2fone-of-these-nights-50878e1525251.jpg&ehk=0k%2fYbpyvI2PKnMjhNDMjDhShG6s8VIGdw3R4xYJaBI8%3d&risl=&pid=ImgRaw&r=0");
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
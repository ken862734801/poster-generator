import "./colorinput.css";

export default function ColorInput (props){
    return (
        <div className="color-input">
            <label htmlFor={props.class}></label>
            <input type="text" name={props.name} value={props.color} onChange={props.function}></input>
            <input type="color" name={props.name} value={props.color} onChange={props.function}></input>
        </div>
    )
}
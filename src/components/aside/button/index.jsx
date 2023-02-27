import "./button.css";

export default function Button (props){
    
    return (
        <div className="aside-button" onClick={props.function}>
            {props.icon}
            <p>{props.text}</p>
        </div>
    )
}
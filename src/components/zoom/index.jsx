import "./zoom.css";
import { ZoomIn, ZoomOut } from "@material-ui/icons";
import zoomOutImage from "../../images/zoom-out.png";
import zoomInImage from "../../images/zoom-in.png";

export default function ZoomButton (props){

    const {zoom, setZoom} = props;

    function handleDecrement (){
        if(zoom > .25){
            setZoom(zoom - .25)
        }
    };

    function handleIncrement (){
        if(zoom < 1.50){
            setZoom(zoom + .25)
        }
    };

    function handleInputChange (e){
        const newZoom = parseInt(e.target.value, 1);
        if(newZoom >= .25 && newZoom <= 1.50){
            setZoom(newZoom)
        }
    };

    return(
        <div className="zoom-button-container">
            {/* <ZoomOut className="zoom-icon" onClick={handleDecrement}/> */}
            <img width="18px" alt="zoom out" src={zoomOutImage} onClick={handleDecrement}/>
                <input type="text" readOnly value={`${zoom*100}%`} onChange={handleInputChange}></input>
            <img width="18px" alt="zoom in" src={zoomInImage} onClick={handleIncrement}/>
            {/* <ZoomIn className="zoom-icon" onClick={handleIncrement}/> */}
        </div>
    )
}
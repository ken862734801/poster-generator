import PropTypes from 'prop-types';

const TemplateOne = (props) => {
    return (
        <div className="poster-wrapper" id="poster-wrapper">
            <div className="poster-container">
                <div className="poster-header">
                    <hr></hr>
                    <h2 className="poster-release-year">{props.year}</h2>
                    <h1 className="poster-album-name">{props.album}</h1>
                </div>
                <div className="poster-image-container">
                    <img className="poster-image" src={props.image} crossOrigin=""></img>
                </div>
                <div className="poster-body">
                    <div className="poster-palette-container">
                        <div className="poster-palette-color" style={{backgroundColor: `${props.vibrant}`}}></div>
                        <div className="poster-palette-color" style={{backgroundColor: `${props.lightVibrant}`}}></div>
                        <div className="poster-palette-color" style={{backgroundColor: `${props.darkVibrant}`}}></div>
                        <div className="poster-palette-color" style={{backgroundColor: `${props.muted}`}}></div>
                        <div className="poster-palette-color" style={{backgroundColor: `${props.lightMuted}`}}></div>
                    </div>
                    <div className="poster-body-container">
                        <div className="poster-tracklist-container">
                            <ul className="poster-tracklist">
                                <li>1. TRACK NAME</li>
                                <li>2. TRACK NAME</li>
                                <li>3. TRACK NAME</li>
                                <li>4. TRACK NAME</li>
                                <li>5. TRACK NAME</li>
                                <li>6. TRACK NAME</li>
                                <li>7. TRACK NAME</li>
                                <li>8. TRACK NAME</li>
                                <li>9. TRACK NAME</li>
                            </ul>
                        </div>
                        <div className="poster-information-container">
                            <div></div>
                            <div>
                                <div>
                                    <h3>{props.artist}</h3>
                                </div>
                                <div>
                                    <h4>Out Now</h4>
                                </div>
                                <div>
                                    <h4>Released By</h4>
                                </div>
                                <div>
                                    <h4>Genre</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

// TemplateOne.PropTypes = {
//     year: PropTypes.number,
//     album: PropTypes.string,
//     image: PropTypes.string
// }

export default TemplateOne;
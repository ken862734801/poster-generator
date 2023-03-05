import "./poster.css";

export default function Poster (props){
    
    const  {
            posterMargin,
            bgColor,
            textColor,
            zoom,
            album,
            artist,
            image,
            date,
            duration,
            label,
            year, 
            tracklist,
            genreTagOne,
            genreTagTwo,
            genreTagThree,
            colorOne,
            colorTwo,
            colorThree,
            colorFour,
            colorFive} = props;
    return (
        <div className="poster" id="poster" style={{marginRight: `-${posterMargin}px`, zoom: zoom}}>
            <div className="poster-container" style={{backgroundColor: bgColor, color: textColor}} id="poster-container">
                <div className="poster-header">
                    <hr style={{backgroundColor: textColor, border: `1px solid ${textColor}`}}></hr>
                    <h2 className="poster-release-year">{year}</h2>
                    <h1 className="poster-album-name">{album}</h1>
                </div>
                <div className="poster-image-container">
                    <img className="poster-image" id="poster-image" src={image}></img>
                </div>
                <div className="poster-body">
                    <div className="poster-palette-container">
                        <div className="poster-palette-color" style={{backgroundColor: colorOne}}></div>
                        <div className="poster-palette-color" style={{backgroundColor: colorTwo}}></div>
                        <div className="poster-palette-color" style={{backgroundColor: colorThree}}></div>
                        <div className="poster-palette-color" style={{backgroundColor: colorFour}}></div>
                        <div className="poster-palette-color" style={{backgroundColor: colorFive}}></div>
                    </div>
                    <div className="poster-body-container">
                        <div className="poster-tracklist-container">
                        {Array.from(tracklist).map((subArray, index) => {
                            if (Array.isArray(subArray)) {
                                return (
                                  <ul key={index}>
                                    {subArray.map((item, innerIndex) => (
                                      <li key={innerIndex}>{item}</li>
                                    ))}
                                  </ul>
                                );
                              } else {
                                return null;
                              }
                         })}
                        </div>
                        <div className="poster-text-container">
                            <div className="poster-information-container">
                                <div className="poster-artist-container">
                                    <h3 className="poster-artist">{artist}</h3>
                                </div>
                                <div>
                                    <h4>Out Now</h4>
                                    <p>{date}</p>
                                    <p>{duration}</p>
                                </div>
                                <div>
                                    <h4>Released By</h4>
                                    <p>{label}</p>
                                </div>
                                <div>
                                    <h4>Genre</h4>
                                    <p>
                                    <span>{genreTagOne}</span> · <span>{genreTagTwo}</span> · <span>{genreTagThree}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
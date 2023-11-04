import './poster.css';

function Poster (props) {
    const { poster, colorPalette} = props;
    return (
        <div className='poster'>
            <div className='poster--container'>
                <div className='poster--header'>
                    <h2>{poster.year}</h2>
                    <h1>{poster.album}</h1>
                </div>
                <div className='poster-image--container'>
                    <img className='poster--image' src={poster.image}></img>
                </div>
                <div className='poster--body'>
                    <div className='poster-palette--container'>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colorOne}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colorTwo}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colorThree}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colorFour}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colorFive}}></div>
                    </div>
                    <div className='poster--footer'>
                        <div className='poster-tracklist'>
                        {(poster.tracklist).map((subArray, index) => {
                            if (Array.isArray(subArray)) {
                                return (
                                  <ul key={index}>
                                    {subArray.map((item, innerIndex) => (
                                      <li key={innerIndex}>{item}</li>
                                    ))}
                                  </ul>
                                );
                              };
                         })}
                        </div>
                        <div className='poster-about'>
                            <div className='poster-about--container'>
                                <div>
                                    <h3 className='poster-artist'>{poster.artist}</h3>
                                </div>
                                <div>
                                    <h4>Out Now</h4>
                                    <p>{poster.date}</p>
                                </div>
                                <div>
                                    <h4>Released By</h4>
                                    <p>{poster.label}</p>
                                </div>
                                <div>
                                    <h4>Genre</h4>
                                    <p>
                                        <span>{poster.genreTagOne}</span> · <span>{poster.genreTagTwo}</span> · <span>{poster.genreTagThree}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Poster;
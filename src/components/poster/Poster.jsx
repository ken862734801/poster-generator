import './poster.css';

function Poster (props) {
    const { poster, colorPalette} = props;
    return (
        <div className='poster'>
            <div className='poster--container'>
                <div className='poster--header'>
                    <h2>{poster['data'].year}</h2>
                    <h1>{poster['data'].album}</h1>
                </div>
                <div className='poster-image--container'>
                    <img className='poster--image' src={poster['data'].image}></img>
                </div>
                <div className='poster--body'>
                    <div className='poster-palette--container'>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette['colors'].colorOne}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette['colors'].colorTwo}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette['colors'].colorThree}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette['colors'].colorFour}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette['colors'].colorFive}}></div>
                    </div>
                    <div className='poster--footer'>
                        <div className='poster-tracklist'>
                        {(poster['data'].tracklist).map((subArray, index) => {
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
                                    <h3 className='poster-artist'>{poster['data'].artist}</h3>
                                </div>
                                <div>
                                    <h4>Out Now</h4>
                                    <p>{poster['data'].date}</p>
                                </div>
                                <div>
                                    <h4>Released By</h4>
                                    <p>{poster['data'].label}</p>
                                </div>
                                <div>
                                    <h4>Genre</h4>
                                    <p>
                                        <span>{poster['data'].genre[0]}</span> · <span>{poster['data'].genre[1]}</span> · <span>{poster['data'].genre[2]}</span>
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
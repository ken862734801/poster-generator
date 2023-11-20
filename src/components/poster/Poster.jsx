import './poster.css';

function Poster (props) {
    const { colorPalette, poster, settings} = props;
    return (
        <div className='poster'>
            <div className='poster--container'style={{ backgroundColor: settings.colors['Background Color'], color: settings.colors['Color'] }}>
                <div className='poster--header'>
                    <h2>{poster['data'].year}</h2>
                    <h1>{poster['data'].album}</h1>
                </div>
                <div className='poster-image--container'>
                    <img className='poster--image' src={poster['data'].image}></img>
                </div>
                <div className='poster--body'>
                    <div className='poster-palette--container'>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['Color One']}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['Color Two']}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['Color Three']}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['Color Four']}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['Color Five']}}></div>
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
                                    <p>{poster['data'].duration}</p>
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
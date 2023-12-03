import './poster.css';
import Spinner from '../spinner/Spinner';

function Poster (props) {
    const { colorPalette, isLoading, poster, settings} = props;

    const posterSettings = {
        backgroundColor: settings.colors['background color'],
        color: settings.colors['text color']
    };

    const hrSettings = {
        border: `1px solid ${settings.colors['text color']}`,
        width: '100%'
    }

    const styleObject = {
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid #555'
      }

    return (
        <div className='poster'>
            <div className='poster--container' id='poster--container' style={ posterSettings }>
                <div className={`poster--header ${ isLoading ? 'hidden' : ''}`}>
                    <div className='hr' style={ hrSettings }></div>
                    <h2 className='poster-release-year'>{poster['data'].year}</h2>
                    <h1 className='poster-release-name'>{poster['data'].album}</h1>
                </div>
                <div className='poster-image--container'>
                    { isLoading ? 
                    (
                        <Spinner settings={ styleObject }/>                    
                    ):
                    (
                        <img className='poster--image' src={poster['data'].image}></img>
                    )}
                </div>
                <div className={`poster--body ${ isLoading ? 'hidden' : ''}`}>
                    <div className='poster-palette--container'>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['color one']}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['color two']}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['color three']}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['color four']}}></div>
                        <div className='poster-palette-color' style={{backgroundColor: colorPalette.colors['color five']}}></div>
                    </div>
                    <div className='poster--footer'>
                        <div className='poster--tracklist'>
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
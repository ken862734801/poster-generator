import React, { useState } from 'react';

const TemplateOne = (props) => {

    return (
        <div style={{ transform: `scale(${props.zoom / 100})` }} className='poster-wrapper' id='poster-wrapper'>
            <div  className='poster-container' id='poster-container'>
                <div className='poster-header'>
                    <hr></hr>
                    <h2 className='poster-release-year' contentEditable>{props.year}</h2>
                    <h1 className='poster-album-name' contentEditable>{props.album}</h1>
                </div>
                <div className='poster-image-container'>
                    <img className='poster-image' src={props.image} crossOrigin=''></img>
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
                        {/* {props.tracklist.map((data, index) => (
                            <ul key={index} className="list">
                                {data.map((value, innerIndex) => (
                                    <li className="track" key={innerIndex}>{value}</li>
                                ))}
                            </ul>
                        ))} */}
                         {Array.from(props.tracklist).map((subArray, index) => {
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
                            <div></div>
                            <div className='poster-information-container'>
                                <div className="poster-artist-container">
                                    <h3 className="poster-artist">{props.artist}</h3>
                                </div>
                                <div>
                                    <h4>Out Now</h4>
                                    <p>{props.date}</p>
                                    <p>{props.duration}</p>
                                </div>
                                <div>
                                    <h4>Released By</h4>
                                    <p>Label</p>
                                </div>
                                <div>
                                    <h4>Genre</h4>
                                    <p>
                                        <span>{props.genreTag1}</span> · <span>{props.genreTag2}</span> ·  <span>{props.genreTag3}</span>
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

export default TemplateOne;
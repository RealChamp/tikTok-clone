import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

function VideoFooter() {
    return (
        <div className='video__footer'>
            <div className="video__footer-text">
                <h3>@RealChamp</h3>
                <p>Some Description here</p>
                <div className="video__footer-ticker">
                    <MusicNoteIcon className='video__footer-icon'/>
                    <Ticker mode='smooth'>
                        {({index}) => (
                            <>
                            <p>I am a song</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div> 
            <img src="https://static.thenounproject.com/png/934821-200.png" className='video__footer-record' alt=""/>
        </div>
    )
}

export default VideoFooter

import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from '../VideoFooter/VideoFooter'
import VideoSidebar from '../VideoSidebar/VideoSidebar'

function Video({url, channel, description, song, likes, messages, shares}) {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const handeVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
      <div className="video">
        <video
        onClick={handeVideoPress}
          className="video__player"
          ref={videoRef}
          loop
          src={url}></video>

        {/* VideoFooter */}
        <VideoFooter channel={channel} description={description} song={song}/>
        {/* VideoSideBar */}
        <VideoSidebar likes={likes} shares={shares} messages={messages}/>
      </div>
    );
}

export default Video

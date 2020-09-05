import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from '../VideoFooter/VideoFooter'
import VideoSidebar from '../VideoSidebar/VideoSidebar'

function Video() {
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
          src="https://v16m.tiktokcdn.com/9b2398ce919cd89abfd16c5a0ae5fe67/5f542c84/video/tos/alisg/tos-alisg-pve-0037/75980d1b4dc64bcfb307aa86db738798/?a=1233&amp;br=1376&amp;bt=688&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=20200905182500010189195071572FA9DC&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=M3k5dzQ6Zmo8dzMzZDczM0ApNDZnODc2Mzw3Nzg2Zzc4aGdrcnEzbzUyZjJfLS0tMTRzc14xMC5eMF4xMzYvMDEvMDU6Yw%3D%3D&amp;vl=&amp;vr="></video>

        {/* VideoFooter */}
        <VideoFooter/>
        {/* VideoSideBar */}
        <VideoSidebar/>
      </div>
    );
}

export default Video

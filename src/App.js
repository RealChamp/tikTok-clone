import React from 'react';
import './App.css';
import Video from './components/Video/Video';

function App() {
  return (
    <div className="App">
      {/* App container */}
      <div className="app__videos">
        {/* Video */}
        <Video url="https://v16m.tiktokcdn.com/9b2398ce919cd89abfd16c5a0ae5fe67/5f542c84/video/tos/alisg/tos-alisg-pve-0037/75980d1b4dc64bcfb307aa86db738798/?a=1233&amp;br=1376&amp;bt=688&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=20200905182500010189195071572FA9DC&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=M3k5dzQ6Zmo8dzMzZDczM0ApNDZnODc2Mzw3Nzg2Zzc4aGdrcnEzbzUyZjJfLS0tMTRzc14xMC5eMF4xMzYvMDEvMDU6Yw%3D%3D&amp;vl=&amp;vr="
          channel='RealChamp'
          description='Its works'
          song='React best one'
          likes={123}
          messages={456}
          shares={789}
        />
      </div>
    </div>
  );
}

export default App;

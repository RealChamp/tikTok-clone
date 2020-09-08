import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video/Video';
import axios from './axios/axios';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v1/posts')
      setVideos(response.data)

      return response
    }

    fetchPosts()
  }, [])

  console.log(videos)

  return (
    <div className="App">
      {/* App container */}
      <div className="app__videos">
        {/* Video */}
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video 
          url={url}
          channel={channel}
          song={song}
          likes={+likes}
          messages={messages}
          description={description}
          shares={shares}
           />
        ))}
      </div>
    </div>
  );
}

export default App;

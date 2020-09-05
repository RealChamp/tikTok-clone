import React from 'react';
import './App.css';
import Video from './components/Video/Video';

function App() {
  return (
    <div className="App">
      {/* App container */}
      <div className="app__videos">
        {/* Video */}
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;

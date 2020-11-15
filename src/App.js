import React from 'react';
import './scss/App.scss';
import TrackAndTrace from './components/track-and-trace';
import Header from './components/header'



function App() {
  return (
    <div className="App">
      <Header/>
      <TrackAndTrace/>
    </div>
  );
}

export default App;

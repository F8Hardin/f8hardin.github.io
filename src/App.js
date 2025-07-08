import './App.css';
import RainbowDiv from './rainbowDiv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "10%"}}><RainbowDiv></RainbowDiv></div>
        <div className="Title-bar">
          <div className='Title-area'>Fate Hardin's WIP Portfolio: Last Updated July 8, 2025</div>
          <div className="Navigation-area">Navigation Menu Coming Soon</div>
        </div>
        <div style={{ height: "10%"}}><RainbowDiv></RainbowDiv></div>
      </header>
      <div className="App-main-window">
        Project Details coming soon. This site is a work in progress.
      </div>
    </div>
  );
}

export default App;

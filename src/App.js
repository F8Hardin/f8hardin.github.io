import './App.css';
import RainbowDiv from './rainbowDiv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "10%"}}><RainbowDiv></RainbowDiv></div>
        <div className="Title-bar">
          <div className='Title-area'>Fate's Portfolio</div>
          <div className="Navigation-area">
            <button className="Navigation-button">About Me</button>
            <button className="Navigation-button">Projects</button>
            <button className="Navigation-button">Contact</button>
          </div>
        </div>
        <div style={{ height: "10%"}}><RainbowDiv></RainbowDiv></div>
      </header>
      <div className='App-background-window'>
        <div className="App-main-window">
          Project Details coming soon. This site is a work in progress.
        </div>
      </div>
    </div>
  );
}

export default App;

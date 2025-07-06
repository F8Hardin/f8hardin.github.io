import './App.css';
import RainbowDiv from './rainbowDiv';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "10%"}}><RainbowDiv></RainbowDiv></div>
        <div className="Title-bar">
          <div className='Title-area'>Title Area</div>
          <div className="Navigation-area">Navigation Area</div>
        </div>
        <div style={{ height: "10%"}}><RainbowDiv></RainbowDiv></div>
      </header>
      <div className="App-main-window">
        WIP Main Body
      </div>
    </div>
  );
}

export default App;

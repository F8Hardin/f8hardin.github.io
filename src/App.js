import Stars from './Planets/index';
import './App.css';
import RainbowDiv from './rainbowDiv';

function App() {

  function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "10%"}}><RainbowDiv></RainbowDiv></div>
        <div className="Title-bar">
          <div className='Title-area'>Fate's Portfolio</div>
          <div className="Navigation-button-area">
            <div className="Vertical-line"></div>
            <button onClick={() => scrollToSection('AboutMe')} className="Navigation-button">About Me</button>
            <div className="Vertical-line"></div>
            <button onClick={() => scrollToSection('Projects')} className="Navigation-button">Projects</button>
            <div className="Vertical-line"></div>
            <button onClick={() => scrollToSection('Contact')} className="Navigation-button">Contact</button>
            <div className="Vertical-line"></div>
          </div>
        </div>
        <div style={{ height: "10%"}}><RainbowDiv></RainbowDiv></div>
      </header>
      <div className='App-background-window'>
        <div className="Introduction-section">
          Welcome to Fate Hardin's portfolio.
          <div className="Planet-model">
            <Stars/>
          </div>
        </div>
        <div className="Navigation-section">
          <div id="AboutMe" className="Navigable-window" >
            About Me.
          </div>
          <div id="Projects" className="Navigable-window" >
            Projects
          </div>
          <div id="Contact" className="Navigable-window" >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

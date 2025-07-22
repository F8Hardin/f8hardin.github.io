import Stars from './Planets/index';
import './App.css';
import RainbowDiv from './rainbowDiv';
import ExpandingButton from './ExpandingButton/expandingButton';
import content from "./content.json"

function App() {
  const contactInfo = content.contactInfo;
  const projects = content.projects;

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
            <ExpandingButton header={"Personal Software Projects"}>
              {
                projects.personalProjects.map((project) => {
                  return(
                    <div className="Horizontal-div">
                      <div style={{width : "1%"}}></div>
                      <div style={{width : "99%"}}><ExpandingButton header={project.name}>Details coming soon.</ExpandingButton></div>
                    </div>
                  )
                })
              }
            </ExpandingButton>
            <ExpandingButton header={"Professional Software Projects"}>
              List coming soon.
            </ExpandingButton>
          </div>
          <div id="Contact" className="Navigable-window" >
            {contactInfo.email}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

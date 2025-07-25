import Stars from './Planets/index';
import './App.css';
import RainbowDiv from './rainbowDiv';
import ExpandingButton from './ExpandingButton/expandingButton';
import content from "./content.json"

function App() {
  const contactInfo = content.contactInfo;
  const projects = content.projects;
  const aboutMe = content.aboutMe;
  const intro = content.intro;

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
          <div className='Intro-text'>{intro}</div>
          <div className="Planet-model"><Stars/></div>
        </div>
        <div className="Navigation-section">
          <div id="AboutMe" className="Navigable-window" >
            {aboutMe.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </div>
          <div id="Projects" className="Navigable-window" >
            <ExpandingButton header={"Personal Projects"} startExpanded = {true}>
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
            <ExpandingButton header={"Professional Projects"}  startExpanded = {true}>
              {
                projects.professionalProjects.map((project) => {
                  return(
                    <div className="Horizontal-div">
                      <div style={{width : "1%"}}></div>
                      <div style={{width : "99%"}}><ExpandingButton header={project.name}>Details coming soon.</ExpandingButton></div>
                    </div>
                  )
                })
              }
            </ExpandingButton>
          </div>
          <div id="Contact" className="Navigable-window" >
            <div>Email: {contactInfo.email}</div>
            <div>Github: <a href="https://github.com/F8Hardin">F8Hardin</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

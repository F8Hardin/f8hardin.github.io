import './App.css';
import RainbowDiv from './rainbowDiv';
import ProjectExpandingButton from './ExpandingButton/ProjectExpandingButton';
import content from "./content.json"
import StarSystem from './Planets/index';
import ModalLink from './ModalLink/modallink.js';

function App() {
  const projects = content.projects;
  const aboutMe = content.aboutMe;
  const intro = content.intro;

  function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "10%"}}><RainbowDiv></RainbowDiv></div>
        <div className="Title-bar">
          <div className='Title-area'>
            <div className='Icon'/>
            F8
          </div>
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
          <div className="Planet-model"><StarSystem/></div>
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
            <ProjectExpandingButton header={"Professional Projects"} projectList={projects.professionalProjects} startExpanded={true}/>
            <ProjectExpandingButton header={"Personal Projects"} projectList={projects.personalProjects} startExpanded={true}/>
          </div>
          <div id="Contact" className="Navigable-window" >
            <ModalLink
              linkText="Email"
              modalContent={<div>Email functionality coming soon.</div>}
            />
            <a href="https://github.com/F8Hardin" className='Link'>Github</a>
            <a href="https://www.linkedin.com/in/fate-hardin-53038b192/" className='Link'>LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

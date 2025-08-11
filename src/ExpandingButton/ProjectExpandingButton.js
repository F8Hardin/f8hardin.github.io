import ExpandingButton from "./expandingButton"

export default function ProjectExpandingButton({header, startExpanded = false, projectList}) {
    return (
        <>
            <ExpandingButton header={header} startExpanded={startExpanded}>
                {
                projectList.map((project) => {
                    return(
                    <div key={project.name} className="Horizontal-div">
                        <div style={{width : "2%"}}></div>
                        <div style={{width : "98%"}}>
                        <ExpandingButton header={project.name}>
                            <div className="ProjectSection">
                            <div className="ProjectAreaTitle">Description</div>
                            <div className="ProjectDescText">{project.description}</div>              
                            </div>
                            {
                                project.images && Object.keys(project.images).length > 0 && (
                                    <>
                                        <hr className="ProjectSeparationLine"/>
                                        <div className='ProjectImageSection'>
                                            {
                                                Object.keys(project.images).map((key, index) => (
                                                        <div key={key}>
                                                            <img className="ProjectImage" src={project.images[key]}/>
                                                            <div>{key}</div>
                                                        </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                )
                            }
                            <hr className="ProjectSeparationLine"/>
                            <div className="ProjectStack">
                                <div className="ProjectAreaTitle">Tech Stack: </div>
                                {
                                    <>
                                        {
                                            project.stack.map((tech) => (
                                                <div key={tech}>{tech}</div>
                                            ))
                                        }
                                    </>
                                }
                            </div>
                            {
                                project.videos && Object.keys(project.videos).length > 0 && (
                                    <>
                                        <hr className="ProjectSeparationLine"/>
                                        <div className='ProjectVideoSection'>
                                            {
                                                Object.keys(project.videos).map((key, index) => (
                                                        <div key={key}>
                                                            <video loop autoPlay muted className="ProjectVideo">
                                                                <source src={project.videos[key]} type="video/mp4" />
                                                            </video>
                                                            <div>{key}</div>
                                                        </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                )
                            }
                            {
                                project.relatedURLs && Object.keys(project.relatedURLs).length > 0 && (
                                    <>
                                    <hr className="ProjectSeparationLine"/>
                                    <div className='ProjectLinksSection'>
                                        <div className="ProjectAreaTitle">Related URLs: </div>
                                        {Object.keys(project.relatedURLs).map((key, index) => (
                                            <a className="Link" target="_blank" rel="noopener noreferrer" href={project.relatedURLs[key]} key={key}>
                                            {key}
                                            </a>
                                        ))
                                        }
                                    </div>
                                    </>
                                )
                            }
                        </ExpandingButton>
                        </div>
                    </div>
                    )
                })
                }
            </ExpandingButton>
        </>
    );
}
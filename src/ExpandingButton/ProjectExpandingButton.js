import './expandingButton.css'
import ExpandingButton from "./expandingButton"

export default function ProjectExpandingButton({header, children, startExpanded = false, projectList}) {
    return (
        <>
            <ExpandingButton header={header}>
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
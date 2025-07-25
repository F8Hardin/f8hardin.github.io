import { useState } from 'react';
import './expandingButton.css'

export default function ExpandingButton({header, children, startExpanded = false}) {
    const [expanded, setExpanded] = useState(startExpanded);

    function ExpandOnClick() {
        setExpanded(!expanded)
    }

    return (
        <>
        <div className="parentDiv">
            <div className="expandingButton-div">
                <img onClick={ExpandOnClick} src='/images/expand_icon_white.png' alt="+" className="expand-icon"></img>
                {header}
            </div>

            { expanded && (
                <div className='expanding-div'>
                    {children}
                </div>
            )}
        </div>
        </>
    );
}
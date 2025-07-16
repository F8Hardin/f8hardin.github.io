import { useState } from 'react';
import './expandingButton.css'

export default function ExpandingButton({header, children}) {
    const [expanded, setExpanded] = useState(false);

    function ExpandOnClick() {
        setExpanded(!expanded)
    }

    return (
        <>
        <div className="expandingButton-div">
            <img onClick={ExpandOnClick} src='/images/expand_icon.png' alt="+" className="expand-icon"></img>
            {header}
        </div>

        { expanded && (
            <div className='expanding-div'>
                {children}
            </div>
        )}
        </>
    );
}
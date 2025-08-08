import { useState } from 'react';
import "./modallink.css"

export default function ModalLink({ linkText, modalContent }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#"
        className="Link"
        onClick={e => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {linkText}
      </a>
      {open && (
        <div
          className="modal-backdrop"
          onClick={() => setOpen(false)}
        >
          <div
            className="modal"
            onClick={e => e.stopPropagation()}
          >
            {modalContent}
            <button className="modal-button" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

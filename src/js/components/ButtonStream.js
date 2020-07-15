import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import StreamModal from './StreamModal';

function ButtonStream({ album }) {
  const [viewModal, setViewModal] = useState(false);

  function toggleModal(e) {
    e.stopPropagation();
    setViewModal(!viewModal);
    console.log('This is toggle modal!');
  }

  return (
    <>
      <div 
        className="button button__shop--stream"
        onClick={toggleModal}
      >
        {viewModal && createPortal(
          <StreamModal 
            album={album} 
            toggleModal={toggleModal}
          />, 
          document.getElementById('stream-modal-root')
        )}
        STREAM
      </div>
    </>
  );
}

export default ButtonStream;



import React, { useState } from 'react';

function ButtonStream({ album }) {
  const [dropdownOn, setDropdown] = useState(false);

  function toggleDropdown() {
    setDropdown(!dropdownOn);
    console.log('This is toggle dropdown!');
  }

  return (
    <>
      <div 
        className="button button__shop--stream"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        {dropdownOn && (
          <ul className="dropdown">
            <li><a href="#">Test</a></li>
            <li><a href="#">Test</a></li>
            <li><a href="#">Test</a></li>
            <li><a href="#">Test</a></li>
          </ul>
        )}
        <span className="stream">
          <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M5.26804 0L9.23399 4.53252L13.1999 0H18.468L9.23399 10.5531L0 0H5.26804Z" fill="white"/>
          </svg>
        </span>
        STREAM
      </div>
    </>
  );
}

export default ButtonStream;






// OLD COMPONENT:
// <>
//   <a 
//     href={album.buyURL}
//     target="_blank"
//     className="button button__shop--stream"
//     onClick={toggleDropdown}
//   >
//     <span className="stream">
//       <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M5.26804 0L9.23399 4.53252L13.1999 0H18.468L9.23399 10.5531L0 0H5.26804Z" fill="white"/>
//       </svg>
//     </span>
//     STREAM
//   </a>
// </>
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Video() {
  const [videoAmount, setVideoAmount] = useState(2);

  return (
    <>
    <div className="margin-100 grid-12-col">
      <h2 className="title">Video</h2>
      <div className="video-container">
        <iframe className="video-1" width="560" height="315" src="https://www.youtube.com/embed/lcIjIfbjgK8?start=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <iframe className="video-2" width="560" height="315" src="https://www.youtube.com/embed/7krpt6JchzQ?start=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {videoAmount >= 4 && (
          <>
          <iframe className="video-1" width="560" height="315" src="https://www.youtube.com/embed/gKE0cExR8rU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe className="video-2" width="560" height="315" src="https://www.youtube.com/embed/k7xyF6boJC8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </>
        )}
         {videoAmount === 6 && (
          <>
          <iframe className="video-1" width="560" height="315" src="https://www.youtube.com/embed/5I48UW57eMQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe className="video-2" width="560" height="315" src="https://www.youtube.com/embed/QwtzZzjwWe8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </>
        )}
      </div>
    </div>
    {videoAmount < 6 && (
      <div onClick={() => setVideoAmount(videoAmount +2)} className="button button__flex button__flex--video" id="load-video">load more</div>
    )}
     {videoAmount >= 6 && (
      <div onClick={() => setVideoAmount(2)} className="button button__flex button__flex--video" id="load-video">view less</div>
    )}
    </>
  );
}

ReactDOM.render(
  <Video />, 
  document.getElementById('video')
);
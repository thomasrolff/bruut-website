import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';
import data from './../data/bruut-photos';

function Photos() {
  const [carouselVisibility, setCarouselVisibility] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (carouselVisibility) {
    const overlay = document.getElementById("photo-container");
    document.body.setAttribute("class", "no-scroll");
    overlay.ontouchmove = (e) => { 
      e.preventDefault(); 
      return false; 
    };
  } else {
    document.body.removeAttribute("class", "no-scroll");
  }

  const openCarousel = document.getElementById("photo-container");
  openCarousel.addEventListener('click', () => {
    setCarouselVisibility(true);
  });

  return (
    <>
    {carouselVisibility && (
      <Carousel   
        setCarouselVisibility={setCarouselVisibility} 
        photos={data} 
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}/>
    )}
    </>
  );
}

ReactDOM.render(
  <Photos />,
  document.getElementById('photos-carousel')
); 
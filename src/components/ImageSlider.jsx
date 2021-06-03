import React, { useState } from "react";


const ImageSlider = ({images, setSelectedImage}) => {
  const [ index, setIndex ] = useState(0);

  const handleNext = (e) => {
    e.stopPropagation();
    (index === images.length -1) ? setIndex(0) : setIndex(index + 1);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    (index === 0) ? setIndex(images.length -1) : setIndex(index - 1); 
  }

  return (
    <section class="small" onClick={() => setSelectedImage(images[index])}>
      <button onClick={handlePrevious}>previous</button>
      <img 
        alt="images displayed in slider" 
        src={images[index]}/>      
      <button onClick={handleNext}>next</button>
    </section>
  );
}

export default ImageSlider;

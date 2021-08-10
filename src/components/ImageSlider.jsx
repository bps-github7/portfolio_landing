import React, { useState } from "react";


const ImageSlider = ({images, setSelectedImage}) => {
  const [ index, setIndex ] = useState(0);
  const img = Object.values(images);
  
  const handleNext = (e) => {
    e.stopPropagation();
    (index === img.length -1) ? setIndex(0) : setIndex(index + 1);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    (index === 0) ? setIndex(img.length -1) : setIndex(index - 1); 
  }

  

  return (
    <section class="small" onClick={() => setSelectedImage(img[index])}>
      <img 
        alt="images displayed in slider" 
        src={img[index]}/>      
      <button class="btn" onClick={handleNext}>Next</button>
      <button class="btn" onClick={handlePrevious}>Previous</button>
    </section>
  );
}

export default ImageSlider;

import React, { useState } from 'react';
import Modal from './Modal';
import ImageSlider from './ImageSlider';

const Panel = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

// this can get deleted right away when youre done with the POC
  const imgs = [
    "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
    "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowwatercolor-print.jpg",
    "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
  ];

  /* The P.O.C works well, so its time to make a layout...


  About: 
  (some summary text) <- projects also needs one looking like this.. 

  <imageSlider> with random photos I like

  <panel> the refactored info panel, which works like this current set up combined with what
  you have going on for the skills page, but nicer and less redundant code!
  
  
  */

  return (
    <section className="panel">
      <h1>{props.title}</h1>
      <ImageViewer imgs={imgs} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </section>
  );
}

const ImageViewer = ({imgs, selectedImage, setSelectedImage}) => {
  return (
    <section className="imageViewer">
      <ImagePicker images={imgs} setSelectedImage={setSelectedImage}/>
      <ImageSlider images={imgs} setSelectedImage={setSelectedImage}/>
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </section>
  );
}

const ImagePicker = ({images, setSelectedImage}) => {
  return(
    <section class="default">
      { images.map((item) => (
          <section onClick={() => setSelectedImage(item)}>
            <img src={item} alt="" />
          </section>)
        )
      }
    </section>
  )
}


export default Panel;

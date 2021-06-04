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

  const example = {
    "adulations (draft)" : "https://firebasestorage.googleapis.com/v0/b/portfolio-landing-4c07a.appspot.com/o/DSC02207.JPG?alt=media&token=92099926-0163-4e61-9d15-d7f71211bdb6",
    "abracadabra (V rough draft)" : "https://firebasestorage.googleapis.com/v0/b/portfolio-landing-4c07a.appspot.com/o/DSC02192.JPG?alt=media&token=4ae8045b-bceb-44ad-b024-b771eb35af3f" 
  }

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

      <ImageViewer imgs={example} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
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
      { Object.keys(images).map(
        (item) => 
        (
          <section onClick={() => setSelectedImage(images[item])}>
            <img class="default-view" src={images[item]} alt="" />
            { item ?
              <p>{item}</p> : null 
            }
          </section>
        ))
      }
      </section>
  )
}


export default Panel;

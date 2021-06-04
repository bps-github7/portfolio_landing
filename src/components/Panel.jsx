import React, { useState } from 'react';
import Modal from './Modal';
import ImageSlider from './ImageSlider';

const Panel = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const choices = [
    "fitness",
    "sustainability",
    "music",
    "art",
    "photography"
  ]

  const example = {
    "adulations (draft)" : "https://firebasestorage.googleapis.com/v0/b/portfolio-landing-4c07a.appspot.com/o/DSC02207.JPG?alt=media&token=92099926-0163-4e61-9d15-d7f71211bdb6",
    "abracadabra (V rough draft)" : "https://firebasestorage.googleapis.com/v0/b/portfolio-landing-4c07a.appspot.com/o/DSC02192.JPG?alt=media&token=4ae8045b-bceb-44ad-b024-b771eb35af3f" 
  }


  const [choice, setChoice] = useState(null);

  const handleChange = (event) => {
    setChoice(event.target.value)
  }
  return (
    <section className="panel">
      <h1>{props.title}</h1>
      <h3>What are you interested in seeing more about?</h3>
      <select
        onChange={handleChange}
        name="about" id="about">
        {
          choices.map((choice, i) => 
          (
            <option key={i} value={choice}>{choice}</option>
          ))
        }        
      </select>
      <section>
        { choice }
      </section>

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

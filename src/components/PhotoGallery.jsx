import React, { useState } from 'react';
import Modal from './Modal';
import ImageSlider from './ImageSlider';
import RowDropdown from './RowDropdown';
import data from '../data.json';



const PhotoGallery = ({props}) => {

	const [selectedImage, setSelectedImage] = useState(null);
	const [choice, setChoice] = useState(null);
	const choices = [
		"fitness",
		"sustainability",
		"music",
		"art",
		"photography",
		"cooking"
	]
	const handleChoiceChange = (event) => {
		setChoice(event.target.value);
 
	}
 

	return(
		<section>
		<h3>Choose a topic to learn more about me:</h3>
		<select
			class="select"
			onChange={handleChoiceChange}
			name="about" id="about">
			<option>-</option>
			{
				choices.map((choice, i) => 
				(
					<option key={i} value={choice}>{choice}</option>
				))
			}        
		</select>
		<InfoDisplay title={choice} info={props} setSelectedImage={setSelectedImage}/>

		{/* <ImageViewer imgs={example} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> */}
		{ selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}		
	</section>

	)
}

const InfoDisplay = ({title, info, setSelectedImage}) => {
  if (title === "fitness") {
    return(
      <RowDropdown title={title} contents={info[title]}/>
    )
  }
  else if (title === "sustainability") {
    return(
      <section>
       <RowDropdown title={title} contents={info[title]} />
      </section>
    )
  }
  else if (title === "music") {
    return(
      <section>
        <h3>Music</h3>
        <p>I am passionate about music in many forms. I enjoy listening to many genres and I am a musician myself. In addition to playing various instruments, most of which I taught myself, I also experiment in production, both recording live sessions, mixing and producing my own instrumental music</p> 
      </section>
    )
  }
  else if (title === "art") {
    return(
      <ImageViewer imgs={data.about.creativity.content.art.drawing} setSelectedImage={setSelectedImage} />
    )
  }
  else if (title === "photography") {
    return(
      <ImageViewer imgs={data.about.creativity.content.art.photography} setSelectedImage={setSelectedImage} />
    )
  }
  else if (title === "cooking") {
    return(
      <ImageViewer imgs={data.about.creativity.content.cooking} setSelectedImage={setSelectedImage} />
    )
  }
  return(null)

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
    <section className="default">
      { Object.keys(images).map(
        (item,i) => 
        (
          <section key={i} onClick={() => setSelectedImage(images[item])}>
            <img className="default-view" src={images[item]} alt="" />
            { item ?
              <p>{item}</p> : null 
            }
          </section>
        ))
      }
      </section>
  )
}
export default PhotoGallery
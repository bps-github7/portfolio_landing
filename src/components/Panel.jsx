import React, { useState } from 'react';
import Modal from './Modal';
import ImageSlider from './ImageSlider';
import RowDropdown from './RowDropdown';
import data from '../data.json';

const Panel = (props) => {
	/* This is the top level component for the "about" page */

  const [selectedImage, setSelectedImage] = useState(null);
  
	const modes = [
		"progress",
		"me"
	]

	const choices = [
    "fitness",
    "sustainability",
    "music",
    "art",
    "photography",
    "cooking"
  ]


	const [mode, setMode] = useState(null);
  const [choice, setChoice] = useState(null);

  const handleChoiceChange = (event) => {
    setChoice(event.target.value);

  }

	const handleModeChange = (event) => {
		setMode(event.target.value);
	}



  return (
    <section className="panel">
      <h1>{props.title}</h1>
			{/* below form is for selecting whether we want to view about me or about progress */}
			{/* <h3>current mode is: {mode}</h3>			 */}
			<form>
				{ modes.map((modeOption, i) => (
					<label key={i}>
						{	modeOption }
						<input type="radio" value={modeOption} name="mode" onChange={(change) => handleModeChange(change)}/>
					</label>
				)) }
			</form>


			{/* this is a total mess and regrettably a bandaid soluton- among other redesign decisions, we need to find a better
			strategy for breaking down compoonent responsilbility- this below is too much */}
			{ mode ? (
				<section>
			{ mode === "me" ?
				(
					<section>
						<h3>Choose a topic to learn more about me:</h3>
						<select
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
						<InfoDisplay title={choice} info={props.info} setSelectedImage={setSelectedImage}/>
			
						{/* <ImageViewer imgs={example} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/> */}
						{ selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}		
					</section>
				)				
				:
				(
					<section>
						<h3>Progress blog</h3>
						<p>A place to report on my progress on breaking into the IT and software industry</p>

						<p>In the future, lets map out the posts using an observable of firestore collection</p>
						<span>For now we will just hard code some example material</span>

						<section>
							<h3>8/3/2021: revamping efforts with portfolio landing</h3>

							<p>over the past year, I have been trying to break into the IT/software industry, with unfortunately few promising leads to report
								I'll admit that my goal setting and execution have been less than ideal. The gist was this-
								make a great portfolio, and hiring manager will take me seriously as a web developer or software engineer.

								While I still believe this is a factor, Ive also come to realize that I need to set more concrete goals than this.
								I still have many half finished portfolio projects, some big and some small, and even if I dedicated an inordinate amount
								of time to finishing these, I'd still be working on  them in five years time. However, when I do get a job in the industry
								I will still have these projects to work on. Therefore, it is germain to realize that my priorities must be adjusted in order
								to increase the liklihood I will have a job in the next year which will help me to begin my career in IT
							</p>
							<h5>here is a brief summary of the new priorities I have set out for myself</h5>
							<ul>
								<li>improve this portfolio landing in general, and expand on this 'about- progress' page</li>
								<li>document progress on IVDB and Python class generator</li>
								<li>Post daily 'blogs' on approach, solution and discussion of daily coding interview questions</li>
								<li>document progress towards obtaining industry certs such as Comptia A+, Security and Network + and Redhat Sys admin</li>
							</ul>

							<footer>
 								The above mentioned steps are ambituious, but I plan to be strategic about them and clearly document my progress. 
								I believe that the most important of these is getting industry certification. While working on the portfolio is great, having a great
								portfolio is no gurantee that I will be seen as a competent candidate. I plan study for the next 4 months and then take the comptia a+ 200-901 in november and then the 902 in march.
								These are concrete goals which will set me on the path for attaining higher level certification. The coding interview problems will demonstrate
								my abilities as a general problem solver and a multi faceted web and general developer <pre>concept for these comming soon - see github issue- link it here when finished</pre>
								the progress reports on my main repos (IVDB and class generator) will demonstrate that i am making marked progress on these projects, not only to other developers but also laypeople. (not sure if that sounds too pretenious...) 
							</footer>
						</section>

					</section>			
				)			
			}

				</section>

			) : <span>select an option to learn more about me</span>}


    </section>
  );
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

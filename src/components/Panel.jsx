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

	const BlogPosts = [
		{ 
			title : "revamping efforts with portfolio landing",
			description : "Some changes I'd like to make moving forward",
			datePosted : "8/3/2021",
			body: "over the past year, I have been trying to break into the IT/software industry, with unfortunately few promising leads to report. I'll admit that my goal setting and execution have been less than ideal. The gist was this-		make a great portfolio, and hiring manager will take me seriously as a web developer or software engineer.		While I still believe this is a factor, Ive also come to realize that I need to set more concrete goals than this.		I still have many half finished portfolio projects, some big and some small, and even if I dedicated an inordinate amount		of time to finishing these, I'd still be working on  them in five years time. However, when I do get a job in the industry		I will still have these projects to work on. Therefore, it is germain to realize that my priorities must be adjusted in order		to increase the liklihood I will have a job in the next year which will help me to begin my career in IT",
		 details : ["improve this portfolio landing in general, and expand on this 'about- progress' page","document progress on IVDB and Python class generator",
		 "Post daily 'blogs' on approach, solution and discussion of daily coding interview questions",
		 "document progress towards obtaining industry certs such as Comptia A+, Security and Network + and Redhat Sys admin"],
		 conclusion : "The above mentioned steps are ambituious, but I plan to be strategic about them and clearly document my progress. 		 I believe that the most important of these is getting industry certification. While working on the portfolio is great, having a great		 portfolio is no gurantee that I will be seen as a competent candidate. I plan study for the next 4 months and then take the comptia a+ 200-901 in november and then the 902 in march.		 These are concrete goals which will set me on the path for attaining higher level certification. The coding interview problems will demonstrate		 my abilities as a general problem solver and a multi faceted web and general developer. The progress reports on my main repos (IVDB and class generator) will demonstrate that i am making marked progress on these projects, not only to other developers but also laypeople."
		},		
		{ 
			title : "Todays enhancements and general todos", 
			description : "synopsis of changes to be made to this site", 
			datePosted : "8/4/2021", 
			body: "Over the last month, I shared a link of this portfolio landing with a more experienced developer ive connected with on LinkedIn, and asked for feedback. His suggestions are what initially turned my attention back to working on this site. Im hoping that today, I can address some of the major issues, as well as sketch out some design concepts for this new blog section, and begin laying the infrastructure for connecting it to firebase. Doing so will allow more of the site content to be supplied dynamically, overall increasing the quality of organization with the code base, which is currently less than ideal. The following bullets will outline the todo items I've set out for myself today", 
			details : ["create wireframes or layout for different types of blog posts", "get the site hooked up to B.A.A.S (firebase)", "get links to resume, linked in on nav bar", "begin migrating content from json to firestore d.b"],
			conclusion : "see github issue (link it here) for a complete todo list of improvements and enhancements that need to be made in the future."},
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

						{ BlogPosts.map((blogs, i) => (
							<BlogPost blog={blogs} key={i}/>
						)) }
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

const BlogPost = ({blog}) => {
	return(
	<section className="blog-post">
		<h3 class="heading">{blog.title}</h3>
		<h5 class="sub-heading">{blog.description}</h5>
		<h6 class="date sub-heading">{blog.datePosted}</h6>
		<hr />
		<p>{blog.body}</p>
		<BlogDetails details={blog.details}/>
		<footer>Conclusion: {blog.conclusion}</footer>
	</section>)
}

const BlogDetails = ({details}) => {
	// need to expand on this- multiple types of Blog Details, use conditional rendering
	return(
		<ul className="blog-details">
			{ details.map((item, i) => (
					<li key={i}>{item}</li>
				)
			) 
			}
		</ul>
	)
}

export default Panel;

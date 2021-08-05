import React, { useState } from 'react';
import PhotoGallery from './PhotoGallery';
import ProgressBlog from './ProgressBlog';

const Panel = (props) => {
	/* This is the top level component for the "about" page */

  
	const modes = ["progress","me"];
	const [mode, setMode] = useState(null);

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
			{ mode === "me" ?  <PhotoGallery props={props.info}/>	:	<ProgressBlog />
					// <section>


					// 	<h3>Progress blog</h3>
					// 	<p>A place to report on my progress on breaking into the IT and software industry</p>

					// 	{ BlogPosts.map((blogs, i) => (
					// 		<BlogPost blog={blogs} key={i}/>
					// 	)) }
					// </section>			
					
			}

				</section>

			) : <span>select an option to learn more about me</span>}


    </section>
  );
}



export default Panel;

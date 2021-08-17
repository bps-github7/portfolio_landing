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
    <section className="info-panel">
      <h1>{props.title}</h1>
			{/* below form is for selecting whether we want to view about me or about progress */}
			<form>
				{ modes.map((modeOption, i) => (
					<label htmlFor="about page mode select" key={i}>
						{	modeOption }
						<input type="radio" value={modeOption} name="mode" onChange={(change) => handleModeChange(change)}/>
					</label>
				)) }
			</form>

			{ mode ?
				(
					(mode === "me") ?
					
					// Two TODOS here 1) need a loading spinner, to display while pics are being loaded, the current impl looks sloppy and slow/ pan loaded
					// 2) need a better layout for image gallery. like 2X2 or 4X4, the way its laid out now looks bad, paticularly in tablet or mobile landscape mode
					<PhotoGallery props={props.info}/>:
					<ProgressBlog />
				):
				<span>select an option to learn more about me</span>}
    </section>
  );
}



export default Panel;

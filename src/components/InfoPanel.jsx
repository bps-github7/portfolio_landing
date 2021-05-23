import React, { useState } from 'react';
import Slider from './Slider';


const InfoPanel = (props) => {
	/* This is the top level of the 'info panel'	Component architecture. It takes nested JSON	data
  and displays it as a list of rows which	can be toggled open to examine further. 
  This	specific component lists the title of the broad type of info being examined ie. 'skills' or 'about'
  then sets up the 'row dropdowns' which display a sub category and a button to unfold that nested data.

  */
	return (
		<div class="info-panel">
			{ props.title ? <h1>{props.title}</h1> : null }
			{
					Object.keys(props.info)
					.map((area) =>  
						<RowDropdown title={area} contents={props.info[area]}/>
					)
				}
		</div>
	);
}
export default InfoPanel;

const RowDropdown = (props) => {
	/* 
Top layer of the data hirearchy UI for skills & about pages.
a row with a label and button to examine. presing button unfolds a nested list. 
	*/

	const [ open, setOpen ] = useState(false)
	
	const toggleOpen = () => {
		setOpen(!open);
	}
	
	// this is going to be a bit messy 
	if (props.title === "intro") {
		return (
			<div className="intro-row">
				{ props.contents }
			</div>
		)
	}
	else {
		return (
			<div className="row-dd">
				{
					open ?
					// <span>Open</span> : <span>Closed <button onClick={this.toggleOpen}>open?</button></span>
					<OpenRow title={props.title} contents={props.contents} toggleOpen={toggleOpen}/>:         
					<ClosedRow title={props.title} toggleOpen={toggleOpen}/>
				}
			</div>
			
			);
		}
 }

const ClosedRow = (props) => {
	return(
		<div className="closed-row">
			<h2>
				{ props.title }
			</h2>
			 
			<button onClick={props.toggleOpen}>Examine</button>
		</div>
	)
}

const OpenRow = (props) => {

	if (props.title === "concepts") {
		return (
			<div className="concepts-open-row">
				<h2>Concepts:</h2>
				<p>{ props.contents.intro }</p>
				<Slider/>
				
				<button onClick={props.toggleOpen}>Hide</button> 
			</div>
		)
	}
	return (
		<div className="open-row"> 
			{ Object.keys(props.contents).map((title, i) => (
				<InfoColumn key={i} title={title} contents={props.contents[title]}/>
			)) }
			<button onClick={props.toggleOpen}>Hide</button> 
		</div>
	)
}

const InfoColumn = (props) => {
	return (
		<div className="info-col">
			<h2>{ props.title}</h2>
			<ul>
				{ 
					Object.keys(props.contents).map((item, i) => (
							<ColumnDropdown title={item} contents={props.contents[item]} />
						) 
					) 
				}
			</ul>
		</div>
	);
}

const ColumnDropdown = (props) => {
	return (
		<div className="col-dd">
			<h3 class="dd-trigger">{props.title}</h3>
			<ul class="dd-col">
				{ Object.keys(props.contents).map((title, i) => 
						(
							// this is the end of the data hierarchy 
							<li key={i}>{title}</li>
						)
					) 
				}       
			</ul>

		</div>
		);
}
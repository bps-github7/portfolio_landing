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
  

		return (
			<section className="row-dd">
        <ClosedRow title={props.title} details={props.contents.details} isOpen={open} toggleOpen={toggleOpen}/>
				{
          open ?
					<OpenRow title={props.title} contents={props.contents.content}/>:         
          null
				}
			</section>
			
			);
 }

const ClosedRow = (props) => {
	// add some resilency incase no details are passed in.
  if (!props.details) {
    return(
      <section className="closed-row closed-row-concepts">
        <h2>{props.title}</h2>
        <button class="btn" onClick={props.toggleOpen}>
          {
            props.isOpen ? 
            "hide" :
            "examine"
          }
        </button>
      </section>
    )
  }
  return(
		<section className="closed-row">
			<h2>{ props.title }</h2>
      <h3>{ props.details.subheading }</h3>
       {/* Render a body, if there is one  */}
      { props.details.body ? <p>{props.details.body}</p> : null}
			<button class="btn" onClick={props.toggleOpen}>
        {
          props.isOpen ? 
          "hide" :
          "examine"
        }
      </button>
		</section>
	)
}

const OpenRow = (props) => {

  if (props.title === "concepts" || props.title === "sustainability") {
		return (
			<section className="concepts-open-row">
				{/* <p>{ props.contents.intro }</p> */}
				<Slider content={props.contents}/>
				{/* <p>{ props.contents }</p> */}
			</section>
		)
    
	}
	return (
		<section className="open-row"> 
			{ Object.keys(props.contents).map((title, i) => (
        <InfoColumn key={i} title={title} contents={props.contents[title]}/>
			)) }
		</section>
	)
}

const InfoColumn = (props) => {
	return (
		<section className="info-col">
			<h2>{ props.title}</h2>
			<ul>
				{ 
					Object.keys(props.contents).map((item, i) => (
							<ColumnDropdown title={item} contents={props.contents[item]} />
						) 
					) 
				}
			</ul>
		</section>
	);
}

const ColumnDropdown = (props) => {
	return (
		<section className="col-dd">
			<h3 class="dd-trigger">{props.title}</h3>
			<ul class="dd-col">
				{ Object.keys(props.contents).map((title, i) => 
						(
							// this is the end of the data hierarchy 
              // <li key={i}>{title}</li>
              <ItemView id={i} item={title} value={props.contents[title]}/>
						)
					) 
				}       
			</ul>

		</section>
		);
}

const ItemView = (props) => {
  if (typeof(props.value) === "string") {
    return(
      <li key={props.id}> 
        <strong>{ props.item }: </strong>
        { props.value }
      </li>
    )
  }
  else if (typeof(props.value) === "number") {
    return (
      <li key={props.id}>
        <strong>{ props.item }: </strong>
        {/* Figured a hack for the printing numeric values, make them a string! */}
        <input disabled type="range" max={5} value={props.value}/>     
      </li>
    )
  }
}
import React, { useState } from 'react';
import Slider from './Slider';

const InfoPanel = (props) => {
  return (
    <div>
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
      <div className="app-row-dropdown">
        { props.contents }
      </div>
    )
  }
  else {
    return (
      <div className="app-row-dropdown">
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
      <h4>
        { props.title }
      </h4>
       
      <button onClick={props.toggleOpen}>Examine</button>
    </div>
  )
}

const OpenRow = (props) => {

  if (props.title === "concepts") {
    return (
      <div className="open-row-concepts">
        <h3>Intro:</h3>
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
      <h4>{ props.title}</h4>
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
              <li key={i}>{title}</li>
            )
          ) 
        }       
      </ul>

    </div>
    );
}
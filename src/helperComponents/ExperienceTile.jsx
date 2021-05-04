import React from 'react';

const ExperienceTile = (props) => {
  // let classes = "badge-primary";
  // classes += this.props.experience.currentPosition  
  return (
    // maybe want to conditionally render a class if job is current position
    <div>
      <h3>{ props.company }</h3>
      <h4>{ props.position }</h4>
      <p> 


      { 
        props.experience.length > 1 
        ? <SingleListRender responsibilities={props.experience}/> 
        : <MultiListRender responsibilities={props.experience}/> 
      }
      </p>
    </div>
  );
}

const SingleListRender = (responsibilities) => {
/* for displaying a list where I worked only a single
  position with company */
  return(
    <ul>
      { responsibilities.map((item) => <li>{item}</li>) } 
    </ul>  
  )

}

const MultiListRender = (responsibilities) => {
  /* for displaying responsibilities when I worked 
    multiple positions with one company */
  for (let item of Object.keys(responsibilities)) {
   console.log(item)
   //need to display the title of position, then the responsiblities.  
  }
  return(<div>JSX created from appending each list rendered from the responsibilities object</div>)
}

export default ExperienceTile;

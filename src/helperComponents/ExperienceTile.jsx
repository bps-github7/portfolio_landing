import React from 'react';

const ExperienceTile = (props) => {
  // let classes = "badge-primary";
  // classes += this.props.experience.currentPosition  
  const position = props.position;
  // console.log(position)
  return (
    // maybe want to conditionally render a class if job is current position
    <div>
      
      <h3>{ position.company }</h3>
      {/* <h4>{ position.position }</h4> */}
      <p>
       <div>
        <strong>Employed:</strong> {position.employed}
       </div>
       <div>
        <strong>Supervisor:</strong> {position.supervisor}
       </div>
        <div>
          <strong>Location:</strong> {position.location}
        </div>

      { 
        Object.keys(position.duties).length === 1 
        // ? <div>Wil render a single thing!</div>
        // : <div>Will render a multi thing!</div>

        ? <SingleListRender duties={position.duties}/> 
        : <MultiListRender duties={position.duties}/> 
      }
      </p>
    </div>
  );
}

const SingleListRender = (props) => {
/* for displaying a list where I worked only a single
  position with company */
  const position = Object.keys(props.duties)[0]
  return(
    <div>
      <h3>
        { position }
      </h3>
    <ul>
      {(props.duties[position]).map((item, i) => <li key={i}>{item}</li>)}
    </ul>   
    </div>
    
  )

}

// Note, its better to keep the argument named props then treat it like a complex object
// rather than giving it a name other than props. this led to something like:
// ```<SingleListRender duties={"simple" : "object"} 
// --> responsiblities = { "responsiblities" : {"simple" : "object"}}   ```

const MultiListRender = (props) => {
  /* for displaying duties when I wor ked 
    multiple positions with one company */
    return(
    <div>
      
      {/* { props.duties.map((position) => (<SingleListRender duties={position}/>)) } */}
      {/* { Object.keys(props.duties).map((key) => (<SingleListRender duties={props.duties[key]}/>)) } */}
      { Object.keys(props.duties).map((key) => ) }

    </div>
  )
}

export default ExperienceTile;

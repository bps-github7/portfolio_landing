import { Component } from 'react';
import data from '../data.json';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { experience : data.experience }; 
  }
  render() { 
    return (
      <div className="app-contact">
        <h1>Experience</h1>
        { Object.keys(this.state.experience).map((position, i) => <ExperienceTile position={this.state.experience[position]}/>) }
      </div>
    );
  }
}

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
  const duties = props.duties[position];
  return(
    <div>
      <h3>
        { position }
      </h3>
      <ul>
        {duties.map((item, i) => <li key={i}>{item}</li>)}
      </ul>   
    </div>
    
  )

}

const MultiListRender = (props) => {
  /* for displaying duties when I wor ked 
  multiple positions with one company
  Right now were just gonna make it support 2 positions.
  This is trickier than I first imagined. update if u have
  worked for a company in the future with more than 2 positions
  */
  var items = [];
  for (let item in props.duties)
    items.push({[item] :props.duties[item]});
  return(
    <div style={{display: "grid", gridTemplateColumns: " 1fr 1fr"}}>
      { items.map((object) => <SingleListRender duties={object}/>) }
    </div>
  )
}


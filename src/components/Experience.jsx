import { Component } from 'react';
import data from '../data.json';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { experience : data.experience }; 
  }
  render() { 
    return (
      /* Leaving this as a div (when the rest of the site is semantic html5 tags like section) 
      because that is the path of least resistance- the styling we have for div is currently much
      better than section for displaying a text dense layout like the experience page requies
      (multiple columns and rows) So we provided this inline style to make the heading style match
      that used with the rest of the site section>headings.
      */
      <section className="panel">
        <h1>Experience</h1>
        { Object.keys(this.state.experience).map((position, i) => <ExperienceTile key={i} position={this.state.experience[position]}/>) }
      </section>
    );
  }
}

const ExperienceTile = (props) => {
  const position = props.position;
  return (
    // maybe want to conditionally render a class if job is current position
    <section>
      
      <h3>{ position.company }</h3>
      {/* <h4>{ position.position }</h4> */}
      <section>
       <div>
        <strong>Employed:</strong> {position.employed} <br />
        <strong>Supervisor:</strong> {position.supervisor}  <br />
				<strong>Location:</strong> {position.location} <br />
        </div>
      { 
        Object.keys(position.duties).length === 1 
        ? <SingleListRender duties={position.duties}/> 
        : <MultiListRender duties={position.duties}/> 
      }
      </section>
    </section>
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
  */
  var items = [];
  for (let item in props.duties)
    items.push({[item] :props.duties[item]});
  return(
    <div style={{display: "grid", gridTemplateColumns : " 1fr 1fr"}}>
      { items.map((object,i) => <SingleListRender key={i} duties={object}/>) }
    </div>
  )
}


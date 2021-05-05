import React, { Component } from 'react';
import ColumnDropdown from './ColumnDropdown';


export default class RowDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false 
    }
  }
  toggleOpen = () => {
    this.setState({
      open : !this.state.open
    })
  }


  render() { 
    return (
      <div className="app-row-dropdown">
        {
          this.state.open ?
          // <span>Open</span> : <span>Closed <button onClick={this.toggleOpen}>open?</button></span>
          <OpenRow topic={this.props.topic} toggleOpen={this.toggleOpen}/>:         
          <ClosedRow topic={this.props.topic} toggleOpen={this.toggleOpen}/>
        }
      </div>
    
    );
  }
}

const getTitle = (title) => {
  return (Object.keys(title)[0])
}

const ClosedRow = (props) => {
  return(
    <div className="app-closed-row">
      <h4>
        { props.topic }
      </h4>
       
      <button onClick={props.toggleOpen}>Examine</button>
    </div>
  )
}

const OpenRow = (props) => {
  return (
    <div className="app-open-row" style={{display: "grid", "gridTemplateRows" : "1fr 1fr 1fr" }}>
      <ColumnDropdown topic={props.topic}/>
      <button onClick={props.toggleOpen}>Hide</button> 
    </div>
  )
}
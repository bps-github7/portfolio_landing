import React, { Component } from 'react';

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
          <OpenRow toggleOpen={this.toggleOpen()}/>:         
          <ClosedRow toggleOpen={this.toggleOpen()}/>
        }
      </div>
    
    );
  }
}

const ClosedRow = (props) => {
  return(
    <div className="app-closed-row">
      Row name goes here
      <button onClick={() => this.props.toggleOpen()}>Open it?</button>
    </div>
  )
}

const OpenRow = (props) => {
  return (
    <div className="app-open-row">
      the row is open.
      <button onClick={() => props.toggleOpen()}>Close it?</button> 
    </div>
  )
}
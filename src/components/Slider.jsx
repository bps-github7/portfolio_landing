import React, { Component } from 'react';
import data from '../data.json';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    //this is very non-reusable!
    this.state = {
      concepts : data.skills.concepts.content.contents,
      index : 0
    }
  }
  handleNext = () => {
    if (this.state.index === this.state.concepts.length)
      this.setState({index : 0})
    else
      this.setState({index : this.state.index + 1})
  }
  handlePrevious = () => {
    if (this.state.index === 0)
      this.setState({index: this.state.concepts.length - 1})
    else
      this.setState({index : this.state.index - 1})

  }

  render() { 
    return (
      <div className="App-slider">

        <p><strong>{ this.state.concepts[this.state.index] }</strong></p>
        <button onClick={this.handleNext}>next</button>
        <button onClick={this.handlePrevious}>previous</button>
      </div>  
    );
  }
}
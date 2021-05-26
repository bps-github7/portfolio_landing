import React, { Component } from 'react';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    //this is very non-reusable! but an acceptable solution for now
    this.state = {
      index : 0
    }
  }
  handleNext = () => {
    if (this.state.index === this.props.content.length - 1)
      this.setState({index : 0})
    else
      this.setState({index : this.state.index + 1})
  }
  handlePrevious = () => {
    if (this.state.index === 0)
      this.setState({index: this.props.content.length - 1})
    else
      this.setState({index : this.state.index - 1})

  }

  render() { 
    return (
      <div className="App-slider">

        <p><strong>{ this.props.content[this.state.index] }</strong></p>
        <button onClick={this.handleNext}>next</button>
        <button onClick={this.handlePrevious}>previous</button>
      </div>  
    );
  }
}
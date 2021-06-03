import React, { Component } from 'react';

export default class TextSlider extends Component {
  constructor(props) {
    super(props);
    //this is very non-reusable! but an acceptable solution for now
    this.state = {
      index : 0
    }
  }
  handleNext = () => { 
    (this.state.index === this.props.content.length - 1) ?
    this.setState({index : 0}):
    this.setState({index : this.state.index + 1})
  }

  handlePrevious = () => {
    (this.state.index === 0)?
    this.setState({index : this.props.content.length - 1}):
    this.setState({index : this.state.index -1})
  }

  render() { 
    return (
      <div className="App-slider">

        <p><strong>{ this.props.content[this.state.index] }</strong></p>
        <button class="btn" onClick={this.handleNext}>next</button>
        <button class="btn" onClick={this.handlePrevious}>previous</button>
      </div>  
    );
  }
}
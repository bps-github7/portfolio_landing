import React, { Component } from 'react';

export default class ContentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const title = this.props.title ? this.props.title : "generic title";
    const body = this.props.body ? this.props.body : ["g","e", "n", "e", "r", "i", "c", "b", "o", "d", "y"]; 
    return (
      <div class={this.props.position}>
        <h1>{title}</h1>


        <ul>
          { body.map(sub => <li>{sub}</li>) }
        </ul>
        
      </div>
    );
  }
}
 

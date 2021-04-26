import React, { Component } from 'react';
import ContentBox from './ContentBox';


export default class WindowPane extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div class="window-wrapper">
        {/* { this.props.children.map(  ) } */}
      </div>
    );
  }
}
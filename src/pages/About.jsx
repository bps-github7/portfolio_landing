import React, { Component } from 'react';

export default class About extends Component {
  
  show=true;
  topic="";
  currentSelected;

  constructor(props) {
    super(props);
    this.state = { 
      defaultOrganization: true,
    }
  }

  render() { 
    return (
      <div class="app-about">
       here go about 
      </div>
      );
  }
}
import React, { Component } from 'react';
import data from '../data.json';

export default class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      skills : data.skills
    }
  }

  render() {
    console.log("skills here:")
    console.log(this.state.skills)
    return (
      <div className="app-skills">
        Here go the skills
      </div>
      );
  }
};
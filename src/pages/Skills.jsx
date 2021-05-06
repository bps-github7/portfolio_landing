import React, { Component } from 'react';
import data from '../data.json';
import RowDropdown from '../helperComponents/RowDropdown';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      skills : data.skills
    }
  }

  render() {
    return (
      <div className="app-skills">
        {
          Object.keys(this.state.skills)
          .map((area) =>  
            <RowDropdown title={area} contents={this.state.skills[area]}/>
          )
        }

      </div>
      );
  }
};
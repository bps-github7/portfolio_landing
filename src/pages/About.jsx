import React, { Component } from 'react';
import data from '../data.json';
import RowDropdown from '../helperComponents/RowDropdown';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      about : data.about
    }
  }

  render() { 
    return (
      <div class="app-about">
        {
          Object.keys(this.state.about)
          .map((area) =>  
            <RowDropdown topic={area} />
          )
        }
      </div>
      );
  }
}
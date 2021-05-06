import React, { Component } from 'react';
import ColumnDropdown from './ColumnDropdown';

export default class InfoColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="app-column-dropdown">
        {/* Its not getting the nested child, but te parent here... */}
        <h4>{ this.props.title}</h4>
        <ul>
          { Object.keys(this.props.contents).map((item, i) => (
            // <li key={i}>{item}</li>
            <ColumnDropdown title={item} contents={this.props.contents[item]} />
          ) ) }
        </ul>
      </div>
    );
  }
}
import React, { Component } from 'react';

export default class ColumnDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="app-column-dropdown">
        {/* Its not getting the nested child, but te parent here... */}
        <h4 class="dd-trigger">{ this.props.topic }</h4>
        <ul class="dd-col">
          <li>Thing 1</li>
          <li>Thing 2</li>
          <li>Thing 3</li>
        </ul>

      </div>
    );
  }
}
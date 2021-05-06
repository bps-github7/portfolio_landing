import { Component } from 'react';

export default class ColumnDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(`title : ${this.props.title}`);
    console.log(`contents : ${this.props.contents}`);
    return (
      <div>
        <h3 className="dd-trigger">{this.props.title}</h3>
        <ul className="dd-col">
          { Object.keys(this.props.contents).map((title, i) => (
            <li key={i}>{title}</li>
          )) }       
        </ul>
 
      </div>
      );
  }
}
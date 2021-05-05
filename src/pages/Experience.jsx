import { Component } from 'react';
import data from '../data.json';
import ExperienceTile from '../helperComponents/ExperienceTile';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { experience : data.experience }; 
  }
  render() { 
    return (
      //  TODO please implement an info panel component so that you can get rid of all this horrible redundancy
      <div className="app-contact four-panel" style={{ display : 'grid', gridTemplateColumns : '1fr', gridTemplateRows : '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
        { Object.keys(this.state.experience).map((position, i) => <ExperienceTile position={this.state.experience[position]}/>) }
      </div>
    );
  }
}
import { Component } from 'react';
import data from '../data.json';
import InfoPanelSlider from '../helperComponents/InfoPanelSlider';

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
        <InfoPanelSlider info={this.state.about} />
      </div>
      );
  }
}
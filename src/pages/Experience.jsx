import { Component } from 'react';


export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }
  render() { 
    return (
      //  TODO please implement an info panel component so that you can get rid of all this horrible redundancy
      <div className="app-contact four-panel" style={{ display : 'grid', gridTemplateColumns : '1fr', gridTemplateRows : '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
        here go experience
        Youll want to MAKE A helper component that lists the details for a certain position, then map the experience object in portfolio.json
        and render one component per object
      </div>

    );
  }
}
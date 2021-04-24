import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div class="app-title" style={{backgroundColor: 'black', color: 'white', border: '2px groove red'}}>
        <h3>
          <Link to="">Ben Sehnert</Link>
        </h3>
        <h5>Aspring Software Developer Located in West Philadelphia/University City</h5>
        <p>Click the button below to explore the site</p>
      </div>
      );
  }
}

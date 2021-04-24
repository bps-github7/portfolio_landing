import { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div class="app-home">
        <h1>
          {/* <Link to="">Ben Sehnert</Link> */}
          Ben Sehnert
        </h1>
        <h3>Aspring Software Developer Located in West Philadelphia/University City</h3>
        {/* <p>Click the button below to explore the site</p> */}
      </div>
      );
  }
}

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
     
        <section class="s1">
          <div className="main-container">
            Some stuff
          </div>
        </section>
     

        <section class="s2">
          <div className="main-container">
            Some new stuff
          </div>
        </section>

        <section class="s3">
          <div className="main-container">
            Some stuff other
          </div>
        </section>
      </div>
      );
  }
}

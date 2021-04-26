import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div class="app-about">
        <section className="s1">
        <div className="main-container">
            <div class="heading-wrapper">
              <h3>About:</h3>
            </div>
          </div>

          <div className="intro-wrapper">
            <div className="nav-wrapper">
              Nav
            </div>
            <div className="left-column">
              Interests
            </div>

            <div className="middle-column">
              Passions
            </div>
          
            <div className="right-column">
              Hunters of the waffle
            </div>
          </div>  
        </section>        
      </div>
      );
  }
}
 
// Interests, Efforts, Learning, Goals, Hopes, Desires, skills, training, wombats, bbq sauce

import React, { Component } from 'react';
import ContentBox from './ContentBox';
import data from './portfolio.json';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    

    
    const programmingSkills = data["skills"][0];
    const softwareSkills = data["skills"][1]; 
    const developmentTools = data["skills"][2]; 


    return (
      <div className="app-skills">
        
        <section>
          <div class="main-container">
            <div class="heading-wrapper">
              <h3>Skills:</h3>
            </div>
          </div>

          <div class="intro-wrapper">
            
            <ContentBox position="left-column" content={programmingSkills}/>

            <ContentBox position="middle-column" content={softwareSkills}/>

            <ContentBox position="right-column" content={developmentTools}/>

          </div>
        </section>
        
  

      </div>
      );
  }
};
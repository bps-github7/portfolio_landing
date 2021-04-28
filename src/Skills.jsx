import React, { Component } from 'react';
import ContentBox from './ContentBox';
import data from './portfolio.json';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    

    
    const devSkills = data["skills"]["development"]
    const programmingSkills = devSkills[0];
    const softwareSkills = devSkills[1]; 
    const developmentTools = devSkills[2]; 


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
        
          <p>Would be cool to determine the padding-bottom of li inside the contentBox dynamically,
            so that bottom ones line up (list with less items makes items more spaced out)
          </p>

          <p>Lets have 3 rows with centered button on page load, which will, when activated displaythe above content

            <br/> They can have subject like : development, general, abstract (or learning, growing, mastered)
            <br/> Perhaps a small statement about my approach to skill set building or something else to expound on , in gootter
          </p>
      </div>
      );
  }
};
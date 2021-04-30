import React, { Component } from 'react';
import data from './portfolio.json';
import ThreePaneInfoPanel from './ThreePaneInfoPanel';

export default class Skills extends Component {
  show=true;
  topic="";
  currentSelected;

  constructor(props) {
    super(props);
    this.state = { 
      defaultOrganization: true,
    }
  }

  switchOrganization = () => {
    this.setState({
      defaultOrganization : !this.state.defaultOrganization
    })
  }

  showInfoPanel(toShow) {
      if (toShow === "development") {
        this.topic = "development";
        this.currentSelected = data["skills"]["development"]
        this.setState({
          defaultOrganization : false
        })
      }
      else if (toShow === "general") {
        this.topic = "general";
        this.currentSelected = data["skills"]["general"]
        this.setState({
          defaultOrganization : false 
        })
      }
      else if (toShow === "conceptual") {
        this.topic = "conceptual";
        this.currentSelected = data["skills"]["concepts"];
        this.setState({
          defaultOrganization : false
        })
 
      }
    }

  render() {
    return (
      <div className="app-skills">
        
        <section>
          <div class="main-container">
            <div class="heading-wrapper">
              <h3>Skills:</h3>
            </div>
          </div>

          { this.state.defaultOrganization ?
          <div class="intro-wrapper-rows">

            <div class="top-row">
              <span>Development Skills</span>
              <button 
              onClick={() => this.showInfoPanel("development")}>
                Show
              </button>
            </div>

            <div class="middle-row">
                <span>General Skills</span>
                <button
                  onClick={() => this.showInfoPanel("general")}>
                  Show
                </button>
            </div>

            <div class="bottom-row">
                <span>Conceptual Skills</span>           
                <button
                onClick={()=>this.showInfoPanel("conceptual")}>
                  Show
                </button>
            </div>
          </div>
        // : <div>Bisk</div>}
        : <ThreePaneInfoPanel info={this.currentSelected} orientation={this.switchOrganization}/>} 
        </section>
        
          {/* <p>Would be cool to determine the padding-bottom of li inside the contentBox dynamically,
            so that bottom ones line up (list with less items makes items more spaced out)
          </p>

          <p>Lets have 3 rows with centered button on page load, which will, when activated displaythe above content

            <br/> They can have subject like : development, general, abstract (or learning, growing, mastered)
            <br/> Perhaps a small statement about my approach to skill set building or something else to expound on , in gootter
          </p> */}
      </div>
      );
  }
};
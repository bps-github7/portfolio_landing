import React, { Component } from 'react';
import ThreePaneInfoPanel from './ThreePaneInfoPanel';
import data from './portfolio.json';


export default class About extends Component {
  
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
      if (toShow === "music") {
        this.topic = "music";
        this.currentSelected = data["about"]["music"]
        //such a jenky way of doing this! why not just do it once ?
        this.setState({
          defaultOrganization : false
        })
      }
      else if (toShow === "excersise") {
        this.topic = "excersise";
        this.currentSelected = data["about"]["excersise"]
        this.setState({
          defaultOrganization : false 
        })
      }
      else if (toShow === "cooking") {
        this.topic = "cooking";
        this.currentSelected = data["about"]["cooking"];
        this.setState({
          defaultOrganization : false
        })
 
      }
    }


  render() { 
    return (
      <div class="app-about">
        <section>
          <div class="main-container">
            <div class="heading-wrapper">
              <h3>About</h3>
            </div>
          </div>
          <div className="header">
            Some stuff about me:
          </div>



          { this.state.defaultOrganization ?
          <div class="intro-wrapper-rows">

            <div class="top-row">
              <span>Music</span>
              <button 
              onClick={() => this.showInfoPanel("music")}>
                Show
              </button>
            </div>

            <div class="middle-row">
                <span>Excersis</span>
                <button
                  onClick={() => this.showInfoPanel("excersise")}>
                  Show
                </button>
            </div>

            <div class="bottom-row">
                <span>Cooking</span>           
                <button
                onClick={()=>this.showInfoPanel("cooking")}>
                  Show
                </button>
            </div>
          </div>
        // : <div>Bisk</div>}
        : <ThreePaneInfoPanel info={this.currentSelected} orientation={this.switchOrganization}/>} 
        </section>
        
      </div>
      );
  }
}
 
// Interests, Efforts, Learning, Goals, Hopes, Desires, skills, training, wombats, bbq sauce
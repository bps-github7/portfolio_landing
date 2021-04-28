import React, { Component } from 'react';
import ContentBox from './ContentBox';


export default class ThreePaneInfoPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {

    //this needs to be more dynamic obbiously. but how? pass in string from props, then define these in conditional based on stirng value.
    const skills = this.props.info; 
    // console.log(skills);
    
    const skillArea1 = skills[0];
    const skillArea2 = skills[1]; 
    const skillArea3 = skills[2]; 


    
    return (
      <div className="intro-wrapper">
        <ContentBox position="left-column" content={skillArea1}/>

        <ContentBox position="middle-column" content={skillArea2}/>

        <ContentBox position="right-column" content={skillArea3}/>


        {/* Need to send a signal to parent component should this button be pressed */}
        <button onClick={this.props.orientation}>Go back</button>
      </div>
    );
  }
}
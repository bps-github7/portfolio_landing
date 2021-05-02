import React, { Component } from 'react';
import ContentBox from './ContentBox';


export default class ThreePaneInfoPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    //d0 we really need to pass in the whole object, why not a string of the tittle (about) and let this component load that object dynamicalluy
    const about = this.props.info.about; 
    // // console.log(skills);
    
    const area1 = about[0];
    const area2 = about[1]; 
    const area3 = about[2]; 

    console.log(this.props.info)
    
    return (
      <div className="intro-wrapper">
         hee some stuff
          { area1.title }
        

        {/* <ContentBox position="left-column" content={skillArea1}/>

        <ContentBox position="middle-column" content={skillArea2}/>

        <ContentBox position="right-column" content={skillArea3}/> */}


        {/* Need to send a signal to parent component should this button be pressed */}
        <button onClick={this.props.orientation}>Go back</button>
      </div>
    );
  }
}
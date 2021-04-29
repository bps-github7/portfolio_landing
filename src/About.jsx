import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div class="app-about">
   <section>
          <div class="main-container">
            <div class="heading-wrapper">
              <h3>About:</h3>
            </div>
          </div>

          <div class="intro-wrapper" style={{justifyContent:"center"}}>


            {/* Dont do this- break lines with br. hurts responsiveness  */}
            I am a web and general developer local to West Philadelphia. <br/>
            I graduated last summer from Drexel, with a Masters of Science in Information Systems. <br/>
            Since then, I have been working on this portfolio, networking, applying and interviewing for positions <br/>
            <br/><br/>
            I am looking forward to getting my career in technology started with a company where I can make an impact. <br/>
            I am passionate about many things: education, music, sustainability, among other things. <br/>
            {/* <div class="left-column">Passions</div>
            <div class="middle-column">Principles</div>
            <div class="right-column">Goals</div> */}

          </div>
        </section>

   
               
      </div>
      );
  }
}
 
// Interests, Efforts, Learning, Goals, Hopes, Desires, skills, training, wombats, bbq sauce

import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="app-contact">
        <h1>Contact me:</h1>


        <p>I can be reached by the following means:</p>
        <ol>
          <li><strong>Email:</strong>bps53@protonmail.com</li>
          <li><strong>Call:</strong>215-837-2319</li>
          <li><strong>Private Message:</strong>Linkdin, github</li>
        </ol>
        <p>I'm happy to discuss the following: </p>
        <ol>
          <li>Paid and pro-bono work opprotunities</li>
          <li>Constructive critisim</li>
          <li>Friendly and/or instructive career advice</li>
        </ol>


        <p><strong>Note: </strong> I am currently using Robo-call to screen scam calls, as I am frequently harrased with these on my mobile phone. <br/>
        For this reason, If you try my cell and are unable to get through, please select an alternate means from the above list <br/>
        I am attentitive to my cell-phone at most times of the day, and personally have not been made aware of recruiters or hiring manager being unable to get through <br/>
        However, I would not rule it out as a possibility.</p>
        <br/>
        <p><strong>Best times to contact me:</strong> Normal business hours Monday-Friday</p>


        <h3>On Vacation? not currently.</h3>
        <p>Feel free to reach out at your earliest desired convenience.</p>
      </div>
    );
  }
}

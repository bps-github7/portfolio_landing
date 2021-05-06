import { Component } from 'react';
import data from '../portfolio.json';

/* make sure you update this with all the other components. this json data should be loaded dynamically when needed only*/
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 'contact' : data.contact  }


    


  }
  render() {
    const contact = this.state.contact;
    const msg = Object.entries(this.state.contact.msg)
    return (
      <div className="app-contact four-panel" style={{ display : 'grid', gridTemplateColumns : '1fr 1fr', gridTemplateRows : '1fr 1fr 1fr 1fr' }}>
        <div>
          <h3>Cell phone:</h3>
          { contact.cell }
        </div>
        
        <div class="top-right">
          <h3>Email:</h3>
          { contact.email }          
        </div>
        
        <div className="bottom-left">
          <h3>Private Message:</h3>
          <ul>
            { msg.map(([key,value]) => <li><strong>{key} :</strong>{value}</li> ) } 
          </ul>
        </div>

        <div>
          <h3>Best way to contact me: </h3>
          { contact.bestWay }
        </div>

        <div>
          <h3>Best time to contact me: </h3>
          { contact.bestTime }
        </div>

        <div>
          <h3>Concerns: </h3>
          { contact.concerns }
        </div>

        <div>
          <h3>Am i on Vacaction?</h3>
          { this.state.contact.vacationing ? <span class="vacationing">Yes</span>:<span>No</span> }
        </div>
        
        <div>
          <h3>Am i Looking for a job?</h3>
          { this.state.contact.employed ? <span class="vacationing">Yes</span>:<span>No</span> }
        </div>


      </div>
    );
  }
}

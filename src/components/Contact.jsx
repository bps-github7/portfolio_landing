import React from 'react';

const Contact = (props) => {
  const contact = props.contact;
  const msg = Object.entries(contact.msg)
  return (
    // possible to just loop over keys and values instead of hard coding the labels like this...
      <div className="contact">
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
          <h3>Am I on Vacaction?</h3>
          { contact.vacationing ? <span class="vacationing">Yes</span>:<span>No</span> }
        </div>
        
        <div>
          <h3>Am i Looking for a job?</h3>
          { contact.employed ? <span class="vacationing">Yes</span>:<span>No</span> }
        </div>
      </div>
  );
}

export default Contact;

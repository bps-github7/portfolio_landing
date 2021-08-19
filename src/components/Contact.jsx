import ContactForm from './ContactForm';

const Contact = ({contact}) => {
	

  const ContactView = ({info}) => {
		const ContactIcon = ({contactType, contactInfo}) => {
			let projected;
			/* displays msg platform logo to right and my contact info on left */
			if (contactType === "linkedin") {
				projected = <img className="contact-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/LinkedIn-Logo.png" alt="the LinkedIn logo"/>
			} else if (contactType === "github") {
				projected = <img className="contact-logo" id="github" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png" alt="the Github Logo"/>
			} else if (contactType === "slack") { 
				projected = <img className="contact-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="The Slack Logo"/>
			}

			return(
				<li style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
					{projected}
					<span>{contactInfo}</span>
				</li>
			)


		}


		if (info === "Private Message") {
      // return(null);
      return(
        <section>
          <strong>Find me on Social Media:</strong>
          <ul>
            {
              Object.keys(contact[info])
              .map((item, i) => (
								<ContactIcon contactType={item} contactInfo={contact[info][item]} key={i} />
								// <li key={i}>
                //   <strong>{ item }: </strong>
                //   {contact[info][item]}
                // </li>
              ) )
            }
          </ul>
        </section>
      )
    }
    else if (typeof(contact[info]) === 'boolean') {
      return(
        <section style={{display: "inline"}}>
          <strong>{info}:</strong>
          { 
            contact[info] ?
            <span style={{color: "green"}}> Yes</span> :
            <span style={{color: "red"}}> No</span>
          } <br />
        </section>
      )
    }
        // TODO: hey lets refactor this next- firebase + input / prompt to get users feedback or request for me to contact them.
    return(
      <div>
        <strong>{ info }:</strong>
        <p>{ contact[info] }</p>
      </div>
    )
  }
  
  return(
    <section className="panel">
      <h1>Contact Me</h1>
			{/* TODO: needs responsiveness and back end connectivity- send me an email when this form is subvmitted */}
			{/* <ContactForm/> */}
			{
        Object.keys(contact)
        .map((info, i) => (
          <ContactView info={info} key={i}/>
        ))
      }
    </section>
  )
}
export default Contact;
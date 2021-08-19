const Contact = ({contact}) => {
  
  const ContactView = ({info}) => {
    if (info === "Private Message") {
      // return(null);
      return(
        <section>
          <strong>Private Message:</strong>
          <ul>
						<li>Possble to use linkedin, github and slack api to do this? show social media icons for each, then redirect to auth and then open msg to me</li>
            {/* {
              Object.keys(contact[info])
              .map((item, i) => (
                <li key={i}>
                  <strong>{ item }: </strong>
                  {contact[info][item]}
                </li>
              ) )
            } */}
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
const Contact = ({contact}) => {
  
  const ContactView = ({info,key}) => {
    if (info === "Private Message") {
      // return(null);
      return(
        <setion>
          <h3>Private Message:</h3>
          <ul>
            {
              Object.keys(contact[info])
              .map((item, i) => (
                <li key={i}>
                  <strong>{ item }: </strong>
                  {contact[info][item]}
                </li>
              ) )
            }
          </ul>
        </setion>
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
      <div key={key}>
        <h2>{ info }:</h2>
        <p>{ contact[info] }</p>
      </div>
    )
  }
  
  return(
    <section>
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
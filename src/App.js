import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Experience from './components/Experience';
import InfoPanel from './components/InfoPanel';
import ImageSlider from './components/ImageSlider';
import TodoList from './components/TodoList/TodoList';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <div class="content">
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/contact'>
              <Contact contact={data.contact}/>
            </Route>
            <Route exact path='/skills'>
              <Skills info={data.skills}/>
            </Route>
            <Route exact path='/about'>
              <About info={data.about}/>  
            </Route>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/experience' component={Experience}/>
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

const Skills = ({info}) => {
  return (
    <InfoPanel title="Skills" info={info}/>
  );
}

const About = ({info}) => {
  return(
    <InfoPanel title="About" info={info}/>
  );
}

const GetAvatar = async () => {
  const response = await fetch('https://api.github.com/users/bps-github7');
  const data = await response.json();
  console.log(data)
  return data.avatar_url;
}

const Home = () => {
  GetAvatar();
  return(
    <section>
        {/* <img src="https://avatars.githubusercontent.com/u/51515466?v=4" style={{height: 500, width: 500}}/> */}
        <img src={GetAvatar} style={{height: 500, width: 500}}/>
        
        <h3>Aspring Software Developer Located in West Philadelphia/University City</h3>
        {/* <p>Click the button below to explore the site</p> */}
    </section>
  )
}

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
        // wanna target this so it can appear like info and the boolean appear on the same line- like a todo and checkbox.
        <section style={{display: "inline"}}>
          <h2>{info}:</h2>
          { 
            contact[info] ?
            <span style={{color: "green"}}>Yes</span> :
            <span style={{color: "red"}}>No</span>
          }
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
  
  // const contact = props.contact;
  // const msg = Object.entries(contact.msg)
  // return (
  //   // TODO: loop over the keys and values instead of doing this hardcoded like below.
  //     <div className="contact">
  //       <h1>Contact me
  //       </h1>
  //       <div>
  //         <h3>Cell phone:</h3>
  //         { contact.cell }
  //       </div>
        
  //       <div class="top-right">
  //         <h3>Email:</h3>
  //         { contact.email }          
  //       </div>
        
  //       <div className="bottom-left">
  //         <h3>Private Message:</h3>
  //         <ul>
  //           { msg.map(([key,value]) => <li><strong>{key} :</strong>{value}</li> ) } 
  //         </ul>
  //       </div>

  //       <div>
  //         <h3>Best way to contact me: </h3>
  //         { contact.bestWay }
  //       </div>

  //       <div>
  //         <h3>Best time to contact me: </h3>
  //         { contact.bestTime }
  //       </div>

  //       <div>
  //         <h3>Concerns: </h3>
  //         { contact.concerns }
  //       </div>

  //       <div>
  //         <h3>Am I on Vacaction?</h3>
  //         { contact.vacationing ? <span class="vacationing">Yes</span>:<span>No</span> }
  //       </div>
        
  //       <div>
  //         <h3>Am i Looking for a job?</h3>
  //         { contact.employed ? <span class="vacationing">Yes</span>:<span>No</span> }
  //       </div>
  //     </div>
  // );
}

export default App;
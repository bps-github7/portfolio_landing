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
  )
}

const Home = () => {
  return(
    <section>
      
        <h1>
          {/* <Link to="">Ben Sehnert</Link> */}
          Ben Sehnert
        </h1>
        <ImageSlider/>
        <TodoList/>
        <h3>Aspring Software Developer Located in West Philadelphia/University City</h3>
        {/* <p>Click the button below to explore the site</p> */}
        <section class="s1">
          <div className="main-container">
            Some stuff
          </div>
        </section>
     

        <section class="s2">
          <div className="main-container">
            Some new stuff
          </div>
        </section>

        <section class="s3">
          <div className="main-container">
            Some stuff other
          </div>
        </section>
    </section>
  )
}

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

export default App;
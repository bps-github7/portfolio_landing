import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Experience from './components/Experience';
import InfoPanel from './components/InfoPanel';
import Panel from './components/Panel';
import Home from './components/Home';
import Contact from './components/Contact';
import data from './data.json';
import ScrollToTop from './components/ScrollToTop';

import { testing } from './services/firebase';



function App() {
	useEffect(() => {
		document.title = "Ben's Software Portfolio"
		testing();		
	}, []);

  return (
    <div className="App">
      <Router>

        <Nav/>
        <ScrollToTop/>
				{/* <h1>{process.env.REACT_APP_EXAMPLE}</h1> */}
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
            <Route>
              <Redirect to="/home" />
            </Route>
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
    <Panel title="About" info={info}/>
  );
}

export default App;
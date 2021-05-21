// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Home from './components/Home';
import Contact from './components/Contact';
import InfoPanel from './components/InfoPanel';
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
              <InfoPanel title="skills" info={data.skills}/>
            </Route>
            <Route exact path='/about'>
              <InfoPanel title="about" info={data.about}/>  
            </Route>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/experience' component={Experience}/>
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}


export default App;

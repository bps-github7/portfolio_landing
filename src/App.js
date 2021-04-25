// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';



function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/skills' component={Skills}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/experience' component={Experience}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;

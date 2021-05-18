// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';



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

// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './helperComponents/Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';



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

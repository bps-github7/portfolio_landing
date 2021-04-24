// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Router>
        <Title/>
        <Nav/>
        <Switch>
          <Route exact path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/experience' component={Experience}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

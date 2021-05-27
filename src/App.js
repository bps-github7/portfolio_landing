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
import { useState, useEffect } from 'react';


function App() {
    // P. O. C for acceessing github repos URL- doesnt want to work when we package it into a custom hook.
    // useEffect(() => {
    //   fetch('https://api.github.com/users/bps-github7/repos')
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //     })
    // }, [])

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

//cheap trick to see if we can outsmart a pesky bug
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

export default App;
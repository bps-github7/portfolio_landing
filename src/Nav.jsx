import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      visible: false
    }
  }

  render() { 
    const buttonText = this.state.visible ? "hide menu" : "show menu"
    return ( 
    <div className="app-nav">
      <button onClick={() => this.setState({visible : !this.state.visible})}>{ buttonText }</button>
      { this.state.visible ? 
        <ul>
        <li>
          <h2>
            <Link to="/about">About</Link>
          </h2>
        </li>

        <li>
          <h2>
            <Link to="/projects">My Projects</Link>
          </h2>
        </li>


        <li>
          <h2>
            <Link to="/experience">Experiences</Link>
          </h2>
        </li>

      </ul>
      : null 
      }
    </div>
    
     );
  }
} 
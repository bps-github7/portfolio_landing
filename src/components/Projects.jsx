import { Component } from 'react';
import data from '../data.json';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    /*
    TODO: use github api to fetch this data and display it. to do otherwise (like below) s
    */

    return (
      <section className="projects">
        Projects go here
     </section>
    );
  }
}
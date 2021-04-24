import { Component } from 'react';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { workVisible: false, vollunteerVisible: false, educationVisible : false, honorsVisible : false }
  }
  render() { 
    const workButton = this.state.workVisible ? 'Hide Work' : 'Show Work';
    const vollunteerButton = this.state.vollunteerVisible ? 'Hide vollunteer Work' : 'Show vollunteer Work';
    const educationButton = this.state.educationVisible ? 'Hide Education' : 'Show Education';
    const miscButton = this.state.vollunteerVisible ? 'Hide misc' : 'Show misc';




    return (
      <div className="app-experience">
        Experience:
        <button onClick={() => this.setState({workVisible : !this.state.workVisible})}>{ workButton }</button>
        { this.state.workVisible ? <h3>Work Work Work</h3> : null }
        <button onClick={() => this.setState({vollunteerVisible : !this.state.vollunteerVisible})}>{ vollunteerButton }</button>
        { this.state.vollunteerVisible ? <h3>vol vol vol</h3> : null }
        <button onClick={() => this.setState({educationVisible : !this.state.educationVisible})}>{ educationButton }</button>
        { this.state.educationVisible ? <h3>Edu Educ Edu</h3> : null }
        <button onClick={() => this.setState({miscVisible : !this.state.miscVisible})}>{ miscButton }</button>
        { this.state.miscVisible ? <h3>misc misc misc misc misc misc misc misc misc</h3> : null }
      
      </div>
      );
  }
}
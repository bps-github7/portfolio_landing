import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      avatarUrl : ""
     }
  }
  async componentDidMount() {
    const url = "https://api.github.com/users/bps-github7";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ avatarUrl: data.avatar_url, loading : false })
  }



  render() { 
    return (
      <section>

        <h1>Who am I?</h1>
        {  
          this.state.loading || !this.state.avatarUrl ?
          <span>Loading...</span>:
          <img alt="a digital portrait of me face" src={this.state.avatarUrl}/> 

        }
        <h3>Ben Sehnert</h3>
        <p>
          <em>An aspiring Software Developer, local to Philadelphia. </em>
          I graduated with my Masters of Science in Information Systems last june. 
          I'm looking for work in Web development, Help-desk, general system developement, UI/Ux design, QA engineering and more,
          in sectors not limited to Education, sustainability, non profit, government and regenerative agricultural. <br /><br />
          If you think I would be a good match for an open position, your company, or can connect me to someone who can help me in my job search:  <br />
          <strong>
            please do not hesitate to <Link to="/contact">get in touch!</Link> <br /><br />
          </strong>
        </p>

        <h5>Getting aroung:</h5>
        <p>
          learn more about <Link to="/skills">my technical and job related skills</Link><br />
          learn more about <Link to="/projects"> my projects</Link> <br />
          learn more about <Link to="/experience">my previous work experience</Link> <br />
          learn more about <Link to="/about">me </Link>
        </p>          
      </section>
    );
  }



}
 
export default Home;
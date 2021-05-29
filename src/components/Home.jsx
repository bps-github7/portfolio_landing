import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import TodoList from './TodoList/TodoList';


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
        {  
          this.state.loading || !this.state.avatarUrl ?
          <span>Loading...</span>:
          <img alt="a digital portrait of me face" src={this.state.avatarUrl} style={{height: 500, width: 500}}/>

        }
        <TodoList/>
        <ImageSlider/>       
        <h3>Aspring Software Developer Located in West Philadelphia/University City</h3>
      </section>
    );
  }
}
 
export default Home;
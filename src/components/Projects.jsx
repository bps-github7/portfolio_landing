import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : true,
      repos : []
      }
  }

  async componentDidMount() {
    const url = 'https://api.github.com/users/bps-github7/repos';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({repos : data, loading: false});
    console.log(this.state.repos)
  }


  render() { 
    return ( 
      <section class="projects">
        {
          this.state.loading || !this.state.repos ?
          <span>Loading...</span> :
          <ul>
            {
              this.state.repos
              .map((repo, i) => (
                <RepoView key={i} repo={repo}/>
              )
              )
            }

          </ul>
          

        }
      </section>

     );
  }
}
/* TODO: in the future, you might want to organize these under a subheading
like you had in previous implementation, based on the language the repo is written in
(this data is provided by the object returned by the api call - repo.language) */
const RepoView = ({id, repo}) => {
  
  /* Dont render a repo view if its one of these, you can take yodeler
  when you actually get around to working on it and its in a presentable state. */
  const remove = ['bps-github7', 'yodeler', 'portfolio_landing'];
  if (remove.includes(repo.name)) {
    return(null)
  }

  return (
    <section key={id}>
      <h3>{ repo.name }</h3>
      <p>{ repo.description }</p>
      <a href={repo.html_url}>View Source Code</a>
    </section>
  );
}

export default Projects;

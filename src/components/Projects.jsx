import React, { Component, useState } from 'react';

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
  }


  render() { 
    return ( 
      <section class="projects">
        <h1>Projects</h1>
        {
          this.state.loading || !this.state.repos ?
          <span>Loading...</span> :
					<ProjectOrganizer projects={this.state.repos}/>
				}
				</section>

     );
  }
}

const ProjectOrganizer = ({projects}) => {
	return (
		<Organizer projects={projects}/>		
		// <ul>
		// 	{ projects.map((repo, i) => 
		// 			<li>{repo.name}</li>
		// 		) 
		// 	}		
		// </ul>
	)
}

const Organizer = ({projects}) => {
  
	let categories = {
		restApis : [],
		webProjects : [],
		scripting : []
	}
	const remove = ['bps-github7', 'yodeler', 'portfolio_landing', 'IVDB2'];
	projects.forEach((project) => {
		//filter out projects of lesser importance and repos that arent fleshed out
		if (!remove.includes(project.name)) {
			if (project.name.includes([".net","JavaSpring"])) categories['restApis'].append(project);
			else if (project.name.includes(["IVDB", "oral-history"])) categories['webProjects'].append(project);
			//probably could use else here but just being careful
			else if (project.name.includes(['class_generator','zipcodes'])) categories['scripting'].append(project)
		}
	})

	const corrections = { 'RESTful APIs' : 'restApis', 'Websites' : 'webProjects', 'scripts' : 'scripting' }

	const [ selected, setSelected ] = useState(null);
	
	const handleChange = (event) => {
		// console.log(event.target.value)
		setSelected(event.target.value)
	}

	const categoryView = ({categories}) => {
		return(
			<ul>
				{ categories.map((item, i) => <li>{item.name} : {item.descri}</li>) }
			</ul>
		)
	}

	return(
		<section>
			<select onChange={handleChange} name="" id="">
				{ Object.keys(corrections).map((item, i) => 
						<option  value={corrections[item]}>{item}</option>
					) 
				}
			</select>
			you chose {categories[selected]}
		</section>
	)
	
		
}


const RepoView = ({id, repo}) => {
  

	// const [ open, setOpen ]

	
  return (
    <section key={id}>
      <h3>{ repo.name }</h3>
      <p>{ repo.description }</p>
      <a href={repo.html_url}>View Source Code</a>
    </section>
  );
}


export default Projects;

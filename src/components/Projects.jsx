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
	let intendedCategories = {
		restApis : [".net","JavaSpring"],
		webProjects : ["IVDB","oral-history"],
		scripting : ["class_generator","zipcodes"]
	}
	const filterProjects = (project) => {
		if (intendedCategories['restApis'].includes(project.name)) {
			categories['restApis'].push(project);
		} else if (intendedCategories['webProjects'].includes(project.name)) {
			categories['webProjects'].push(project);
		} else if (intendedCategories['scripting'].includes(project.name)) {
			categories['scripting'].push(project);
		}
	}
	console.log(projects)
	// projects.forEach((project) => { filterProjects(project) })
	


	// const remove = ['bps-github7', 'yodeler', 'portfolio_landing', 'IVDB2'];}

	const corrections = { 'RESTful APIs' : 'restApis', Websites : 'webProjects', scripts : 'scripting' }

	const [ selected, setSelected ] = useState(null);
	
	const handleChange = (event) => {
		// console.log(event.target.value)
		setSelected(event.target.value)
	}

	return(
		<section>
			<p>Select a category from the below selection to view projects:</p>
			<select onChange={handleChange} name="" id="">
				{ Object.keys(corrections).map((item, i) => 
						<option  value={corrections[item]}>{item}</option>
					) 
				}
			</select>
			{selected && <CategoryView category={categories[selected]}/>}
		</section>
	)
	
		
}

const CategoryView = ({category}) => {
	console.log(category)
	return(
		<ul>
			{category.map((item, i) => <RepoView repo={item}/>)}
		</ul>
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

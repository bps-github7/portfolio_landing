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
      <section className="info-panel">
        <h1>Projects</h1>
        {
          this.state.loading || !this.state.repos ?
          <span>Loading...</span> :
					<Organizer projects={this.state.repos}/>
				}
				</section>

     );
  }
}

// const ProjectOrganizer = ({projects}) => {
// 	return (
// 		<Organizer projects={projects}/>		
// 	)
// }

const Organizer = ({projects}) => {
  
	let categories = {
		restApis : [],
		webProjects : [],
		scripting : []
	}
	let intendedCategories = {
		restApis : [".net","JavaSpring"],
		webProjects : ["IVDB","oral-history"],
		scripting : ["Class_Generator","zipcodes"]
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
	projects.forEach((project) => { filterProjects(project) })
	
	const corrections = { 'RESTful APIs' : 'restApis', Websites : 'webProjects', scripts : 'scripting' }
	const [ selected, setSelected ] = useState(null);
	
	const handleChange = (event) => {
		setSelected(event.target.value)
	}

	
	return(
		<section>
			{ !selected && <p>Select a category to view projects:</p>}		
			<select className="select" onChange={handleChange} name="" id="">
				<option value=""></option>
				{ Object.keys(corrections).map((item, i) => 
						<option className="select-item" key={i} value={corrections[item]}>{item}</option>
					) 
				}
			</select>
			{selected && <CategoryView category={categories[selected]}/>}
		</section>
	)
	
		
}

const CategoryView = ({category}) => {
	return(
		<ul>
			{category.map((item, i) => <RepoView key={i} repo={item}/>)}
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

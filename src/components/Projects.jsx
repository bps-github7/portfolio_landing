import { Component } from 'react';
import data from '../data.json';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    /*
    TODO: use github api to fetch this data and display it. to do otherwise (like below) is ChIlDsPlAy and very non DRY
    */

    return (
      <section className="projects">
      {
        // this loop gives us the types of categories of projects ```data.projects.{key}```
        Object.keys(data.projects)
        .map(
          (category, i) => (
            <section key={i}>
              <h2>{category}</h2>
              {/*  Make a button that shows/ hides the projects for a certain category*/}
               
              {
                // this loop accesses the projects in a category ```data.projects.front-end.{key}```
                Object.keys(data.projects[category])
                .map((title, i) => 
                (
                  <section>
                    {  
                      data.projects[category][title].link ? 
                      <a href={data.projects[category][title].link}>
                        <h4>{title}</h4>
                      </a>:
                      <h4>{title}</h4>
                    }
                    <p>
                      {data.projects[category][title].description}
                    </p>
                    <a href={data.projects[category][title].src}>view source code</a>
                  </section>
                ))}

            </section>
          )
        )
       }
      </section>
    );
  }
}
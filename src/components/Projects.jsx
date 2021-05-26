import { Component } from 'react';
import data from '../data.json';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <section className="projects">
      {
        // this loop gives us the types of categories of projects ```data.projects.{key}```
        Object.keys(data.projects)
        .map(
          (first, i) => (
            <section key={i}>
              <h1>{first}</h1>
              {/*  Make a button that shows/ hides the projects for a certain category*/}
              
              {
                // this loop accesses the projects in a category ```data.projects.front-end.{key}```
                Object.keys(data.projects[first])
                .map((second, i) => 
                (
                  <section>
                    <h4>
                      {second}
                    </h4>
                    <p>
                      {data.projects[first][second].description}
                    </p>
                    <a href={data.projects[first][second].src}>Source code link</a>
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
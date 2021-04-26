import React, { Component } from 'react';
import ContentBox from './ContentBox';


export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    const programmingSkills = ["Python","Typescript/Javascript","HtML5/CSS3","frameworks: AngularJS, ReactJS, Django, Spring, Ruby on Rails","general programming: C/C#/C++, Java, PHP","Scripting: Bash, Batch, AWK, perl", "Database: SQL,noSQL"];
    const softwareSkills = ["Information Systems Design and management", "UML", "that other thing", "Requirements management", "Documentatiion", "Testing"];
    const generalSkills = [3,4,5,6,7];
    const developmentTools = ["dev environments: VSCode, Thonny, Eclipse, Vim","Testing: ","Postman","Docker", "Microsoft SQL Server Express", "Oracle RDBMS"];


    return (
      <div class="app-skills">
        
        <section>
          <div className="main-container">
            <div class="heading-wrapper">
              <h3>Skills:</h3>
            </div>
          </div>

          <div className="intro-wrapper">
            {/* <div className="nav-wrapper">Nav</div> */}
            
            <ContentBox position="left-column" title="Progamming skills" body={programmingSkills}/>

            <ContentBox position="middle-column" title="Software skills" body={softwareSkills}/>

            <ContentBox position="right-column" title="developer skills" body={developmentTools}/>

          </div>
        </section>
        
        {/* this is the flex box */}
        
        <div></div>
        <div></div>
        <div></div>

        {/* What a terrible use of react!
        <div class="view-box">
          <div>
            <h3>Technical Skills</h3>
            Think you should have sub headings: scripting, web frameworks, general programming...
            <ul>
              <li>Python 2 and 3</li>
              <li>JS family: typescript, ECMA6, JSX</li>
              <li>HTML5 + CSS3, Jquery, Ajax</li>
              <li>AngularJS, ReactJS, VueJS</li>
              <li>Django, Spring MVC, Ruby on Rails, ASP.net, PHP</li>
              <li>Bash, Batch, Awk, C family (C,C++ & C#)</li>
              <li>SQL: MSQL, POSTgreSQL (PSQL)</li>
            </ul>
          </div>
          <div>
            <h3>Software practice/ Theory:</h3>
            <ul>
              <li>Information Systems management and design</li>
              <li>UML- unified modeling language</li>
              <li>Agile, scrum, kanban, traditional sdlc (waterfall) </li>
              <li>Project management</li>
              <li>Requirements engineering</li>
              <li>Reliability and testing (clean room methodology, safety critical systems)</li>
              <li>Computer Science: Theory of computing, Data structures and algorithms, Programming langauge design</li>
            </ul>
          </div>
          <div>
            <h3>Tooling:</h3>
            <ul>
              <li>Visual Studios Code</li>
              <li>Eclipse</li>
              <li>VIM</li>
              <li>Postman</li>
              <li>Docker, mostly for connecting database containers to my rest APIs</li>
              <li>Database management systems:  Microsoft SQL server management studio (SSMS), Oracle SQL Developer</li>
            </ul>
            
          </div>
        </div>

        Use grid to list tiles with heading (name of the skill) and text (elaboration), click on a tile to maximize/ show more info.
        <br/>
        for now
        <br/>
        
        Software practices: Information System Design and management, UML (unified Modeling Language), Requirements engineering, documentation, Reliability Engineering, Project management


 */}

      </div>
      );
  }
};
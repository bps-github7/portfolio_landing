import React, { Component } from 'react';

export default class ContentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  renderList(objList) {
    /**
     * @param objList <{title : string, content : string []} []>
     * list of objects being looped over. Its assumed they follow
     * 
     * render a nested list of descriptor objects
     * useful for managing complex, categorical data- skills -> programming -> web -> javascript -> angular 
     */
    // console.log(objList);
    let complexObjects = [];
    let display = []   
    for (let item of objList) {
      if(typeof(item) != "string") {
        complexObjects.push(item);
      } else {
        display.push(item)
      }

    }

    if(complexObjects) {
      for (let subheading of complexObjects) {
        display.push(
          <li>
            <h4>{subheading.title}</h4>
            <ul>
              {subheading.content.map(item => <li>{item}</li>)}
            </ul>
          </li>

        )
      } 
    }

    display = display.map(subject => <li>{subject}</li>)

     return (display)
  }

  render() {
    const title = this.props.content.title;
    const body = this.props.content.content;

    return (
      <div class={this.props.position}>
        <h1>{title}</h1>

        <ul>
          {this.renderList(body)}       
        </ul>
      </div>
    );
  }
}
 

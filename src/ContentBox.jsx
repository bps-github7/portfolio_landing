import React, { Component } from 'react';

export default class ContentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  renderListBetter(objList) {
    //for an improved version of below messy function 
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

/* you know it would be cooler + smarter to do this recursively:
define a fn that takes a {title : string, content : string []} 
and renders it, then call it from within itself, if the item being looped over has
objects as its items, 
 */

    if(complexObjects) {
      for (let subheading of complexObjects) {
        display.push(
          <li>
            <h4 class="dd-trigger">{subheading.title}</h4>
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
    const title = this.props.content.title?this.props.content.title: "title";
    const body = this.props.content.content?this.props.content.content: "body";

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
 

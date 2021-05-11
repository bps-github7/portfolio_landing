import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import InfoColumn from './InfoColumn';

export default class InfoPanelSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : 'intro'
      }
  }
  render() {
    return (
      <div>
      <CSSTransition 
        in={this.state.selected === 'intro'} 
        unmountOnExit 
        timeout={100}
        classNames="menu-primary">
        <div className="menu" >
          A skonilione pinecone but a pone it a bone so a host is a phone <br /> use your child as a waffle cone machine in a dog fight          
        </div>
      </CSSTransition>

      <CSSTransition 
        in={this.state.selected === 'excersise'} 
        unmountOnExit 
        timeout={100}
        classNames="menu-second">
        <div className="menu" >
          <InfoColumn title={this.state.selected} contents={this.props.contents[this.state.selected]} />
        </div>
      </CSSTransition>

      <CSSTransition 
        in={this.state.selected === 'creativity'} 
        unmountOnExit 
        timeout={100}
        classNames="menu-second">
        <div className="menu" >
          <InfoColumn title={this.state.selected} contents={this.props.contents[this.state.selected]} />
        </div>
      </CSSTransition>
 
      <CSSTransition 
        in={this.state.selected === 'sustainability'} 
        unmountOnExit 
        timeout={100}
        classNames="menu-second">
        <div className="menu" >
          <InfoColumn title={this.state.selected} contents={this.props.contents[this.state.selected]} />
        </div>
      </CSSTransition> 


        <div class="button-panel">
          { Object.keys(this.props.contents).map((item) => (
            <button onClick={() => this.setState({selected : item})}>{item}</button>
          )) }                  
        </div>
      </div>
    );
  }
}
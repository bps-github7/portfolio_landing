import { Component } from 'react';
import InfoColumn from './InfoColumn';
import { CSSTransition } from 'react-transition-group';

export default class RowDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false 
    }
  }
  toggleOpen = () => {
    this.setState({
      open : !this.state.open
    })
  }


  render() { 
    return (
      <div className="app-row-dropdown">
        {
          this.state.open ?
          // <span>Open</span> : <span>Closed <button onClick={this.toggleOpen}>open?</button></span>
          <OpenRow title={this.props.title} contents={this.props.contents} toggleOpen={this.toggleOpen}/>:         
          <ClosedRow title={this.props.title} toggleOpen={this.toggleOpen}/>
        }
      </div>
    
    );
  }
}

const ClosedRow = (props) => {
  return(
    <div className="app-closed-row">
      <h4>
        { props.title }
      </h4>
       
      <button onClick={props.toggleOpen}>Examine</button>
    </div>
  )
}

const OpenRow = (props) => {
  return (
    <div className="app-open-row" style={{display: "grid", "gridTemplateColumns" : "1fr 1fr 1fr" }}>
      { Object.keys(props.contents).map((title, i) => (
        <InfoColumn key={i} title={title} contents={props.contents[title]}/>
      )) }
      <button onClick={props.toggleOpen}>Hide</button> 
    </div>
  )
}
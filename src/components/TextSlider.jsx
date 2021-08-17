// import React, { Component } from 'react';
import {useState} from 'react';


const TextSlider = ({items}) => {
	const [ index, setIndex ] = useState(0);

	const handleNext = (event) => {
		event.stopPropagation();
    (index === items.length -1) ? setIndex(0) : setIndex(index + 1);
	}

	const handlePrevious = (event) => {
		event.stopPropagation();
    (index === 0) ? setIndex(items.length -1) : setIndex(index - 1); 
	}

	return(
		<section className="slider text">
			{/* 
				this makes it a little dynamic- if items is an array of strings
				just render the string, otherwise item is object, so render its
				individual properties (has type {title <string>, description <string>})
			*/}
			{ 
				items[index]?.title ?
				<h3>{items[index].title}</h3> :
				<h3>{items[index]}</h3>	
			}
			{ 
				items[index]?.description ? 
				<p>{items[index].description}</p> :
				null
			}
			<button className="btn" onClick={handlePrevious}>Previous</button>
			<button className="btn" onClick={handleNext}>Next</button>
		</section>
	)


}
export default TextSlider;
 
// export default class TextSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index : 0
//     }
//   }
//   handleNext = () => { 
//     (this.state.index === this.props.content.length - 1) ?
//     this.setState({index : 0}):
//     this.setState({index : this.state.index + 1})
//   }

//   handlePrevious = () => {
//     (this.state.index === 0)?
//     this.setState({index : this.props.content.length - 1}):
//     this.setState({index : this.state.index -1})
//   }

//   render() { 
//     return (
//       <div className="App-slider">
//         <p><strong>{ this.props.content[this.state.index] }</strong></p>
//         <button className="btn" onClick={this.handlePrevious}>previous</button>
//         <button className="btn" onClick={this.handleNext}>next</button>
//       </div>  
//     );
//   }
// }
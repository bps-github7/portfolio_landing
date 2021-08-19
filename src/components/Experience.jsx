import { Component } from 'react';
import firebase from '../services/firebase';



export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
			loading : false,
			docs : [],
			selected : null
		}; 
  }

	componentDidMount() {
		const ref = firebase.firestore().collection("workExperience");
		this.setState({ loading : true});
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			// TODO: what if api call isnt done by the time 400ms runs out? should be doing this in an async fn 
			setTimeout(() => {
				this.setState({
					loading : false,
					docs : items,
				})
			},400)
			
		});
	}

	handleSetSelected = (doc) => {
		this.setState({
			selected : doc
		})
	}

  render() {
		const {docs, loading, selected} = this.state

		// if (this.state.loading) {
		// 	return(
		// 		section
		// 		<span>Loading...</span>
		// 	)
		// }
		
    return (
      <section className="panel">
        <h1>Experience</h1>
				{ loading ? <span>Loading...</span> :
				<section className="experience">
					<ExperienceBrowser docs={docs} setSelected={this.handleSetSelected}/>
					{ selected ? <ExperienceTile position={selected}/>:<p>Select a option from below to learn more about my work experience</p>}
				</section>
				}
      </section>
    );
  }
}

const ExperienceBrowser = ({docs, setSelected}) => {
	// const [ selected,setSelected ] = useState({})

	return(
		<ul>
			{ docs.map((job, i) => (
						<li key={i}>
							<button class="btn" onClick={() => setSelected(docs[i])}>
								{job.company}
							</button>
						</li>
					)
				)   
			}
		</ul>
	)

}

const ExperienceTile = ({ position }) => {
  return (
    // maybe want to conditionally render a class if job is current position
    <section>
      
      <h2>{ position.company }</h2>
      <section>
       <div>
        <strong>Employed:</strong> {position.employed} <br />
        <strong>Supervisor:</strong> {position.supervisor}  <br />
				<strong>Location:</strong> {position.location} <br />
			</div>
			{  
				Object.keys(position.duties).map((job, i) => (
					<PositionListing position={job} duties={position.duties[job]}/>
				))
			}

      {/* { 
        Object.keys(position.duties).length === 1 
        ? <SingleListRender duties={position.duties}/> 
        : (position.duties.map((item, i) => <SingleListRender duties={item}/>))
				
      } */}
      </section>
    </section>
  );
}

const PositionListing = ({position, duties}) => {
/* for displaying a list where I worked only a single
  position with company */

  return(
    <div>
      <h3>
        { position }
      </h3>
      <ul>
        {duties.map((item, i) => <li key={i}>{item}</li>)}
      </ul>   
    </div>
    
  )
}
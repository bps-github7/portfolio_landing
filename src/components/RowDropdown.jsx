import { useState } from 'react';
import TextSlider from './TextSlider';


const RowDropdown = (props) => {
	/* 
Top layer of the data hirearchy UI for skills & about pages.
a row with a label and button to examine. presing button unfolds a nested list. 
	*/


	const [ open, setOpen ] = useState(false)
	
	const toggleOpen = () => {
		setOpen(!open);
	}
  

		return (
			<section className="row-dd">
        <ClosedRow title={props.title} details={props.contents.details} isOpen={open} toggleOpen={toggleOpen}/>
				{
          open ?
					<OpenRow title={props.title} contents={props.contents.content}/>:         
          null
				}
			</section>
			
			);
}

export default RowDropdown;



const ClosedRow = (props) => {
	// add some resilency incase no details are passed in.
  if (!props.details) {
    return(
      <section className="closed-row closed-row-concepts">
        <h2>{props.title}</h2>
        <button className="btn" onClick={props.toggleOpen}>
          {
            props.isOpen ? 
            "hide" :
            "examine"
          }
        </button>
      </section>
    )
  }
  return(
		<section className="closed-row">
			<h2>{ props.title }</h2>
      <h3>{ props.details.subheading }</h3>
       {/* Render a body, if there is one  */}
      { props.details.body ? <p>{props.details.body}</p> : null}
			<button className="btn" onClick={props.toggleOpen}>
        {
          props.isOpen ? 
          "hide" :
          "examine"
        }
      </button>
		</section>
	)
}

const OpenRow = (props) => {
  if (props.title === "concepts" || props.title === "sustainability") {
		return (
			<section className="concepts-open-row">
				{/* <p>{ props.contents.intro }</p> */}
				<TextSlider items={props.contents}/>
				{/* <p>{ props.contents }</p> */}
			</section>
		)
    
	}
	return (
		<section className="open-row"> 
			{ Object.keys(props.contents).map((title, i) => (
        <InfoColumn key={i} title={title} contents={props.contents[title]}/>
			)) }
      {/* Having this is a nicity, not something we should be spending loads of time on */}
      {/* <button onClick={() => {}}>Close all columns</button> */}
    </section>
	)
}

const InfoColumn = (props) => {
	if (props.title === "cooking" || props.title === "art") {
    return (
      <section className="info-col">
        <h2 className="info-col-header">{ props.title}</h2>
        <ul>
          { 
            Object.keys(props.contents).map((item, i) => (
                <ImgDropdown key={i} title={item} contents={props.contents[item]} />
              ) 
            ) 
          }
        </ul>
      </section>
    ) 
  }
  
  return (
		<section className="info-col">
			<h2 className="info-col-header">{ props.title}</h2>
			<ul>
				{ 
					Object.keys(props.contents).map((item, i) => (
							<ColumnDropdown title={item} contents={props.contents[item]} key={i} />
						) 
					) 
				}
			</ul>
		</section>
	);
}

const ImgDropdown = (props) => {
  const [open, setOpen] = useState(false);
  
  return (
		<section className="col-dd">
			<h3 className="dd-trigger"
        onClick={() => {setOpen(!open)}}
      >
        {props.title}
      </h3> 
      {
        open ?
        <ul className="dd-col">
          { Object.keys(props.contents).map((title, i) => 
              (
                // this is the end of the data hierarchy 
                // <li key={i}>{title}</li>
                <ImageView key={i} title={title} contents={props.contents[title]} />
              )
            ) 
          }
        </ul>
        :
        null
      }
		</section>
  )
}

const ImageView = (props) => {
  if (props.contents) {
    return(
      <div>
        <strong>{props.title}</strong><br />
        <img src={props.contents} style={{height: 100, width: 100}} alt="" />
      </div>
    )
  }
  return (null) 
  
}

const ColumnDropdown = (props) => {
	const [open, setOpen] = useState(false);
  
  return (
		<section className="col-dd">
			<h3 className="dd-trigger"
        onClick={() => {setOpen(!open)}}
      >
        {props.title}
      </h3> 
      {
        open ?
        <ul className="dd-col">
          { Object.keys(props.contents).map((title, i) => 
              (
                // this is the end of the data hierarchy 
                <ItemView key={i} item={title} value={props.contents[title]}/>
              )
            ) 
          }
        </ul>
        :
        null
      }
		</section>
		);
}

const ItemView = (props) => {
  if (typeof(props.value) === "string") {
    return(
      <li className="item plain-text" key={props.id}> 
        <strong>{ props.item }: </strong>
        { props.value }
      </li>
    )
  }
  else if (typeof(props.value) === "number") {
    return (
      <li className="item slider" key={props.id}>
        {/* <strong>{ props.item }: </strong>
        <input className="slider" disabled type="range" max={5} value={props.value}/>     
        <span className="alt-text">{props.value}</span> */}
        <strong>{ props.item }: </strong>
        
        {/* wrote our own custom slider to avoid browser support complications */}
        <div 
          onClick={() => {
            alert(`${props.item} : ${props.value}`)
          }}
          className="slider body"
          style={{ width:"100%", height:"3rem", border: "4px groove grey" }}>
          <div
            className="slider value"
            style={{
              width: `${(props.value * 20)}%`,
              height: "100%",
              background: "#36ffd0",
              opacity: ".3"
            }}
          >
          </div>
        </div>        

      </li>
    )
  }
}
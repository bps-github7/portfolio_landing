import React, { Component, useState } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      avatarUrl : ""
     }
  }
  async componentDidMount() {
    const url = "https://api.github.com/users/bps-github7";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ avatarUrl: data.avatar_url, loading : false })
  }



  render() { 
    return (
      <section>
        <h1>Who am I?</h1>
        {  
          this.state.loading || !this.state.avatarUrl ?
          <span>Loading...</span>:
					// says 'digital portrait' because html complains if you say 'image' or 'photo' in the alt attribute
          <img alt="a digital portrait of me face" src={this.state.avatarUrl}/> 

        }
        <h3>Ben Sehnert</h3>
        <p>
          <em>A Full Stack, system oriented Software Developer, local to Philadelphia. </em>
          I graduated with my Masters of Science in Information Systems last june. 
          I'm looking for work in web development, help-desk, general system developement, UI/Ux design, QA engineering and more,
          in sectors not limited to education, non profit, government and regenerative agricultural. <br /><br />
          If you think I would be a good match for an open position, your company, or can connect me to someone who can help me in my job search:  <br />
          <strong>
            please do not hesitate to <Link to="/contact">get in touch!</Link> <br /><br />
          </strong>
        </p>

        <h5>Getting aroung:</h5>
				<p>
					Examine the below widget for a quick glance at my professional competncies and other candidate info.
					Use the above navigation menu to examine each topic in depth.
				</p>
				<HomeWidget/>
        {/* <ol>
          <li>Learn more about <Link to="/skills">my technical and job related skills</Link></li>
          <li>Learn more about <Link to="/projects"> my projects</Link></li>
          <li>Learn more about <Link to="/experience">my previous work experience</Link></li>
          <li>Learn more about <Link to="/about">me </Link></li>
        </ol>           */}
      </section>
    );
  }



}

const HomeWidget = () => {
	const [opened, setOpened ] = useState(false);


	if (!opened) {
		return(
			<button onClick={() => (setOpened(true))}>Show Widget</button>
		)
	}

	return(
		<section class="home widget">
			<WidgetCarousel/>						
			<button onClick={() => (setOpened(false))}>Hide widget</button>
		</section>
	)

}

const WidgetCarousel = () => {
	const [index, setIndex ] = useState(0);
	const items = [
		{
			title : "Technical Skills",
			description : "Python, C family, Java, full stack web development with HTML, CSS, ECMAscript and a variety of front and back end web frameworks, databases and development utilities"
		},
		{
			title : "Work Experience",
			description : "Mainly customer service concentrated in food service and security, accompanied by office work in Human Resources, Management, data entry and general assisant. In terms of non work expereince based, career related endeavors, Ive aquired skills in Leadership, Survival Skills, first aid/ CPR and more"
		},
		{
			title : "About Me",
			description : "Passionate self starter with interests in music, fitness, cooking and sustainability. I've taught myself to play eight instruments, have two dedicated composting bins in my backyard and a sourdough starter that is seven months old and growing."
		},
		{
			title : "Professional Goals",
			description : "Comptia A+ certified by March 2022, team or project leader by 2028, with hopes of entering a position entailing Research, system design/ adminstration or Education."
		},
		{ 
			title : "Contact Me",
			description : "emailing me at my dedicated professional email address is the best way to get in touch. Learn more on the Contact page. I look forward to hearing from you and learning about potential career opprotunities with your company!"
		}
	]

	const handleNext = (e) => {
    e.stopPropagation();
    (index === items.length -1) ? setIndex(0) : setIndex(index + 1);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    (index === 0) ? setIndex(items.length -1) : setIndex(index - 1); 
  }
	

	return(
		<section>
			<h3>{ items[index].title }</h3>
			<p>
				{ items[index].description }
			</p>

			<button onClick={handlePrevious}>Previous</button>
			<button onClick={handleNext}>Next</button>


		</section>
	)


}

export default Home;
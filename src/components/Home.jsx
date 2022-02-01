import React, { Component, useState } from 'react';

import { Link } from 'react-router-dom';
import TextSlider from './TextSlider';

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
      <section className="panel">
				<section className="intro">
					<h1>Who am I?</h1>
					{  
						this.state.loading || !this.state.avatarUrl ?
						<span>Loading...</span>:
						// says 'digital portrait' because html complains if you say 'image' or 'photo' in the alt attribute
						<img class="default-view" alt="self portrait/ avatar" src={this.state.avatarUrl}/> 

					}
					<h3>Ben Sehnert</h3>
				</section>
				
        <p>
          <em>A Full Stack, system oriented Software Developer, local to Philadelphia. </em>
          I graduated with my Masters of Science in Information Systems in June 2020.
          I'm looking for work in web development, UI/Ux design, QA engineering and software engineering generaly,
          in sectors not limited to education, non profit, government and regenerative agricultural. <br /><br />
          If you think I would be a good match for an open position, your company, or can connect me to someone who can help me in my job search:  <br />
          <strong>
            please do not hesitate to <Link to="/contact">get in touch!</Link> <br /><br />
          </strong>
        </p>

        <h5>Getting Around:</h5>
				<p>
					Examine the below widget for a quick glance at my professional competencies and other candidate info.
					Use the above navigation menu to examine each topic in depth.
				</p>
				<HomeWidget/>
      </section>
    );
  }



}

const HomeWidget = () => {
	const [opened, setOpened ] = useState(false);
	const widgetItems = [
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
			description : "Emailing me at my dedicated professional email address is the best way to get in touch. Learn more on the Contact page. I look forward to hearing from you and learning about potential career opprotunities with your company!"
		}
	]


	if (!opened) {
		return(
			<button class="btn" onClick={() => (setOpened(true))}>Show Widget</button>
		)
	}

	return(
		<section className="home widget">
			<TextSlider items={widgetItems}/>						
			<button class="btn" onClick={() => (setOpened(false))}>Hide widget</button>
		</section>
	)

}

export default Home;
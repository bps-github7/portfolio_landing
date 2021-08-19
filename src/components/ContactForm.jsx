import React, { Component } from 'react';
class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			showForm : false,
			name : '',
			title : '',
			contactMethod : '',
			contact : '',
			body : '',
			company : '',
			position : ''
		}
	}


// TODO: need global validation- disable the button until required fields are filled and nothing is invalid.


	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
	}

	handleChange = event => {
		const isCheckbox = event.target.type === "checkbox";
		this.setState({
			[event.target.name] : isCheckbox
				? event.target.checked
				: event.target.value
		})
	}

	contactMethods = ['phone','email','private message (linkedin, slack)'] 
	titleOptions = ['sir', "ma'am", "your name"];

	render() {
		const {showForm} = this.state;

		return(
			<section>
				<button onClick={() => this.setState({ showForm : !showForm })} class="btn">
					{ showForm ? "hide this form" : "Ask me to reach out" }
				</button>

				{ showForm && (
					<form onSubmit={this.handleSubmit}>
						<div>
							<label htmlFor="name">Name:</label>
							<input 
								onChange={this.handleChange}
								placeholder="your name" 
								type="text" 
								name="name"/>
						</div>

						<div>
							<label htmlFor="title">How should I Address you?</label>
							{
								this.titleOptions.map((title, i) => (
									<span key={i}> 
										<input 
											onChange={this.handleChange}
											type="radio" 
											name="title" 
											value={title} 
										/>{title}	
									</span>	
								))
							}
						
						</div>
						
						<div>
							<label htmlFor="contactMethod">How should I contact you?</label>
							{this.contactMethods.map((method, i) => (
								<span key={i}> 
									<input 
										onChange={this.handleChange}
										type="radio" 
										name="contactMethod" 
										value={method} 
									/>{method}
								</span>))
							}
						</div>

						{ 
							this.state.contactMethod && 
							<div>
								validate input for phone, email etc
							</div>
						}

						<div>
							<label htmlFor="message body">(*optional) message body:</label>
							<textarea onChange={this.handleChange} name="body" id="" cols="30" rows="10"></textarea>
						</div>

						<div>
							<label htmlFor="company">(*optional) name of the company looking to hire:</label>
							<input onChange={this.handleChange} name="company" id=""/>		
						</div>

						<div>
							<label htmlFor="position">(*optional) your position at company (ie. HR hiring manager, director of technology, team leader):</label>
							<input onChange={this.handleChange} name="position" id=""/>
							<span>Note: helps me get cover letter through hr, network, learn about the position</span>						
						</div>						

						<button className="btn" type="submit">submit</button>						
					</form>					
					) }
			</section>
		);
	}
}
 
export default ContactForm;
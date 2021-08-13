import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { BrowserHistory } from 'react-router'


const Nav = () =>  {

	const items = ["skills", "projects", "experience", "about", "contact"];
	const isMobile = useMediaQuery({ query: `(max-width: 700px)` });
	const [ menuOpen, setMenuOpen ] = useState(null);


	// a start- if we can change the input state like this, it wont piss react off. but we need a way to give the input checked event to a child element to trigger this when we change url
	const handleCheck = (e) => {
		if (e.target.checked) {
			console.log("checked the jawn!")

			e.target.checked = false;
		} else {
			console.log("unchecked the jawn")
		}
	}

	// this doesnt work, because react doesnt like input value changing from value to false.
	const toggleMenu = (e) => {
		if (e) {e.preventDefault();}
		setTimeout(() =>{
			setMenuOpen(false);
		},400)
		setMenuOpen(null)
		
	}


	return (
		<header>
			<Link to="/home">
				<h3 class="logo">
					Ben Sehnert
				</h3>
			</Link>
			
			<input 
				type="checkbox" 
				class="nav-toggle"
				id="nav-toggle"
				onChange={handleCheck}
				/>
			<nav>
				<ul>
					{ items.map((item, i ) => 
						<NavItem 
							title={item} 
							key={i} 
							/>					
					) }
				</ul>
			</nav>
			<label for="nav-toggle" class="nav-toggle-label">
				<span></span>
			</label>
			<button onClick={() => toggleMenu()}>Disable jawn!</button>
		</header>   
			)
}
	


const NavItem = (props) => {
  return(
    <li>
      <Link to={props.title}>{ props.title }</Link>
    </li>
  )
}

export default Nav
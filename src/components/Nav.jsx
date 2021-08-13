import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { BrowserHistory } from 'react-router'


const Nav = () =>  {

	const items = ["skills", "projects", "experience", "about", "contact"];
	const isMobile = useMediaQuery({ query: `(max-width: 700px)` });
	const [ menuOpen, setMenuOpen ] = useState(true);

	const toggleMenu = (e) => {
		if (e) {e.preventDefault();}
		/* if screen size is mobile, change menu to closed when a link is clicked */
		if (isMobile) {
			console.log("doing a thing! cuz its mobile sawn")
			setMenuOpen(false)
		}
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
				// checked={menuOpen}
				/>
			<nav>
				<ul>
					{ items.map((item, i ) => 
						<NavItem 
							title={item} 
							key={i} 
							// onClick={toggleMenu()}
							/>					
					) }
				</ul>
			</nav>
			<label for="nav-toggle" class="nav-toggle-label">
				<span></span>
			</label>
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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { BrowserHistory } from 'react-router'


const Nav = () =>  {

	const items = ["skills", "projects", "experience", "about", "contact"];
	const isMobile = useMediaQuery({ query: `(max-width: 700px)` });
	const [ menuOpen, setMenuOpen ] = useState(false);

	const Navigation = () => {
		return(
			<ul>
				{ 
					items.map(
						(item, key) => (
							<li>
								<Link to={item}>{item}</Link>
							</li>
						)
					) 
				}
			</ul>
		)
	}

	const MobileDropdown = () => {
		const handleChecked = (e) => {
			if (e.target.checked) {
				setMenuOpen(true);
				// console.log("this happeed")
			}
		}

		return(
			<nav>
				<input 
					type="checkbox"
					class="nav-toggle"
					id="nav-toggle"
					onChange={(change) => handleChecked(change)}
					
					/>
				{ menuOpen && <Navigation/> }
			</nav>			
		)
	}

	return(
		<header>
			<h3 class="logo">
				<Link to="/home">
					Ben Sehnert
				</Link>
			</h3>
			{ isMobile ?
				<MobileDropdown/>	:
				<Navigation/>					
			}
			<label for="nav-toggle" class="nav-toggle-label">
				<span></span>
			</label>
		</header>
		
		)
}
	




export default Nav
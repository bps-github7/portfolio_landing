import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { BrowserHistory } from 'react-router'


const Nav = () =>  {

	const items = ["skills", "projects", "experience", "about", "contact"];
	const isMobile = useMediaQuery({ query: `(max-width: 700px)` });
	const [ menuOpen, setMenuOpen ] = useState(null);


	const handleCheck = (e) => {
		setTimeout(() => {
			setMenuOpen(false)
		},100)
		setMenuOpen(true)
		// if (e.target.checked) {
		// 	setMenuOpen(false);
		// } else {
		// 	setMenuOpen(true);
		// }
	}

	const Dropdown = ({close}) => {
		const NavItem = (props) => {
			return(
				<li>
					<Link to={props.title} onClick={close}>{ props.title }</Link>
				</li>
			)
		}

		return(
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
		)
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
				onCheck={() => setMenuOpen(!menuOpen)}
				checked={menuOpen}
			/>
			{/* <button onClick={() => setMenuOpen(prev => !prev)}>toggle dropdown</button> */}
			<Dropdown close={() => handleCheck}/>
			<label htmlFor="nav-toggle" class="nav-toggle-label">
				<span></span>
			</label>
		</header>   
			)
}
	




export default Nav
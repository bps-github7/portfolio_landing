import React, { useState }  from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


const Nav = () => {

	// A responsive navbar with two views, in mobile and 50% desktop view it turns into a toggleable dropdown.
	// Implementation is highly css dependent (see ../styles/nav.scss). the only real JS we need is
	// to change input.checked value dynamically, so dropdown closes on route change.
	
	const options = ['skills', 'projects', 'experience', 'about', 'contact' ];

	const [ isChecked, setIsChecked ] = useState(false);

	
	return (
    <header>
      {/* thats my name! */}
      <Link to="/home">
        <h3 class="logo">
          Ben Sehnert
        </h3>      
      </Link>
      <input checked={isChecked} onChange={() => setIsChecked(prev => !prev)} type="checkbox" class="nav-toggle" id="nav-toggle"/>
      <nav>
        <ul>
					{ options.map((item, i) => <NavItem handleClick={() => setIsChecked(false)} title={item} key={i}/>) }
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
}

export default Nav;

const NavItem = ({ title, handleClick }) => {
	
	return(
    <li onClick={handleClick}>
      <Link to={title}>{ title }</Link>
    </li>
  )
}
import React, { useState }  from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {

	// A responsive navbar with two views, in mobile and 50% desktop view it turns into a toggleable dropdown.
	// Implementation is highly css dependent (see ../styles/nav.scss). the only real JS we need is
	// to change input.checked value dynamically, so dropdown closes on route change.
	
	// const options = ['skills', 'projects', 'experience', 'about', 'contact' ];
	const options = ['projects','experience','contact'];
	const [ isChecked, setIsChecked ] = useState(false);

	
	return (
    <header>
      {/* thats my name! */}
      <Link to="/home">
        <h3 className="logo">
          Ben Sehnert
        </h3>      
      </Link>
      <input checked={isChecked} onChange={() => setIsChecked(prev => !prev)} type="checkbox" className="nav-toggle" id="nav-toggle"/>
      <nav>
        <ul>
					{ options.map((item, i) => <NavItem handleClick={() => setIsChecked(false)} title={item} key={i}/>) }
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
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
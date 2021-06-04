import React  from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    
  

  return (
    <header>
      {/* thats my name! */}
      <Link to="/home">
        <h3 class="logo">
          Ben Sehnert
        </h3>
      
      </Link>
      
      {/* possible to make nav mobile responsive w/o js */}
      <input type="checkbox" class="nav-toggle" id="nav-toggle"/>
      <nav>
        <ul>
          <NavItem title="skills"/>
          <NavItem title="projects"/>
          <NavItem title="experience"/>
          <NavItem title="about"/>
          <NavItem title="contact"/>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
}

export default Nav;

const NavItem = (props) => {
  return(
    <li>
      <Link to={props.title}>{ props.title }</Link>
    </li>
  )
}
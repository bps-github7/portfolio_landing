import React, { Component } from 'react';
import { useState } from 'react';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
// import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg'
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { CSSTransition } from 'react-transition-group';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return (
      <NavBar>
        <TitleItem url='/home' title="Ben Sehnert"/>
        <NavItem icon={<BoltIcon />} url="/about"/>
        <NavItem icon={<CogIcon />} url="/skills"/>
        <NavItem icon={<MessengerIcon/>} url='/contact'/>
        <NavItem icon={<PlusIcon/>} url='/experience'/>
        <DropDownNavItem icon={<CaretIcon/>} url='/projects'>
          <DropdownMenu/>
        </DropDownNavItem> 
      </NavBar>      
    );
  }
} 


const TitleItem = props => {
  return (
    // Want this to be a link, but also have tool tip for quick info access- email, phone, more about me
    <h1 style={{paddingRight : "800px", color: "white"}}>
      <a href={props.url}>
        { props.title }
      </a>
    </h1>
  );
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');

  function DropdownItem(props) {
      return (
      <a href={props.url} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)} >
          <span className="icon-button">{ props.leftIcon }</span>
          { props.children }
          <span className="icon-right">{ props.rightIcon }</span>
      </a>
      );
  }

  return (
      <div className="dropdown">
          <CSSTransition 
              in={activeMenu === 'main'} 
              unmountOnExit 
              timeout={500}
              classNames="menu-primary">
                  <div className="menu" >
                      
                      {/* TODO: make this a sub-dropdown, it appears below vertically and lists projects like
                      -IVDB
                      -ProgrammingBlog
                      -Oral History
                      -Cookin */}
                      <DropdownItem
                      leftIcon={ <CaretIcon/> }
                      
                      >Front end</DropdownItem>
                      <DropdownItem
                          leftIcon={ <CogIcon/> }
                          rightIcon={ <ChevronIcon/> }
                          goToMenu="backend">
                          Back end
                      </DropdownItem>
                  </div>
          </CSSTransition>
      
          <CSSTransition 
              in={activeMenu === 'backend'} 
              unmountOnExit 
              timeout={500}
              classNames="menu-secondary">
                  <div className="menu" >
                      <DropdownItem
                          leftIcon={ <ChevronIcon/> }
                          goToMenu="main"
                      />
                      <DropdownItem
                          leftIcon={ <CogIcon/> }
                          rightIcon={ <ChevronIcon/> }
                          >
                          Here some Rest APIs i made
                      </DropdownItem>
                  </div>
          </CSSTransition>

      </div>
  );
}


function NavBar(props) {
  return (
      <nav className="navbar">
          <ul className="navbar-nav">
              { props.children }
          </ul>
      </nav>
  );
}

const NavItem = (props) => {
  return (
      <li className="nav-item">
          <a href={props.url} className="icon-button">
              { props.icon }
          </a>
  
      </li>
  );

}

const DropDownNavItem = (props) => {
  const [open, setOpen] = useState(false);

  return ( 
      <li className="nav-item">
          <a className="icon-button" onClick={() => setOpen(!open)}>
              { props.icon }
          </a>
          { open && props.children }

      </li>
  );
}
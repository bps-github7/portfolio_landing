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

  //suggest export to a class based component so you dont have to make all these menus into local functional conponents. sort of messy. sort of no big deal yeah?

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
          <DropdownItem
            leftIcon={ <CaretIcon/> }
            goToMenu="frontend"> 
            Front-end Projects
          </DropdownItem>
          <DropdownItem
            leftIcon={ <CogIcon/> }
            rightIcon={ <ChevronIcon/> }
            goToMenu="backend">
            Back-end Projects
          </DropdownItem>
          <DropdownItem
            leftIcon={ <PlusIcon/> }
            rightIcon={ <ChevronIcon/> }
            goToMenu="testing">
            Testing
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'frontend'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-second">
        <div className="menu" >
          <DropdownItem
            leftIcon={ <ChevronIcon/> }
            goToMenu="main">
            Go back
          </DropdownItem>
          <DropdownItem
            leftIcon={ <CogIcon/> }>
            Internet Videogame Database
          </DropdownItem>
          <DropdownItem
            leftIcon={ <MessengerIcon/> }
            rightIcon={ <ChevronIcon/> }>
            Oral History Blog 
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'backend'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-third">
        <div className="menu" >
          <DropdownItem
            leftIcon={ <ChevronIcon/> }
            goToMenu="main">
            Go back
          </DropdownItem>
          <DropdownItem
            leftIcon={ <CogIcon/> }
            rightIcon={ <ChevronIcon/> }>
            .Net + MSSQL REST api 
          </DropdownItem>
          <DropdownItem
            leftIcon={ <BoltIcon/> }>
            Java Spring + PSQL REST api 
          </DropdownItem>
        </div>
      </CSSTransition>
 
      <CSSTransition 
        in={activeMenu === 'testing'} 
        unmountOnExit 
        timeout={500}
        classNames="menu-fourth">
        <div className="menu" >
          <DropdownItem
            leftIcon={ <ChevronIcon/> }
            goToMenu="main">
            Go back
          </DropdownItem>
          <DropdownItem
            leftIcon={ <CogIcon/> }
            rightIcon={ <ChevronIcon/> }>
            Complex number calculator 
          </DropdownItem>
          <DropdownItem
            leftIcon={ <BoltIcon/> }>
            Binary Conversion Calculator
          </DropdownItem>
          <DropdownItem
            leftIcon={ <BoltIcon/> }>
            Chess Move Generator 
          </DropdownItem>
          <DropdownItem
            leftIcon={ <BoltIcon/> }>
            MS-test example unit tests 
          </DropdownItem>
          <DropdownItem
            leftIcon={ <BoltIcon/> }>
            N-unit example unit tests 
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
  /* Why did u need to make 3 seperate components? maybe unnesseceary! */
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
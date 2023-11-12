import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';



const Navbar = () =>{
    return(
        <nav className='navHeader'>
          <h2>Dheeraj Gavini Portfolio</h2>
          <div className='navOptions'>
            <Link activeClass="active" to="Introduction" spy={true} smooth="true" offset={-80} duration={500} className="HeaderMenu">Home</Link>
            <Link activeClass="active" to="About" spy={true} smooth="true" offset={-80} duration={500} className="HeaderMenu">About</Link>
            <Link activeClass="active" to="Skills" spy={true} smooth="true" offset={-80} duration={500} className="HeaderMenu">Skills</Link>
            <Link activeClass="active" to="Experience" spy={true} smooth="true" offset={-80} duration={500} className="HeaderMenu">Experience</Link>
          </div>
        </nav>
    )
}
export default Navbar;
import React, {Component} from 'react';
import './Nav.css';
// import About from './About';
// import Contact from './Contact';
// import Portfolio from './Portfolio';


class Nav extends Component {
  
  render() {
    return(
        
        <div>
          <div id="nameheader">
            <h1><a id='myname' href="/">John Connolly</a></h1>
          </div>
          <div id='navlistholder'>
            <ul className="NavList">
              <li className='NavListItem'><a href="/about">About Me</a></li>
              {/* <li className='NavListItem'><a href="/portfolio">Portfolio</a></li> */}
              {/* <li className='NavListItem'><a href="/contact">Contact</a></li> */}
            </ul>
          </div>
        </div>
      
    )
  }
}

export default Nav;
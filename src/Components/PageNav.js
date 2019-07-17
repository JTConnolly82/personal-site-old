import React, {Component} from 'react';
import './PageNav.css';
// import About from './About';
// import Contact from './Contact';
// import Portfolio from './Portfolio';


class PageNav extends Component {
  
  render() {
    return(
        
        <div className="NavTainer">
          <div id="nameheaderpage">
            <h1><a id='mynamepage' href="/">John Connolly</a></h1>
          </div>
          <div id='navlistholderpage'>
            <ul className="NavListpage">
              <li className='NavListItempage'><a href="/about">About</a></li>
              {/* <li className='NavListItem'><a href="/portfolio">Portfolio</a></li> */}
              <li className='NavListItempage'><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      
    )
  }
}

export default PageNav;
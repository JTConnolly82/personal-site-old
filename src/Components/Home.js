import React, {Component} from 'react';
import './Home.css';
import Nav from './Nav';
import Social from './Social';




class Home extends Component {
  render() {
    return(
        <div class="row">
          <div className='column1'>
              <Nav />
            
              <Social />
          </div>
          <div className='column2'>
            <img id="image" src="https://imgur.com/myLuOXN.jpg" alt="collage" />
          </div>
          </div>
    )
  }
}

export default Home;
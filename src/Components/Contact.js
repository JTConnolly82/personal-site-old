import React, {Component} from 'react';
import PageNav from './PageNav';
import Social from './Social';





class Contact extends Component {
  render() {
    return(
      <div id="page">
        <PageNav />
        <div id="article">
          <h3>I can be reached by email at jtconnolly82@gmail.com.  You might also
            run into me at some of my favorite places around Salt Lake City:
          </h3>
        </div>
        <div id="article">
            <h3>
              <a id="minilink" target="_blank" href="https://solitudemountain.com/">Solitude Mountain</a><br/>
            </h3>
            <h3>
              <a id="minilink" target="_blank" href="https://www.trailforks.com/region/corner-canyon/?activitytype=1&z=11.3&lat=40.49896&lon=-111.84831">Corner Canyon</a><br/>
            </h3>
            <h3>
              <a id="minilink"  target="_blank" href="https://www.trailforks.com/region/park-city/">Park City</a><br/>
            </h3>
            <h3 id="location">
              <a id="minilink"  target="_blank" href="https://www.alta.com/">Alta</a><br/>
            </h3>
        </div>
        
      </div>
    )
  }
}

export default Contact;
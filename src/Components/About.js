import React, {Component} from 'react';
import PageNav from './PageNav';
import "./pages.css";

class About extends Component {
  constructor(){
    super();
    this.state = {render: ''};
  }
  handleClick(resDisplay, e){
    if (this.state.render === '') {
      console.log(resDisplay);
    this.setState({render:resDisplay}); 
    } else {
      this.setState({render:''});
    }     
}
  _renderRes(){
    switch(this.state.render){
        case 'revealres': return <Resume/>
    }
  }
  render() {
    return(
      <div id="page">
        <PageNav id="nav"/>
        <div id="article">
          <h3>I’m originally from Pittsburgh, PA and currently living in Salt 
            Lake City, Utah.  A graduate of the University of Colorado in 
            2013 and  recently, DevPoint Labs’ Full-Stack development course 
            as of Februrary 2019.  
            Prior to entering software development I worked at Tesla, where 
            I managed relationships with utility companies and devised 
            interconnection strategies and guidelines for solar and energy 
            storage projects.  I’m currently seeking a role in software 
            development.  More about my experience and background can be found in
            my resume, <a id="minilink" onClick={this.handleClick.bind(this, 'revealres')} href="#">here</a>.
            When not working I love exploring Salt Lake City's nearby mountains.
            </h3>
            {this._renderRes()}
        </div>
      </div>
    )
  }
}

class Resume extends Component {
  render() {
    return(
      <div id="resumediv">
        <img id="resume" src="https://i.imgur.com/SCrQnoR.jpg" alt="my resume"/>
      </div>
    )
  }
}

export default About;
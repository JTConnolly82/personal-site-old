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
          <h1>About Me</h1>
          <h3>I grew up in Pittsburgh, PA and currently living in Salt 
            Lake City, Utah.  <img id="aboutimage" align="right" src="https://i.imgur.com/5TN30vH.png" alt="me" />
             A graduate of the University of Colorado in 
            2013 and  DevPoint Labs’ Full-Stack Web Development course 
            as of Februrary 2019.
            Prior to getting started in software development I worked at Tesla, where 
            I managed relationships with utilities and devised 
            interconnection strategies and guidelines for solar and energy 
            storage projects.  I’m currently seeking a role in software 
            development.  More about my experience and background can be found in
            my resume, <a id="minilink" onClick={this.handleClick.bind(this, 'revealres')} href="#">here</a>.
            You can check out my coding projects on <a id="minilink" onClick={this.handleClick.bind(this, 'revealres')} href="https://github.com/JTConnolly82">Github</a>.
            </h3>
            {this._renderRes()}

            
        </div>
      </div>
    )
  }
}

class Resume extends Component {   
  constructor(){
    super();
    this.state = {render: 'revealres'};
  }
  handleClick(resDisplay, e){
    if (this.state.render === 'resDisplay') {
    this.setState({render:''}); 
    } else {
      this.setState({render:'resDisplay'});
    }     
}
  
  
  render() {
    return(
      <div id="resumediv">
        <img id="resume" src="https://i.imgur.com/SCrQnoR.jpg" alt="my resume"/>
        <h3 id="minilink" onClick={this.handleClick.bind(this, '')} href="#">Collapse</h3>
      </div>
    )
  }
}

export default About;
import React, {Component} from 'react';
import PageNav from './PageNav';
import "./pages.css";
import Social from './Social';
import MyForm from './MyForm';

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
        <h1 id="abouth1">About Me</h1>
        <div id="article">
          <h3>Originally from Pittsburgh and currently living in Salt 
            Lake City.  <img id="aboutimage" align="right" src="https://i.imgur.com/5TN30vH.png" alt="me" />
             I graduated from of the University of Colorado, Boulder in 
            2013 and  completed DevPoint Labs’ Full-Stack Web Development course 
            in Februrary 2019.
            In my last role I was at Tesla, where 
            I managed relationships with utilities and developed
            interconnection strategies for solar and energy 
            storage projects.  In my free time I enjoy exploring
            the mountains on my skis or mountain bike.  More about my experience and background can be found in
            my <span id="minilink" onClick={this.handleClick.bind(this, 'revealres')}>resume</span>.
            On Github I'm <a id="minilink"  target="_blank" href="https://github.com/JTConnolly82?tab=repositories">JTConnolly82</a>.
            </h3>
            <Social/>
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
        <img id="resume" src="https://i.imgur.com/xOLEGZx.jpg" alt="my resume"/>
        
      </div>
    )
  }
}

export default About;
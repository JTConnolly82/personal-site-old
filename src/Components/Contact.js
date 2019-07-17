import React, {Component} from 'react';
import PageNav from './PageNav';
import MyForm from './MyForm';





class Contact extends Component {
  render() {
    return(
      <div id="page">
        <PageNav />
        <div id="article">
          <h3>I can be reached by email at jtconnolly82@gmail.com, or use the 
            form below.
          </h3>
        </div>
        <MyForm class="MyForm"/>
      </div>
    )
  }
}

export default Contact;
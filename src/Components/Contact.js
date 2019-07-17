import React, {Component} from 'react';
import PageNav from './PageNav';

class Contact extends Component {
  render() {
    return(
      <div id="page">
        <PageNav/>
        <div id="article">
          <h3>You can reach me by email at JTConnolly82@gmail.com or use the form below.</h3>
        </div>
      </div>
    )
  }
}

export default Contact;
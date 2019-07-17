import React, {Component} from 'react';
import PageNav from './PageNav';

class Portfolio extends Component {
  render() {
    return(
      <div id="page">
      <PageNav/>
      <div id="article">
        <h3>this is an impressive portfolio</h3>
      </div>
    </div>
    )
  }
}

export default Portfolio;
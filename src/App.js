import React, {Component} from 'react';
import Home from './Components/Home';
import About from './Components/About';
// import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import {BrowserRouter as Router,
  Route,
  Switch,} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          {/* <Route path="/portfolio" exact component={Portfolio}/> */}
          <Route path="/contact" exact component={Contact}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
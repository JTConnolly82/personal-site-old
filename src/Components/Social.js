import React, {Component} from 'react';
import './Social.css';
import { SocialIcon } from 'react-social-icons';

class Social extends Component {
  render() {
    return(
      <div className="SocialTainer">
        <ul className="SocialList">
        <SocialIcon bgColor="#black" id="socialicon" url="https://www.linkedin.com/in/jtc/" style={{ height: 30, width: 30 }}/>
        {/* <SocialIcon bgColor="#black" id="socialicon" url="https://twitter.com/johntconnolly" style={{ height: 30, width: 30 }}/> */}
        <SocialIcon bgColor="#black" id="socialicon" url="https://github.com/JTConnolly82" style={{ height: 30, width: 30 }}/>
        </ul>
      </div>
    )
  }
}

export default Social;



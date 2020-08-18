import React, { Component } from 'react';

import '../../css/suggestion.css';
import userImg from  '../../img/user.svg';

class Body extends Component {
  render(){
    const { name, des, follow } = this.props;

    return (
      <div className="Body">
        <img src={userImg} alt="user"/>
        <div className="User">
          <a href="#">{name}</a>
          <p>{des}</p>
        </div>
        <p>{follow}</p>  
      </div>
    );
  }
}

export default Body;

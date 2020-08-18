import React, { Component } from 'react';

import '../../css/create-post.css';
import userPost from '../../img/user-post.svg';

class Input extends Component {
  render(){
    const { input } = this.props;

    return (
      <div className="Input">
        <img src={userPost} alt="userPost"/>
        <input type="text" placeholder={input}/>
      </div>
    );
  }
}

export default Input;

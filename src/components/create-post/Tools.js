import React, { Component } from 'react';

import '../../css/create-post.css';
import picture from '../../img/picture.svg';
import tagImg from '../../img/user-tag.svg';
import happyIcon from '../../img/happy-icon.svg';


class Tools extends Component {
  render(){
    const { img, tag, reaction, expand } = this.props;
    return (
      <div className="Tools">
        <button>
          <img src={picture} alt="img"/>
          {img}
        </button>
        <button>
          <img src={tagImg} alt="tag"/>
          {tag}
        </button>
        <button>
          <img src={happyIcon} alt="reaction"/>
          {reaction}
        </button>
        <button>
          {expand}
        </button>
      </div>
    );
  }
}

export default Tools;

import React, { Component } from 'react';
import '../../css/suggestion.css';

class Title extends Component {
  render(){
    const { title, view } = this.props;

    return (
      <div className="Title">
        <p>{title}</p>
        <a href="#">{view}</a>
      </div>
    );
  }
}

export default Title;

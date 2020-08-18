import React, { Component } from 'react';
import '../../css/create-post.css';

class Name extends Component {
  render(){
    const { title } = this.props;

    return (
      <div className="Name">
        <p>{title}</p>
      </div>
    );
  }
}

export default Name;

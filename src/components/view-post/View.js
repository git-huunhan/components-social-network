import React, { Component } from 'react';

import '../../css/view-post.css';
import listImg from '../../img/list-view.svg';
import gridImg from '../../img/grid-view.svg';

class View extends Component {
  render(){
    const { list, grid } = this.props;

    return (
      <div className="View">
        <div className="List">
          <img src={listImg} alt="list"/>
          <p>{list}</p>
        </div>
        <div className="Grid">
          <div className="GridChild">
            <img src={gridImg} alt="grid"/>
            <p>{grid}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default View;

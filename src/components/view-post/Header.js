import React, { Component } from 'react';

import '../../css/view-post.css';
import settingsImg from '../../img/settings.svg';

class Header extends Component {
  render(){
    const { title, filter, manager } = this.props;

    return (
      <div className="Header">
        <p>{title}</p>
        <div className="btnFilter">
          <button>
            <img src={settingsImg} alt="settings"/>
            {filter}
          </button>
        </div>
        
        <div className="btnManager">
          <button>
            <img src={settingsImg} alt="settings"/>
            {manager}
          </button>
        </div>
        
      </div>
    );
  }
}

export default Header;

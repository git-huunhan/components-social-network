import React, { Component } from 'react';

import './App.css';
import HeaderVP from './components/view-post/Header';
import View from './components/view-post/View';

class App extends Component {
  constructor(){
    super();

    this.state = {
      view: [{
        title: 'Bài viết',
        filter: 'Bộ lọc',
        manager: 'Quản lý bài viết',
        list: 'Xem theo danh sách',
        grid: 'Xem dạng lưới'
      }],

      suggest: [

      ],

      create: [

      ]
    }
  }

  render(){
    const { view } = this.state;

    return (
      <div className="App">
        <div className="view-post-main">
          {
            view.map((item, index) =>
            <HeaderVP key={index} title={item.title} 
                    filter={item.filter} 
                    manager={item.manager}/>
            )
          }
          {
            view.map((item, index) =>
            <View key={index} list={item.list}
                grid={item.grid}/>
            )
          }
          
        </div>
        <div className="suggestion-main">

        </div>
        <div className="create-post-main">

        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';
import Header from './components/view-post/Header';
import View from './components/view-post/View';
import Title from './components/suggestion/Title';
import Body from './components/suggestion/Body';
import Name from './components/create-post/Name';
import Input from './components/create-post/Input';
import Tools from './components/create-post/Tools';

class App extends Component {
  constructor(){
    super();

    this.state = {
      view: [{
        title: 'Bài viết',
        filter: 'Bộ lọc',
        manager: 'Quản lý bài viết',
        list: 'Xem theo danh sách',
        grid: 'Chế độ xem lưới',
      }],

 
      header: [{
        title: 'Gợi ý cho bạn',
        view: 'Xem tất cả',
      }],

      body: [{
        name: 'phong9080',
        des: 'Gợi ý cho bạn',
        follow: 'Theo dõi'
      },{
        name: 'phong9080',
        des: 'Gợi ý cho bạn',
        follow: 'Theo dõi'
      },{
        name: 'phong9080',
        des: 'Gợi ý cho bạn',
        follow: 'Theo dõi'
      }],

      create: [{
        title: 'Tạo bài viết',
        input: 'Anh Tân ơi, anh đang nghĩ gì thế?',
        img: 'Ảnh/Video',
        tag: 'Gắn thẻ bạn bè',
        reaction: 'Cảm xúc/...',
        expand: '...'
      }]
    }
  }

  render(){
    const { view, header, body, create } = this.state;

    return (
      <div className="App">
        <div className="suggestion-main">
          {
            header.map((item, index) =>
            <Title key={index} 
                     title={item.title}
                     view={item.view}/>
            )
          }
          {
            body.map((item, index) =>
              <Body key={index}
                    name={item.name}
                    des={item.des}
                    follow={item.follow}/>
            )
          }
        </div>

        <div className="Main">
          <div className="create-post-main">
            {
              create.map((item, index) =>
                <Name key={index} 
                      title={item.title}/>
              )
            }
            {
              create.map((item, index) =>
                <Input key={index} input={item.input}/>
              )
            }
            {
              create.map((item, index) =>
                <Tools key={index}
                       img={item.img}
                       tag={item.tag}
                       reaction={item.reaction}
                       expand={item.expand}/>
              )
            }
          </div>

          <div className="view-post-main">
            {
              view.map((item, index) =>
              <Header key={index} 
                        title={item.title} 
                        filter={item.filter} 
                        manager={item.manager}/>
              )
            }
            {
              view.map((item, index) =>
              <View key={index} list={item.list}
                  grid={item.grid} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

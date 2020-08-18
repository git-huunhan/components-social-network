import React from 'react'
import Header from '../../components/view-post/Header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header title='Bài viết'
                                   filter='Bộ lọc'
                                   manager='Quản lý bài viết'/>

export const FirstStory = Template.bind({});
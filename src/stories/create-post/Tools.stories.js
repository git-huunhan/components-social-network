import React from 'react'
import Tools from '../../components/create-post/Tools';

export default {
  title: 'Tools',
  component: Tools,
};

const Template = (args) => <Tools img= 'Ảnh/Video'
                                  tag= 'Gắn thẻ bạn bè'
                                  reaction= 'Cảm xúc/...'
                                  expand= '...'/>

export const FirstStory = Template.bind({});
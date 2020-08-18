import React from 'react'
import Title from '../../components/suggestion/Title';

export default {
  title: 'Title',
  component: Title,
};

const Template = (args) => <Title title= 'Gợi ý cho bạn'
                                  view= 'Xem tất cả'/>

export const FirstStory = Template.bind({});
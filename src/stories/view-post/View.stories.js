import React from 'react'
import View from '../../components/view-post/View';

export default {
  title: 'View',
  component: View,
};

const Template = (args) => <View list= 'Xem theo danh sách'
                                 grid= 'Chế độ xem lưới'/>

export const FirstStory = Template.bind({});
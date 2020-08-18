import React from 'react'
import Body from '../../components/suggestion/Body';

export default {
  title: 'Body',
  component: Body,
};

const Template = (args) => <Body name= 'phong9080'
                                 des= 'Gợi ý cho bạn'
                                 follow= 'Theo dõi'/>

export const FirstStory = Template.bind({});
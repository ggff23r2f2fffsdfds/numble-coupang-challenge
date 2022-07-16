import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../common';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '로그인',
  color: 'white',
  type: 'button',
};

export const Blue = Template.bind({});
Blue.args = {
  children: '로그인',
  color: 'blue',
  type: 'button',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../common';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  bold: false,
  label: '모두 동의합니다.',
  description: '모두 동의합니다.',
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
  label: '모두 동의합니다.',
  description: '모두 동의합니다.',
};

export const Large = Template.bind({});
Large.args = {
  bold: true,
  label: '모두 동의합니다.',
  description: '모두 동의합니다.',
  fontSize: '16px',
};

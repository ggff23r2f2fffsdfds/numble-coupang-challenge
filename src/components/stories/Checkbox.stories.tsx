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
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
  label: '모두 동의합니다.',
};

export const Description = Template.bind({});
Description.args = {
  bold: true,
  label: '모두 동의합니다.',
  description:
    '동의에는 필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가 포함되어 있으며, 선택 목적의 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.',
  fontSize: '16px',
};

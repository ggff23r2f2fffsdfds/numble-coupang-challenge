import { Input } from '../common';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { AiOutlineLock } from 'react-icons/ai';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '아이디(이메일)',
  type: 'email',
  label: 'email',
  errors: {},
};

export const Icon = Template.bind({});
Icon.args = {
  placeholder: '이메일을 작성해주세요',
  type: 'password',
  label: 'password',
  icon: <MdOutlineLocalPostOffice />,
  errors: {},
};

export const Error = Template.bind({});
Error.args = {
  placeholder: '아이디(이메일)',
  type: 'email',
  label: 'email',
  icon: <MdOutlineLocalPostOffice />,
  errors: { email: { message: '아이디(이메일)를 입력해주세요.' } },
};

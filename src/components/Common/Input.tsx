import React from 'react';
import styled from '@emotion/styled';
import colors from '../../constants/colors';

type InputProps = {
  label: string;
  placeholder?: string;
  icon: React.ReactNode;
  register: any;
};

const Input: React.FC<InputProps> = ({
  register,
  icon,
  label,
  placeholder,
}) => {
  return (
    <Container>
      <Label>
        <IConWrap>{icon}</IConWrap>
        <InputWrap>
          <input
            {...register(label, {})}
            type="text"
            placeholder={placeholder}
          />
        </InputWrap>
      </Label>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  width: 100%;
  display: block;
`;

const Label = styled.label`
  display: block;
  height: 48px;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 20px;
  color: #111;
`;

const IConWrap = styled.span`
  position: relative;
  float: left;
  height: 100%;
  min-width: 44px;
  border-right: 1px solid #ccc;
  background-color: #fafafa;
  svg {
    position: absolute;
    top: 25%;
    left: 25%;
  }
`;

const InputWrap = styled.span`
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  & input {
    padding: 16px 0 12px;
    width: 100%;
    text-indent: 12px;
    font-weight: 700;
  }
`;

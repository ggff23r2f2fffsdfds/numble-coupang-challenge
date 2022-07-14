import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import colors from '../../constants/colors';

type InputProps = {
  placeholder?: string;
  icon: React.ReactNode;
  type: string;
  label: string;
  register: any;
  errors: any;
};

const Input: React.FC<InputProps> = ({
  register,
  errors,
  label,
  type,
  icon,
  placeholder,
}) => {
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);

  const handleFocus = () => setIsFocusInput(true);
  const handleBlur = () => setIsFocusInput(false);

  return (
    <Container>
      <Label isFocusInput={isFocusInput} isError={!!errors[label]}>
        <IConWrap>{icon}</IConWrap>
        <InputWrap>
          <input
            onFocus={handleFocus}
            onBlurCapture={handleBlur}
            {...register}
            type={type}
            placeholder={placeholder}
          />
        </InputWrap>
      </Label>
      {errors && errors[label] && (
        <ErrorHint color={colors.RED}>{errors[label].message}</ErrorHint>
      )}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  width: 100%;
  display: block;
  & + & {
    margin-top: 15px;
  }
`;

const Label = styled.label<{
  isFocusInput: boolean;
  isError: boolean;
}>`
  display: block;
  height: 48px;
  border: 1px solid #ccc;
  font-size: 14px;
  line-height: 20px;
  color: #111;
  ${(props) =>
    props.isFocusInput &&
    css`
      border-bottom: 1px solid #0074e9; ;
    `};

  ${(props) =>
    props.isError &&
    css`
      border-bottom: 1px solid #e7223d; ;
    `};
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
  input {
    padding: 16px 0 12px;
    width: 100%;
    text-indent: 12px;
    font-weight: 700;
  }
`;

const ErrorHint = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  display: block;
  margin: 9px 12px 0;
  padding: 0;
  font-size: 12px;
  line-height: 18px;
  cursor: default;
`;

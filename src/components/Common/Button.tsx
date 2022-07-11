import React from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import colors from '../../constants/colors';

type ButtonProps = {
  children: React.ReactNode;
  color: 'white' | 'blue';
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const COLORS = {
  white: css`
    color: ${colors.BLUE};
    background: ${colors.WHITE};
  `,
  blue: css`
    color: ${colors.WHITE};
    background: ${colors.BLUE};
  `,
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  type = 'button',
  disabled = false,
}) => {
  const buttonColor = COLORS[color];

  return (
    <Container type={type} buttonColor={buttonColor} disabled={disabled}>
      {children}
    </Container>
  );
};
export default Button;

const Container = styled.button<{ buttonColor: SerializedStyles }>`
  display: block;
  width: 100%;
  padding: 16px 0;
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: inset 0 -2px 0 rgb(0 0 0 / 38%);
  ${(props) => props.buttonColor};
`;

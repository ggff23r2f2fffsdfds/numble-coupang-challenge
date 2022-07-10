import React from 'react';
import styled from '@emotion/styled';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
  padding-top: 100px;
`;

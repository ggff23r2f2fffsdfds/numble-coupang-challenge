import React from 'react';
import styled from '@emotion/styled';

const Layout = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main``;

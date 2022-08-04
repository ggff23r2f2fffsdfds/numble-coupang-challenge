import React from 'react';
import styled from '@emotion/styled';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
`;

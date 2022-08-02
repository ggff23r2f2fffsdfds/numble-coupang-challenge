import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import axios from 'axios';
import { BreadCrumb } from 'src/components/product';

export default function VendoritemPage() {
  const router = useRouter();
  const { productId } = router.query as { productId: string };

  return (
    <Container>
      <Wrapper>
        <BreadCrumb productId={productId} />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
`;

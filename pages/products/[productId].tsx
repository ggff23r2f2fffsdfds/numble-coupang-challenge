import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import {
  BreadCrumb,
  ProductDetail,
  ProductInfo,
  OtherProduct,
} from 'src/components/product';

export default function VendoritemPage() {
  const [status, setStatus] = useState(false);
  const router = useRouter();
  const { productId, vendoritemId, itemId } = router.query as {
    productId: string;
    vendoritemId: string;
    itemId: string;
  };

  useEffect(() => {
    if (!router.isReady) return;
    setStatus(true);
  }, [router.isReady]);

  return (
    <Container>
      {status && (
        <Wrapper>
          <Header>
            <BreadCrumb productId={productId} />
          </Header>
          <Content>
            <ProductInfo productId={productId} vendoritemId={vendoritemId} />
            <OtherProduct productId={productId} />
            <ProductDetail
              productId={productId}
              vendoritemId={vendoritemId}
              itemId={itemId}
            />
          </Content>
        </Wrapper>
      )}
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
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
`;

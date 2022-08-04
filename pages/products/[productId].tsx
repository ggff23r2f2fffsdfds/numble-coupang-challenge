import { useState, useEffect } from 'react';
import { useRequestProduct } from 'src/hooks';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import {
  BreadCrumb,
  ProductDetail,
  ProductInfo,
  OtherProduct,
} from 'src/components/product';
import {
  BreadCrumbType,
  ProductInfoType,
  OtherProductListType,
  ProductDetailType,
} from 'src/types/product';
import ProductSEO from 'src/components/seo/ProductSEO';

export default function VendoritemPage() {
  const [status, setStatus] = useState(false);
  const router = useRouter();

  const { productId, vendoritemId, itemId } = router.query as {
    productId: string;
    vendoritemId: string;
    itemId: string;
  };

  const { breadCrumb, productInfo, otherProductList, productDetail } =
    useRequestProduct({
      productId,
      vendoritemId,
      itemId,
    }) as {
      breadCrumb: BreadCrumbType[];
      productInfo: ProductInfoType;
      otherProductList: OtherProductListType;
      productDetail: ProductDetailType;
    };

  useEffect(() => {
    if (!router.isReady) return;

    setStatus(true);
  }, [router.isReady]);

  return (
    <>
      {productInfo && (
        <ProductSEO
          title={productInfo.name}
          productId={productId}
          image={productInfo.images[0].thumbnailImage}
        />
      )}
      <Container>
        {status && (
          <Wrapper>
            <Header>
              {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} />}
            </Header>
            <Content>
              {productInfo && <ProductInfo productInfo={productInfo} />}
              {otherProductList && (
                <OtherProduct otherProductList={otherProductList} />
              )}
              {productDetail && <ProductDetail productDetail={productDetail} />}
            </Content>
          </Wrapper>
        )}
      </Container>
    </>
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

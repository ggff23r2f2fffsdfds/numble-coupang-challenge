import styled from '@emotion/styled';
import { useRequest } from 'src/hooks';
import { OtherProductListType } from 'src/types/product';
import { OtherProductItem, BrandShop } from './';

type OtherProductProps = {
  productId: string;
};

export default function OtherProduct({ productId }: OtherProductProps) {
  const otherProductList = useRequest<OtherProductListType>(
    `products/${productId}/brand-sdp/widget/brand-sdp?itemId=1&vendoritemId=1`
  );

  return (
    <Container>
      <Wrapper>
        <Header>
          <h2>Apple의 다른 상품들</h2>
        </Header>
        <Content>
          {otherProductList && otherProductList.items.length > 0 && (
            <OtherProductList>
              {otherProductList.items.map((item) => (
                <OtherProductItem key={item.itemId} item={item} />
              ))}
              <BrandShop logoImageUrl={otherProductList.logoImageUrl} />
            </OtherProductList>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 1px solid #eee;
`;

const Header = styled.header`
  width: 100%;
  padding: 40px 0 30px 0;
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
`;

const OtherProductList = styled.div`
  display: flex;
`;

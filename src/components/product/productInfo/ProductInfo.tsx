import styled from '@emotion/styled';
import { useRequest } from '../../../hooks';
import { ProductInfoType } from '../../../types/product';
import { ProductImages, BundleOption, Shipping, Price, Description } from './';

type ProductInfoProps = {
  productId: string;
  vendoritemId: string;
};

export default function ProductInfo({
  productId,
  vendoritemId,
}: ProductInfoProps) {
  const productInfo = useRequest<ProductInfoType>(
    `products/${productId}/vendoritems/${vendoritemId}`
  ) as ProductInfoType;

  return (
    <Container>
      {productInfo && (
        <Wrapper>
          <ProductImagesBox>
            <ProductImages images={productInfo.images} />
          </ProductImagesBox>
          <ProductInfoBox>
            <Name>
              <h2>{productInfo.name}</h2>
            </Name>
            <Price price={productInfo.price} ccidInfo={productInfo.ccidInfo} />
            <Shipping deliveryList={productInfo.deliveryList} />
            <BundleOption bundleOption={productInfo.bundleOption} />
            <Quantity>
              <input type="number" value={1} readOnly />
              <QuantityButton>로켓와우 무료 체험하기</QuantityButton>
            </Quantity>
            <Description sellingInfo={productInfo.sellingInfo} />
          </ProductInfoBox>
        </Wrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ProductImagesBox = styled.div`
  width: 49.5%;
`;

const ProductInfoBox = styled.div`
  width: 50.5%;
`;

const Name = styled.div`
  width: 100%;
  position: relative;
  padding: 0 0 10px;
  border-bottom: 1px solid #ccc;
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Quantity = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  input {
    width: 85px;
    margin-right: 10px;
    display: block;
    background: #fff;
    opacity: 0.6;
    border: 1px solid #cbcbcb;
  }
`;

const QuantityButton = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #346aff;
  color: #fff;
  width: 390px;
  height: 40px;
  text-indent: 0;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 40px;
  border-radius: 2px;
  background-color: #346aff;
  border-color: #0f5ca8;
`;

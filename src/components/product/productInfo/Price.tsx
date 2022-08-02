import styled from '@emotion/styled';
import Image from 'next/image';

type PriceProps = {
  price: {
    originPrice: string;
    salePrice: string;
    discountRate: string;
  };
  ccidInfo: {
    ccidText: string;
    iconUrl: string;
  };
};

export default function Price({ price, ccidInfo }: PriceProps) {
  return (
    <Container>
      <OriginPrice>{price.originPrice}원</OriginPrice>
      <SalePrice>
        <strong>{price.salePrice}원</strong>
      </SalePrice>
      <SimpleInfo>
        <SimpleInfoICon>
          <Image
            src={`http:${ccidInfo.iconUrl}`}
            width={14}
            height={10}
            alt="신용 카드"
          />
        </SimpleInfoICon>
        <span>{ccidInfo.ccidText}</span>
      </SimpleInfo>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  padding: 17px 0;
`;

const OriginPrice = styled.div`
  margin-bottom: 2px;
  font-size: 14px;
  text-decoration: line-through;
  color: #888;
`;

const SalePrice = styled.div`
  font-size: 20px;
  line-height: 21px;
  color: #ae0000;
`;

const SimpleInfo = styled.div`
  display: inline-block;
  margin-top: 12px;
  padding: 0 8px;

  border-radius: 10px;
  border: solid 1px #ccc;
  background-color: #fff;
  span {
    display: inline-block;
    margin-bottom: 2px;
    color: #333;
    font-size: 12px;
  }
`;

const SimpleInfoICon = styled.div`
  display: inline-block;
  margin-right: 5px;
`;

import styled from '@emotion/styled';
import Image from 'next/image';

type BrandShopProps = {
  logoImageUrl: string;
};

export default function BrandShop({ logoImageUrl }: BrandShopProps) {
  return (
    <Container>
      <BrandShopImage>
        <Image
          src={`http:${logoImageUrl}`}
          width={140}
          height={140}
          alt="브랜드샵"
        />
      </BrandShopImage>
      <Title>같은 브랜드 상품을 한곳에서 모아볼 수 있어요!</Title>
      <Total>총 1030개</Total>
      <InfoMore>브랜드샵 구경할까요?</InfoMore>
    </Container>
  );
}

const Container = styled.div`
  width: 160px;
`;

const BrandShopImage = styled.div`
  padding: 0 10px;
  width: 160px;
  height: 140px;
  margin-bottom: 10px;
  img {
    margin: auto;
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  color: #212b36;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 1.33;
  word-break: keep-all;
`;

const Total = styled.div`
  text-align: center;
  font-size: 12px;
  margin-bottom: 20px;
  color: #111;
  font-weight: bold;
  color: #346aff;
`;

const InfoMore = styled.span`
  display: block;
  text-align: center;
  border: 1px solid #346aff;
  color: #346aff;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0;
  border-radius: 2px;
`;

import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ProductDetailType } from 'src/types/product';
import { InfoTable, DetailImages } from './';

const tabArray: string[] = [
  '상품상세',
  '상품평',
  '상품문의',
  '배송/교환/반품 안내',
];

type ProductDetailProps = {
  productDetail: ProductDetailType;
};

export default function ProductDetail({ productDetail }: ProductDetailProps) {
  const [currentActive, setCurrentActive] = useState(0);

  const handleTabClick = (index: number) => {
    setCurrentActive(index);
  };

  return (
    <Container>
      <Wrapper>
        <TabList>
          {tabArray.map((tab, index) => (
            <TabItem
              key={index}
              isActive={currentActive === index}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </TabItem>
          ))}
        </TabList>
        <Content>
          <InfoTable essentials={productDetail.essentials} />
          <DetailImages contentImages={productDetail.contentImages} />
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const TabList = styled.ul`
  width: 100%;
  border-top: 2px solid #555;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  list-style-type: none;
  font-size: 0;
  user-select: none;
`;

const TabItem = styled.li<{ isActive: boolean }>`
  display: inline-block;
  padding: 15px 20px 14px;
  width: 25%;
  border-right: 1px solid #ccc;
  background-color: #fafafa;
  text-align: center;
  color: #555;
  font-weight: bold;
  font-size: 16px;
  box-sizing: border-box;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      margin-bottom: -2px;
      background: #fff;
      border-bottom: 1px solid #fff;
      color: #111;
    `}
`;

const Content = styled.div`
  width: 100%;
  padding-top: 30px;
`;

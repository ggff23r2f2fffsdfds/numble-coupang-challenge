import styled from '@emotion/styled';

type ShippingProps = {
  deliveryList: string[];
};

export default function Shipping({ deliveryList }: ShippingProps) {
  return (
    <Container>
      <ShippingFee>무료배송</ShippingFee>
      <ShippingList>
        {deliveryList.map((delivery, index) => (
          <ShippingItem key={index}>
            <ShippingRadio></ShippingRadio>
            <ShippingHTML dangerouslySetInnerHTML={{ __html: delivery }} />
          </ShippingItem>
        ))}
      </ShippingList>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const ShippingFee = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
`;

const ShippingList = styled.div`
  width: 100%;
  padding-top: 7px;
  letter-spacing: -0.75px;
`;

const ShippingItem = styled.div`
  display: flex;
  :first-of-type {
    span::after {
      display: inline-block;
      position: absolute;
      top: 50%;
      margin-top: -5px;
      content: '';
      background: #0072ea;
      border: 1px solid #4f9bf0;
      margin-left: 3px;
      padding: 4px;
      border-radius: 100%;
    }
  }
  & + & {
    margin-top: 5px;
  }
`;

const ShippingRadio = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: bottom;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 1px solid #c7c7c7;
  border-radius: 100%;
  box-shadow: 1px 1px 1px #ddd inset;
  margin-right: 8px;
  margin-top: 1px;
`;

const ShippingHTML = styled.div`
  width: 100%;
  em {
    font-size: 12px;
    :nth-of-type(-n + 2) {
      font-weight: 700;
      color: #00891a;
    }
    :nth-of-type(2) {
      font-weight: normal;
    }
  }
`;

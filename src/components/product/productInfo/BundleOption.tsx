import styled from '@emotion/styled';
import Image from 'next/image';

type BundleOptionProps = {
  bundleOption: {
    icon: string;
    items: {
      buyableQuantity: number;
      description: string;
      enabled: boolean;
      name: string;
      price: string;
      vendorItemId: number;
    };
  };
};

export default function BundleOption({ bundleOption }: BundleOptionProps) {
  return (
    <Container>
      <InsuranceCheckbox>
        <input type="checkbox" />
      </InsuranceCheckbox>
      <InsuranceContent>
        <InsuranceHeader>
          <InsuranceIcon>
            <Image
              src={bundleOption.icon}
              width={20}
              height={20}
              alt="Apple care"
            />
          </InsuranceIcon>
          <InsuranceTitle>{bundleOption.items.name}</InsuranceTitle>
          <InsurancePrice>{bundleOption.items.price}</InsurancePrice>
        </InsuranceHeader>
        <InsuranceDescription>
          {bundleOption.items.description}
        </InsuranceDescription>
      </InsuranceContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eee;
  word-break: break-all;
`;

const InsuranceCheckbox = styled.div`
  margin-right: 8px;
  padding-top: 2px;
  input {
    width: 14px;
    height: 14px;
    margin: 0;
  }
`;

const InsuranceContent = styled.div`
  width: 100%;
`;

const InsuranceHeader = styled.div`
  display: flex;
`;

const InsuranceIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const InsuranceTitle = styled.div`
  font-size: 14px;
  color: #0f0f0f;
  margin-left: 1px;
  font-weight: bold;
  vertical-align: text-top !important;
`;

const InsurancePrice = styled.div`
  font-size: 14px;
  color: #333;
  margin-left: 1px;
  vertical-align: text-top !important;
`;

const InsuranceDescription = styled.div`
  font-size: 12px;
  color: #111;
  line-height: 18px;
  margin-top: 6px;
`;

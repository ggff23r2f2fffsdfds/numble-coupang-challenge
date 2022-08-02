import styled from '@emotion/styled';

type DescriptionProps = {
  sellingInfo: string[];
};

export default function Description({ sellingInfo }: DescriptionProps) {
  return (
    <Container>
      <DescriptionList>
        {sellingInfo.map((info, index) => (
          <DescriptionItem key={index}>{info}</DescriptionItem>
        ))}
      </DescriptionList>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 16px;
  margin-bottom: 16px;
`;

const DescriptionList = styled.ul`
  margin-left: 16px;
`;

const DescriptionItem = styled.li`
  display: list-item;
  word-break: break-all;
  list-style: disc outside;
  line-height: 1.5;
`;

import styled from '@emotion/styled';

type InfoTableProps = {
  essentials: any;
};

type EssentialType = { title: string; description: string };

export default function InfoTable({ essentials }: InfoTableProps) {
  return (
    <Container>
      <TableTitle>필수 표기정보</TableTitle>
      <TableBox>
        <TableList>
          {essentials
            .slice(0, 7)
            .map((essentials: EssentialType, index: number) => (
              <TableItem key={index}>
                <TableItemTitle>{essentials.title}</TableItemTitle>
                <TableItemDescription>
                  {essentials.description}
                </TableItemDescription>
              </TableItem>
            ))}
        </TableList>
        <TableList>
          {essentials
            .slice(7, 15)
            .map((essentials: EssentialType, index: number) => (
              <TableItem key={index}>
                <TableItemTitle>{essentials.title}</TableItemTitle>
                <TableItemDescription>
                  {essentials.description}
                </TableItemDescription>
              </TableItem>
            ))}
        </TableList>
      </TableBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const TableTitle = styled.p`
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
`;

const TableBox = styled.div`
  display: flex;
`;

const TableList = styled.div`
  width: 50%;
`;

const TableItem = styled.div`
  width: 100%;
  display: flex;
`;

const TableItemTitle = styled.div`
  width: 30%;
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  background-color: #fafafa;
  color: #111;
  font-weight: 400;
  font-size: 12px;
  overflow: hidden;
`;

const TableItemDescription = styled.div`
  width: 70%;
  white-space: normal;
  word-break: break-all;
  padding: 12px 16px;
  color: #333;
  border-bottom: 1px solid #eee;
  border-right: none;
  border-left: none;
  border-top: none;
  line-height: 17px;
  font-size: 12px;
`;

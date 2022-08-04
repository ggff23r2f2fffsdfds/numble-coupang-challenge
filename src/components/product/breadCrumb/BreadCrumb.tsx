import styled from '@emotion/styled';
import Link from 'next/link';
import { BreadCrumbType } from 'src/types/product';

type BreadCrumbProps = {
  breadCrumb: BreadCrumbType[];
};

export default function BreadCrumb({ breadCrumb }: BreadCrumbProps) {
  return (
    <Container>
      {breadCrumb.length > 0 &&
        breadCrumb.map((breadCrumbItem: BreadCrumbType) => (
          <BreadCrumbItem key={breadCrumbItem.id}>
            <Link href={`/products/${breadCrumbItem.id}`} passHref>
              <StyledLink>{breadCrumbItem.link}</StyledLink>
            </Link>
            &nbsp;&gt;
          </BreadCrumbItem>
        ))}
    </Container>
  );
}

const Container = styled.ul`
  width: 100%;
  display: flex;
  min-height: 50px;
  padding-top: 10px;
`;

const BreadCrumbItem = styled.li`
  padding: 0 6px 3px 0;
`;

const StyledLink = styled.a`
  font-size: 11px;
  color: #333;
  :hover {
    color: #008cff;
    text-decoration: underline;
  }
`;

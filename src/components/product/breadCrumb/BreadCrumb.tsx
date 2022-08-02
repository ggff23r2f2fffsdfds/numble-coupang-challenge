import styled from '@emotion/styled';
import Link from 'next/link';
import { BreadCrumbType } from '../../../types/product';
import { useRequest } from '../../../hooks';

type BreadCrumbProps = {
  productId: string;
};

export default function BreadCrumb({ productId }: BreadCrumbProps) {
  const breadCrumb = useRequest<BreadCrumbType[]>(
    `products/${productId}/breadcrumb-gnbmenu`
  );

  return (
    <Container>
      {breadCrumb &&
        breadCrumb.length > 0 &&
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
  padding-left: 0;
`;

const BreadCrumbItem = styled.li`
  padding: 0 6px 3px 0;
`;

const StyledLink = styled.a`
  font-size: 11px;
  color: #333;
`;

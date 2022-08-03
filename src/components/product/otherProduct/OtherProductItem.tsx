import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { OtherProductItemType } from 'src/types/product';

type OtherProductItemProps = {
  item: OtherProductItemType;
};

export default function OtherProduct({ item }: OtherProductItemProps) {
  console.log(item);
  return (
    <Container>
      <Wrapper>
        <Link href={item.link}>
          <a>
            <ProductImage>
              <Image
                src={`http:${item.imageUrl}`}
                width={160}
                height={160}
                alt="상품 썸네일"
              />
            </ProductImage>
            <Content>
              <Title>{item.title}</Title>
              <Price>
                <span>{item.salesPrice.toLocaleString()}원</span>
                {item.badgeUrl && (
                  <Badge>
                    <Image
                      src={`http:${item.badgeUrl}`}
                      width={55}
                      height={15}
                      alt="뱃지"
                    />
                  </Badge>
                )}
              </Price>
              <Rating>
                <Star ratingWidth={15 * item.ratingAverage}>
                  <span></span>
                </Star>
                <RatingCount>({item.ratingCount})</RatingCount>
              </Rating>
            </Content>
          </a>
        </Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 160px;
  margin-right: 45px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductImage = styled.div`
  width: 160px;
  height: 160px;
`;

const Content = styled.div`
  width: 100%;
`;

const Title = styled.div`
  padding: 12px 0 0 0;
  font-size: 12px;
  color: #111;
  font-weight: normal;
  text-overflow: ellipsis;
  line-height: 1.2;
  overflow: hidden;
  word-break: break-all;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Price = styled.div`
  height: 29px;
  width: 100%;
  font-size: 12px;
  span {
    float: left;
    color: #ae0000;
    font-weight: bold;
    font-size: 13px;
    overflow: hidden;
    font-family: tahoma;
    margin-top: 8px;
    margin-right: 5px;
  }
`;
const Badge = styled.div`
  float: left;
  width: 72px;
  height: 20px;
  overflow: hidden;
  margin-left: 4px;
  margin-top: 9px;
`;

const Rating = styled.div`
  width: 100%;
  padding-top: 6px;
  display: flex;
`;

const Star = styled.span<{ ratingWidth: number }>`
  display: inline-block;
  width: ${(props) => props.ratingWidth}px;
  height: 15px;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIzIDIxIj4KICAgIDxwYXRoIGZpbGw9IiNGRjk2MDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjg0My40OTZMMTUgNi4zNjhsNi42OTQgMS4xMTljLjc1NC4xMjUuOTMyLjY2LjM5OCAxLjE5N2wtNC43NDQgNC43NDguOTgxIDYuNTYyYy4xMS43NC0uMzU3IDEuMDcyLTEuMDQyLjc0bC02LjA4Ny0yLjk0LTYuMDg3IDIuOTRjLS42ODUuMzMyLTEuMTUyIDAtMS4wNDItLjc0bC45OC02LjU2MkwuMzA4IDguNjg0Yy0uNTM0LS41MzYtLjM1Ni0xLjA3Mi4zOTgtMS4xOTdMNy40IDYuMzY4IDEwLjU1Ny40OTZjLjM1NS0uNjYxLjkzMS0uNjYxIDEuMjg2IDAiLz4KPC9zdmc+Cg==)
    repeat-x;
  content: '';
  background-size: 15px;
`;

const RatingCount = styled.span`
  display: block;
  height: 100%;
  line-height: 1;
  margin-left: 4px;
  font-family: Tahoma;
  font-weight: 400;
  font-size: 12px;
  color: #888;
`;

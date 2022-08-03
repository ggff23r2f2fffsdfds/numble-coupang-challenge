import { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { ProductImage } from 'src/types/product';

type ProductImagesProps = {
  images: ProductImage[];
};

export default function ProductImages({ images }: ProductImagesProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleClickThumbnailItem = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <Container>
      <ProductThumbnail>
        {images.map((image, index) => (
          <ProductThumbnailItem
            key={index}
            isFocus={currentImage === index}
            onClick={() => handleClickThumbnailItem(index)}
          >
            <Image
              src={`https:${image.thumbnailImage}`}
              width={50}
              height={50}
              alt="상품 썸네일"
            />
          </ProductThumbnailItem>
        ))}
      </ProductThumbnail>
      <ProductDetail>
        <Image
          src={`https:${images[currentImage].detailImage}`}
          width={400}
          height={400}
          alt="상품 디테일"
        />
      </ProductDetail>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const ProductThumbnail = styled.ul`
  display: flex;
  flex-direction: column;

  padding-right: 10px;
  gap: 5px 0;
`;
const ProductThumbnailItem = styled.li<{ isFocus: boolean }>`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: ${(props) =>
    props.isFocus ? '2px solid #346aff' : '2px solid transparent'};
  :hover {
    border: 2px solid #346aff;
  }
`;

const ProductDetail = styled.div`
  width: 400px;
  height: 400px;
`;

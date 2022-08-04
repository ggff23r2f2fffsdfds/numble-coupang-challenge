import styled from '@emotion/styled';
import Image from 'next/image';

type DetailImagesProps = {
  contentImages: string[];
};

export default function DetailImages({ contentImages }: DetailImagesProps) {
  return (
    <Container>
      {contentImages.map((image, index) => (
        <ContentImage key={index}>
          <Image
            src={`http:${image}`}
            layout="fill"
            objectFit="contain"
            alt="상세 이미지"
          />
        </ContentImage>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const ContentImage = styled.div`
  position: relative;
  width: 780px;
  div,
  span {
    position: unset !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

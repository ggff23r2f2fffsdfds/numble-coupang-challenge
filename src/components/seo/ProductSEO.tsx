import Head from 'next/head';

type SEOProps = {
  title: string;
  productId: string;
  image: string;
};

export default function ProductSEO({ title, productId, image }: SEOProps) {
  return (
    <Head>
      <title>쿠팡 ! | {title}</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:url"
        content={`https://www.coupang.com/vp/products/${productId}`}
      />
      <meta property="og:image" content={image} />
      <meta property="og:description" content="COUPANG" />
      <meta property="og:type" content="website" />
    </Head>
  );
}

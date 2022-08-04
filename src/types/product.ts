export type BreadCrumbType = {
  link: string;
  id: number;
};

export type ProductInfoType = {
  id: number;
  name: string;
  images: ProductImage[];
  price: {
    originPrice: string;
    salePrice: string;
    discountRate: string;
  };
  ccidInfo: {
    ccidText: string;
    iconUrl: string;
  };
  deliveryList: string[];
  sellingInfo: string[];
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

export type ProductImage = {
  detailImage: string;
  thumbnailImage: string;
};

export type OtherProductItemType = {
  vendorItemId: number;
  title: string;
  subscribe: boolean;
  salesPrice: number;
  ratingCount: number;
  ratingAverage: number;
  productId: number;
  link: string;
  itemId: number;
  imageUrl: string;
  badgeUrl: string;
  badgeType: string;
};

export type OtherProductListType = {
  logoImageUrl: string;
  items: OtherProductItemType[];
};

export type ProductDetailType = {
  productId: number;
  itemId: number;
  vendorItemId: number;
  essentials: {
    title: string;
    description: string;
  }[];
  contentImages: string[];
};

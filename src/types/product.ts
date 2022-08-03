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

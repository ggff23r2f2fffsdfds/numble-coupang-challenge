import { useRequest } from './';
import {
  ProductInfoType,
  OtherProductListType,
  ProductDetailType,
  BreadCrumbType,
} from 'src/types/product';

type useRequestProductProps = {
  productId: string;
  vendoritemId: string;
  itemId: string;
};

export function useRequestProduct({
  productId,
  vendoritemId,
  itemId,
}: useRequestProductProps) {
  const breadCrumb = useRequest<BreadCrumbType[]>(
    `products/${productId}/breadcrumb-gnbmenu`
  );

  const productInfo = useRequest<ProductInfoType>(
    `products/${productId}/vendoritems/${vendoritemId}`
  ) as ProductInfoType;

  const otherProductList = useRequest<OtherProductListType>(
    `products/${productId}/brand-sdp/widget/brand-sdp?itemId=1&vendoritemId=1`
  );

  const productDetail = useRequest<ProductDetailType>(
    `products/${productId}/items/${itemId}/vendoritems/${vendoritemId}`
  ) as ProductDetailType;

  return { breadCrumb, productInfo, otherProductList, productDetail };
}

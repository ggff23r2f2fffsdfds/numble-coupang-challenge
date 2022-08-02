import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { ProductInfoType } from 'src/types/product';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productId, vendoritemId } = req.query;
  const { data }: any = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/products/${productId}/vendoritems/${vendoritemId}`
  );

  const result: ProductInfoType = {
    id: data.itemId,
    name: data.itemName,
    price: {
      originPrice: data.quantityBase[0].price.originPrice,
      salePrice: data.quantityBase[0].price.salePrice,
      discountRate: data.quantityBase[0].price.discountRate,
    },
    ccidInfo: {
      ccidText: data.ccidInfo.simpleInfo.ccidText,
      iconUrl: data.ccidInfo.simpleInfo.iconUrl,
    },
    deliveryList: data.quantityBase[0].deliveryList.map(
      (delivery: any) => delivery.descriptions
    ),
    bundleOption: {
      icon: data.bundleOption.options[0].icon,
      items: data.bundleOption.options[0].items[0],
    },
    sellingInfo: data.sellingInfoVo.sellingInfo,
  };

  return res.status(200).json(result);
}

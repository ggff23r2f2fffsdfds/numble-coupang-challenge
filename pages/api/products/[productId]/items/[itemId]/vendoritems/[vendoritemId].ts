import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { ProductDetailType } from 'src/types/product';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productId, itemId, vendoritemId } = req.query;

  if (!req.query.vendoritemId || !req.query.itemId) {
    res.status(400).send('query param invalid (vendorItemId, itemId)');
  }

  const { data }: any = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/products/${productId}/items/${itemId}/vendoritems/${vendoritemId}`
  );

  const result: ProductDetailType = {
    productId: data.productId,
    itemId: data.itemId,
    vendorItemId: data.vendorItemId,
    essentials: data.essentials,
    contentImages: data.details.map(
      (detail: any) => detail.vendorItemContentDescriptions[0].content
    ),
  };

  return res.status(200).json(result);
}

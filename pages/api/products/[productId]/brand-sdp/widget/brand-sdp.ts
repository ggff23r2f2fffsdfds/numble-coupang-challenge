import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { OtherProductListType } from 'src/types/product';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.vendoritemId || !req.query.itemId) {
    res.status(400).send('query param invalid (vendorItemId, itemId)');
  }

  const { productId, vendoritemId, itemId } = req.query;

  const { data }: any = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/products/${productId}/brand-sdp/widget/brand-sdp?itemId=${itemId}&vendoritemId=${vendoritemId}`
  );

  const result: OtherProductListType = {
    logoImageUrl: data.logoImageUrl,
    items: data.items.slice(0, 4),
  };

  return res.status(200).json(result);
}

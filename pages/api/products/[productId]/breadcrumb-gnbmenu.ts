import { NextApiRequest, NextApiResponse } from 'next';

const result = [
  { link: '쿠팡 홈', id: 0 },
  { link: '가전디지털', id: 1 },
  { link: '1인방송', id: 2 },
  { link: '전문관', id: 3 },
  { link: '카메라', id: 4 },
  { link: '휴대폰', id: 5 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(result);
}

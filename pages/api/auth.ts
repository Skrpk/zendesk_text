import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const token = jwt.sign(
    {
      name: 'AMB MX',
      email: 'email@team.co',
      external_id: '904102952',
      scope: 'user',
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 60 * 60,
      header: { kid: process.env.KID },
    }
  );

  return res.json(token);
}
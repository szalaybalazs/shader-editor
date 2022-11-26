import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk/';
import { nanoid } from 'nanoid';

const s3 = new AWS.S3({
  region: 'eu-central-1',
  params: { Bucket: process.env.AWS_S3_BUCKET },
  // accessKeyId: accessKey,
  // secretAccessKey: secretKey,
  signatureVersion: 'v4',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { type, category } = req.body;

    const id = nanoid();
    const key = `${category || 'misc'}/${id}`;
    const params = {
      Key: key,
      Expires: 600,
      ContentType: type,
      ACL: 'public-read',
    };

    try {
      const url = await s3.getSignedUrlPromise('putObject', params);

      return res.status(200).json({ url, key, id });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
};

export default handler;

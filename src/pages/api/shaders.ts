import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { Shader } from '../../database/models/Shader';
import dbConnect from '../../database/mongoose';
import { createShader } from '../../database/shader.controller';
import { authOptions } from './auth/[...nextauth]';
import { Schema } from 'mongoose';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  console.log(req.method);
  if (req.method === 'PUT') {
    const userId = session.user?.id;

    const slug = nanoid();
    const name = require('random-words')({ exactly: 3, join: '-' });

    const shader = await createShader(slug, name, userId);
    return res.status(200).json({ shader });
  } else if (req.method === 'POST') {
    try {
      const { id, shader: code } = req.body;

      await dbConnect();
      const shader = await Shader.findOne({ _id: id });
      console.log(shader);
      if (!shader) return res.status(404).json({ success: false });
      if (shader.userId && !(shader.userId as any).equals(session?.user?.id)) {
        return res.status(401).json({ success: false });
      }

      shader.shader = code;

      await shader.save();

      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  } else return res.status(400);
};

import mongoose from 'mongoose';
import { iShader, Shader } from './models/Shader';
import { User } from './models/User';
import dbConnect from './mongoose';

export const getShaderBySlug = async (slug: string) => {
  await dbConnect();
  return await Shader.findOne({ slug });
};

export const getShadersForUser = async (id: string): Promise<iShader[]> => {
  // return query(
  //   `
  //     SELECT shaders.* FROM \`users\`
  //     RIGHT JOIN shaders ON user_id = users.id
  //     WHERE users.email = ?
  //   `,
  //   [user],
  // );
  await dbConnect();
  return Shader.find({ userId: id });
};

export const createShader = async (slug: string, name: string, userId?: string) => {
  await dbConnect();
  const shader = new Shader({ slug, name, userId });

  await shader.save();

  return shader;
};

import { iShader, Shader } from './models/Shader';
import dbConnect from './mongoose';

export const getShaderBySlug = async (slug: string) => {
  await dbConnect();
  const shader = await Shader.findOne({ slug }).populate('userId');
  if (!shader) return null;
  return { ...shader?.toJSON(), user: (shader.userId as any)?.toJSON() };
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

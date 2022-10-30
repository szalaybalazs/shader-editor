import { query } from '.';

export const getShaderBySlug = async (slug: string) => {
  const res = await query(`SELECT * FROM shaders WHERE slug = ?`, [slug]);
  return res[0];
};

export const getShaderSlugs = async (): Promise<string[]> => {
  const res = await query(`SELECT slug FROM shaders`);
  return res.map(({ slug }) => slug);
};

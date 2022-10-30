import { complexNumbers } from './complexNumbers';

export interface iShader {
  id: string;
  shader: string;
}

export const shaders: iShader[] = [
  {
    id: 'complex',
    shader: complexNumbers,
  },
];

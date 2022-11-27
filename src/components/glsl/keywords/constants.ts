import { preventDuplicateFunctions } from './functions';

export const constantKeywords = preventDuplicateFunctions([
  'gl_MaxVertexAttribs',
  'gl_MaxVertexUniformVectors',
  'gl_MaxVertexUniformComponents',
  'gl_MaxVertexOutputComponents',
  // TODO: add more constants from the 7.3 section of GLSLangSpec.4.60.pdf
]);

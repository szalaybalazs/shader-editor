import { preventDuplicateFunctions } from './functions';

export const directiveKeywords = preventDuplicateFunctions([
  '#',
  '#define',
  '#undef',
  '#if',
  '#ifdef',
  '#ifndef',
  '#else',
  '#elif',
  '#endif',
  '#error',
  '#pragma',
  '#extension',
  '#version',
  '#line',
]);

import { preventDuplicateFunctions } from './functions';

export const storageKeywords = preventDuplicateFunctions([
  'in',
  'out',
  'uniform',
  'layout',
  'attribute',
  'varying',
  'precision',
  'highp',
  'mediump',
  'lowp',
]);

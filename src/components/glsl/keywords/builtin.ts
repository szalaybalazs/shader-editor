import { preventDuplicateFunctions } from './functions';

export const builtinKeywords = preventDuplicateFunctions([
  // language variables
  'gl_VertexID',
  'gl_InstanceID', // non-vulkan
  'gl_VertexIndex',
  'gl_InstanceIndex', // vulkan
  'gl_DrawID',
  'gl_BaseVertex',
  'gl_BaseInstance',
  'gl_Position',
  'gl_PointSize',
  'gl_ClipDistance',
  'gl_CullDistance', // perVertex

  // compatibility profile
  'gl_Color',
  'gl_SecondaryColor',
  'gl_Normal',
  'gl_Vertex',
  'gl_MultiTexCoord0',
  'gl_MultiTexCoord1',
  'gl_MultiTexCoord2',
  'gl_MultiTexCoord3',
  'gl_MultiTexCoord4',
  'gl_MultiTexCoord5',
  'gl_MultiTexCoord6',
  'gl_MultiTexCoord7',
  'gl_FogCoord',
]);

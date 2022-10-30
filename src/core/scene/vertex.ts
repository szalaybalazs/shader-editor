export const vertex_shader = `#version 300 es

layout(location = 0) in vec3 aVertexPosition;

void main() {
  gl_Position = vec4(aVertexPosition.xyz, 1.0);
}
`;

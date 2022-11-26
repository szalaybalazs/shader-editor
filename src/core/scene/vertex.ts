export const vertex_shader = `#version 300 es

layout(location = 0) in vec3 aVertexPosition;

out vec2 aUv;

void main() {
  gl_Position = vec4(aVertexPosition.xyz, 1.0);
  aUv = vec2(aVertexPosition.xy / 2.0);
}
`;

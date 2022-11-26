import { initShaderProgram } from './shader';
import { vertex_shader } from './vertex';

export interface iProgramInfo {
  program: WebGLProgram;
  attribLocations: {
    vertexPosition: number;
  };
  uniformLocations: {
    projectionMatrix: WebGLUniformLocation | null;
    modelViewMatrix: WebGLUniformLocation | null;
    time: WebGLUniformLocation | null;
    resolution: WebGLUniformLocation | null;
    mouse: WebGLUniformLocation | null;
  };
  textureLocations: { [key: string]: WebGLUniformLocation | null };
}

export class ProgramInfo {
  gl: WebGL2RenderingContext | null = null;
  shader: string = `#version 300 es

  precision mediump float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  
  out vec4 fragColor;
  
  void main()
  {
      fragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }`;

  shaderProgram: WebGLProgram | null = null;

  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
  }

  /**
   * Set fragment shader code
   */
  public setFragmentShader = (shader: string) => {
    this.shader = shader;
    this.init();
  };

  /**
   * Initialise shader programs
   */
  public init = () => {
    const gl = this.gl;
    if (!gl) throw new Error('PROGRAM::GETPROGRAMINFO - WebGL context is not initialized');

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    this.shaderProgram = initShaderProgram(gl, vertex_shader, this.shader);
  };

  public getProgramInfo = (): iProgramInfo => {
    const gl = this.gl;
    if (!gl) throw new Error('PROGRAM::GETPROGRAMINFO - WebGL context is not initialized');

    const shaderProgram = this.shaderProgram;
    if (!shaderProgram) throw new Error('PROGRAM::GETPROGRAMINFO - ShaderProgram is not initialized');

    return {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      },
      uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
        time: gl.getUniformLocation(shaderProgram, 'u_time'),
        resolution: gl.getUniformLocation(shaderProgram, 'u_resolution'),
        mouse: gl.getUniformLocation(shaderProgram, 'u_mouse'),
      },
      textureLocations: {
        u_texture_1: gl.getUniformLocation(shaderProgram, 'u_texture_1'),
        u_texture_2: gl.getUniformLocation(shaderProgram, 'u_texture_2'),
        u_texture_3: gl.getUniformLocation(shaderProgram, 'u_texture_3'),
        u_texture_4: gl.getUniformLocation(shaderProgram, 'u_texture_4'),
        u_texture_5: gl.getUniformLocation(shaderProgram, 'u_texture_5'),
        u_texture_6: gl.getUniformLocation(shaderProgram, 'u_texture_6'),
        u_texture_7: gl.getUniformLocation(shaderProgram, 'u_texture_7'),
        u_texture_8: gl.getUniformLocation(shaderProgram, 'u_texture_8'),
        u_texture_9: gl.getUniformLocation(shaderProgram, 'u_texture_9'),
        u_texture_10: gl.getUniformLocation(shaderProgram, 'u_texture_10'),
        u_texture_11: gl.getUniformLocation(shaderProgram, 'u_texture_11'),
        u_texture_12: gl.getUniformLocation(shaderProgram, 'u_texture_12'),
        u_texture_13: gl.getUniformLocation(shaderProgram, 'u_texture_13'),
        u_texture_14: gl.getUniformLocation(shaderProgram, 'u_texture_14'),
        u_texture_15: gl.getUniformLocation(shaderProgram, 'u_texture_15'),
        u_texture_16: gl.getUniformLocation(shaderProgram, 'u_texture_16'),
      },
    };
  };

  public bind = () => {
    const gl = this.gl;
    if (!gl) throw new Error('PROGRAM::BIND - WebGL context is not initialized');

    gl.useProgram(this.getProgramInfo().program);
  };
}

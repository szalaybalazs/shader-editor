import { iProgramInfo } from './program';

export interface iBuffers {
  position: WebGLBuffer;
}

export class Buffer {
  private positions: WebGLBuffer | null = null;

  gl: WebGL2RenderingContext | null = null;
  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
  }

  /**
   * Initialises the buffers
   */
  init = () => {
    const gl = this.gl;
    if (!gl) throw new Error('BUFFERS::INIT - WebGL context is not initialized');
    // Create a buffer for the square's positions.
    const positionBuffer = gl.createBuffer();

    if (!positionBuffer) throw new Error('Failed to create position buffer');
    // Select the positionBuffer as the one to apply buffer
    // operations to from here out.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Now create an array of positions for the square.
    const positions = [-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    this.positions = positionBuffer;
  };

  /**
   * Binds the vertex buffer
   */
  bind = (programInfo: iProgramInfo) => {
    const gl = this.gl;
    if (!gl) throw new Error('BUFFERS::BIND - WebGL context is not initialized');

    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;

    gl.bindBuffer(gl.ARRAY_BUFFER, this.positions);
    gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  };

  /**
   * Draw rectangle
   */
  draw = () => {
    const gl = this.gl;
    if (!gl) throw new Error('BUFFERS::DRAW - WebGL context is not initialized');
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  };
}

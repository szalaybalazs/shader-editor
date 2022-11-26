export const loadShader = (gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null => {
  const shader = gl.createShader(type);
  if (!shader) return null;

  // Send the source to the shader object
  gl.shaderSource(shader, source);

  // Compile the shader program
  gl.compileShader(shader);

  // See if it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error('An error occurred compiling the shaders: ' + info);
  }

  return shader;
};

/**
 * Initialises the shader programs
 * Loads them to the program
 * @param gl
 * @param vsSource
 * @param fsSource
 * @returns
 */
export const initShaderProgram = (gl: WebGL2RenderingContext, vsSource: string, fsSource: string) => {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const shaderProgram = gl.createProgram();

  if (!vertexShader || !fragmentShader) {
    throw new Error('Failed to initialise shaders, one or more of them are missing');
  }
  if (!shaderProgram) throw new Error('Failed to initialise shaders, shaderprogram is missing');

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    throw new Error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
  }

  return shaderProgram;
};

import { iProgramInfo } from './program';
import { Buffer } from './buffers';
import { ProgramInfo } from './program';

interface iVec2 {
  x: number;
  y: number;
}
export class Scene {
  gl: WebGLRenderingContext | null = null;

  buffers: Buffer | null = null;
  program: ProgramInfo | null = null;

  start: number = 0;
  previous: number = 0;
  lastFpsInvocation: number = 0;

  mouse: iVec2 = { x: 0, y: 0 };

  private onFpsChange: (fps: number) => void = () => {};

  constructor(canvas: HTMLCanvasElement) {
    this.gl = canvas.getContext('webgl2');
    if (this.gl) {
      this.buffers = new Buffer(this.gl);
      this.program = new ProgramInfo(this.gl);
    }
  }

  /**
   * Creates new scene using the canvas input
   * @returns
   */
  static createScene = (canvas?: HTMLCanvasElement | null) => {
    if (!canvas) return null;
    return new Scene(canvas);
  };

  /**
   * Initialising the scene
   */
  init = () => {
    const gl = this.gl;
    if (!gl) throw new Error('SCENE::INIT - WebGL context is not initialized');

    this.buffers?.init();
    this.program?.init();
  };

  /**
   * Set FPS callback
   */
  setOnFpsUpdate = (cb: (fps: number) => void) => {
    if (cb) this.onFpsChange = cb;
  };

  handleFps = (delta: number) => {
    const now = Date.now();
    if (now - this.lastFpsInvocation < 500) return;
    this.lastFpsInvocation = now;

    this.onFpsChange(1000 / delta);
  };

  /**
   * Set fragment shader pgoram
   */
  setShader = (shader: string) => {
    this.program?.setFragmentShader(shader);
  };

  /**
   * Set mouse position
   */
  setMousePosition = (pos: iVec2) => {
    this.mouse = pos;
  };

  /**
   * Drawing to canvas
   */
  public draw = () => {
    requestAnimationFrame(this.draw);

    const gl = this.gl;
    if (!gl) return console.log('SCENE:DRAW - WebGL context is not initialized');

    const programInfo = this.program?.getProgramInfo();
    if (!programInfo) return console.log('SCENE:DRAW - Program info could not be retrieved');

    this.clear();

    this.program?.bind();
    this.buffers?.bind(programInfo);

    // Set textures

    this.setUniforms(programInfo);
    this.buffers?.draw();
  };

  /**
   * Clear the previous render
   */
  public clear = () => {
    const gl = this.gl;
    if (!gl) throw new Error('SCENE::CLEAR - WebGL context is not initialized');

    gl.clearColor(0.1, 0.1, 0.1, 1.0); // Clear to black, fully opaque
    gl.clearDepth(1.0); // Clear everything
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Clear the canvas before we start drawing on it.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  };

  /**
   * Set uniforms of scene
   */
  public setUniforms = (programInfo: iProgramInfo) => {
    const gl = this.gl;
    if (!gl) throw new Error('SCENE::SET_UNIFORMS - WebGL context is not initialized');

    const now = Date.now();
    if (!this.start) this.start = now;
    const time = now - this.start;
    const delta = now - this.previous;
    this.handleFps(delta);
    this.previous = now;

    const { width, height } = gl.canvas.getBoundingClientRect();
    console.log(width, height);
    gl.canvas.height = height * 2;
    gl.canvas.width = width * 2;
    // Setting uniforms
    gl.uniform1f(programInfo.uniformLocations.time, time / 1000);
    gl.uniform2f(programInfo.uniformLocations.resolution, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(programInfo.uniformLocations.mouse, this.mouse.x ?? 0, this.mouse.y ?? 0);
  };
}

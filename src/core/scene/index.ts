import { iProgramInfo } from './program';
import { Buffer } from './buffers';
import { ProgramInfo } from './program';
import { Texture } from './texture';
import { tBuffer } from '../../database/models/Shader';

interface iVec2 {
  x: number;
  y: number;
}
export class Scene {
  gl: WebGL2RenderingContext | null = null;

  buffers: Buffer | null = null;
  program: ProgramInfo | null = null;

  start: number = 0;
  previous: number = 0;
  lastFpsInvocation: number = 0;

  textures: Texture[] = [];

  mouse: iVec2 = { x: 0, y: 0 };

  private onFpsChange: (fps: number) => void = () => {};

  constructor(canvas: HTMLCanvasElement) {
    this.gl = canvas.getContext('webgl2', { preserveDrawingBuffer: true });
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
   * Set buffesr for scene
   * @param buffers
   */
  setBuffers = (buffers?: tBuffer[]) => {
    const orderedBuffers = buffers?.sort((a, b) => a.index - b.index) || [];

    this.textures = orderedBuffers.map((buffer) => {
      if (buffer.type === 'TEXTURE') {
        const src = `${process.env.NEXT_PUBLIC_STATIC_ENDPOINT}${buffer.key}`;
        return new Texture(this.gl, src);
      }

      return new Texture(this.gl, '/favicon.ico');
    });

    this.textures.map((texture) => texture.init());
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
  public draw = (options: { keepFrame?: boolean; timestamp?: number; dimensions?: [number, number] } = {}) => {
    if (!options?.keepFrame) requestAnimationFrame(() => this.draw(options));

    const gl = this.gl;
    if (!gl) return console.log('SCENE:DRAW - WebGL context is not initialized');

    const programInfo = this.program?.getProgramInfo();
    if (!programInfo) return console.log('SCENE:DRAW - Program info could not be retrieved');

    this.clear();

    this.program?.bind();
    this.buffers?.bind(programInfo);

    // Set textures
    this.textures.map((t, index) => t.bind(programInfo, index));

    this.setUniforms(programInfo, options.timestamp, options.dimensions);
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
  public setUniforms = (programInfo: iProgramInfo, timestamp?: number, dimensions?: [number, number]) => {
    const gl = this.gl;
    if (!gl) throw new Error('SCENE::SET_UNIFORMS - WebGL context is not initialized');

    const now = Date.now();
    if (!this.start) this.start = now;
    const time = timestamp ?? now - this.start;
    const delta = now - this.previous;
    this.handleFps(delta);
    this.previous = now;

    if (!dimensions) {
      const { width, height } = gl.canvas.getBoundingClientRect();
      gl.canvas.height = height * 2;
      gl.canvas.width = width * 2;
    } else {
      gl.canvas.width = dimensions[0];
      gl.canvas.height = dimensions[1];
    }
    // Setting uniforms
    gl.uniform1f(programInfo.uniformLocations.time, time / 1000);
    gl.uniform2f(programInfo.uniformLocations.resolution, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(programInfo.uniformLocations.mouse, this.mouse.x ?? 0, this.mouse.y ?? 0);
  };
}

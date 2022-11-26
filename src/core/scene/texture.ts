import { iProgramInfo } from './program';

const isPowerOf2 = (value: number): boolean => {
  return (value & (value - 1)) == 0;
};

export class Texture {
  gl: WebGLRenderingContext | null = null;
  texture: WebGLTexture | null = null;

  private level = 0;
  private internalFormat = 6408; // gl.RGBA
  private width = 1;
  private height = 1;
  private border = 0;
  private srcFormat = 6408; // gl.RGBA
  private srcType = 5121; // gl.UNSIGNED_BYTE;
  private pixel = new Uint8Array([255, 0, 255, 255]); // opaque purple

  private textureKeys: number[] = [];

  private src: string = '';

  constructor(gl: WebGLRenderingContext, src: string) {
    this.gl = gl;
    this.src = src;
  }

  /**
   * Loads image to vram and assigns it to the texture
   */
  public load = (src: string): Promise<void> => {
    return new Promise((res) => {
      if (!this.texture) throw new Error('TEXTURE::LOAD - Trying to access uninitialised texture');
      const gl = this.gl;
      if (!gl) throw new Error('TEXTURE::LOAD - WebGL context is missing');

      // Loading image
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.onload = () => {
        // binding texture and setting value
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, this.level, this.internalFormat, this.srcFormat, this.srcType, image);

        // Generating mipmaps
        if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
          gl.generateMipmap(gl.TEXTURE_2D);
        } else {
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        }

        gl.bindTexture(gl.TEXTURE_2D, null);

        res();
      };
      image.src = src;
    });
  };

  /**
   * Generates the texture
   * @returns
   */
  public init = async (): Promise<void> => {
    const gl = this.gl;
    if (!gl) throw new Error('TEXTURE::INIT - WebGL context is not initialized');

    this.textureKeys = [gl.TEXTURE0, gl.TEXTURE1, gl.TEXTURE2, gl.TEXTURE3, gl.TEXTURE4, gl.TEXTURE5];

    this.texture = gl.createTexture();

    if (!this.texture) throw new Error('TEXTURE::INIT - Failed to create texture');

    gl.bindTexture(gl.TEXTURE_2D, this.texture);

    // Setting default values
    this.internalFormat = gl.RGBA;
    this.srcFormat = gl.RGBA;
    this.srcType = gl.UNSIGNED_BYTE;

    gl.texImage2D(
      gl.TEXTURE_2D,
      this.level,
      this.internalFormat,
      this.width,
      this.height,
      this.border,
      this.srcFormat,
      this.srcType,
      this.pixel,
    );

    await this.load(this.src);
  };

  /**
   * Binds the texture to the shader program
   * @param programInfo
   * @param unit
   */
  public bind = (programInfo: iProgramInfo, unit: number) => {
    const gl = this.gl;
    if (!gl) throw new Error('TEXTURE::BIND - WebGL context is not initialized');

    // Bind textures
    // Tell WebGL we want to affect texture unit 0
    gl.activeTexture(this.textureKeys[unit]);

    // Bind the texture to texture unit 0
    gl.bindTexture(gl.TEXTURE_2D, this.texture);

    // Tell the shader we bound the texture to texture unit #i
    const textureKey: string = `u_texture_${unit}`;
    const position = programInfo.textureLocations[textureKey];
    gl.uniform1i(position, unit);
  };
}

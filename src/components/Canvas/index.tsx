import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { tBuffer } from '../../database/models/Shader';
import { useDimensions } from './useDimensions';
import { useWebGL } from './useWebgl';

interface iCanvasProps {
  shader: string;
  buffers?: tBuffer[];
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  span {
    opacity: 0;
  }
  &:hover span {
    opacity: 0.6;
  }
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
`;

const CanvasComponent = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: var(--background-secondary);
`;

const FPS = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 0.875rem;
  font-family: var(--font-code);
  opacity: 0.6;
  font-weight: 500;
  transition: 320ms;
`;

const ErrorOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--background-primary-translucent);
  backdrop-filter: blur(8px);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-inline: 16px;
`;

const ErrorTitle = styled.strong`
  font-size: 1.5rem;
  font-weight: 500;
`;
const ErrorContent = styled.p`
  font-family: var(--font-code);
  opacity: 0.8;
  margin: 0;
  margin-top: 16px;
`;

const Svg = styled.svg`
  width: 42px;
  height: 42px;
  margin-bottom: 24px;
  color: var(--colour-red);
`;

const Canvas: FC<iCanvasProps> = ({ shader, buffers }) => {
  const { canvas, fps, errors, scene } = useWebGL(shader);
  const { wrapper } = useDimensions();

  useEffect(() => {
    // @ts-ignore
    window.__CANVAS = canvas.current;
  }, [canvas]);

  useEffect(() => {
    scene.current.setBuffers(buffers);
  }, [buffers]);

  const _handleMouseMove = ({ pageX, pageY }) => {
    const { left, top, width, height } = wrapper.current.getBoundingClientRect();

    const x = (pageX - left) / width;
    const y = (pageY - top) / height;

    scene.current.setMousePosition({ x, y: Math.abs(1 - y) });
  };

  return (
    <Wrapper onMouseMove={_handleMouseMove} ref={wrapper} className='canvas-wrapper'>
      <Content>
        {!!errors.length && (
          <ErrorOverlay>
            <Svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='12' cy='12' r='10'></circle>
              <line x1='12' y1='8' x2='12' y2='12'></line>
              <line x1='12' y1='16' x2='12.01' y2='16'></line>
            </Svg>
            <ErrorTitle>Failed to compile shader</ErrorTitle>
            <ErrorContent>
              {errors.map((error, index) => (
                <div key={index.toString()}>
                  {error.line}:{error.column} '{error.word}': {error.message}
                </div>
              ))}
            </ErrorContent>
          </ErrorOverlay>
        )}
        <FPS>FPS: {fps.toFixed(0)}</FPS>
        <CanvasComponent ref={canvas} width={2048} height={2048} />
      </Content>
    </Wrapper>
  );
};

export default Canvas;

import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useWebGL } from './Canvas/useWebgl';
import Tabs from './Tabs';

const CanvasComponent = styled.canvas`
  position: fixed;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: scale(0.1);
  transform-origin: top left;
  /* display: none; */
`;

interface iShareProps {
  code: string;
}

const createTarget = (multiplier: number = 1) => {
  const target = document.createElement('canvas');
  target.width = 1024 * multiplier;
  target.height = 1024 * multiplier;
  target.style.width = `${multiplier * 1024}px`;
  target.style.height = `${multiplier * 1024}px`;

  return target;
};

const Share: FC<iShareProps> = ({ code }) => {
  const [type, setType] = useState('LINK');

  // const _handleRecord = async () => {
  //   const target = createTarget();
  //   const ctx = target.getContext('2d');
  //   let isRecording = true;

  //   const _copy = () => {
  //     ctx.drawImage(canvas.current, 0, 0, target.width, target.height);
  //     if (isRecording) {
  //       requestAnimationFrame(_copy);
  //     }
  //   };
  //   _copy();

  //   const url = await record(target, 10000);

  //   isRecording = false;

  //   target.remove();
  //   // const { CanvasCapture } = await import('canvas-capture');

  //   // if (CanvasCapture.isRecording()) {
  //   //   await CanvasCapture.stopRecord();
  //   // } else {
  //   //   const target = createTarget();
  //   //   const ctx = target.getContext('2d');

  //   //   CanvasCapture.init(target);
  //   //   CanvasCapture.beginVideoRecord({ format: 'webm' });

  //   //   console.log('recording');

  //   //   const _copy = () => {
  //   //     ctx.drawImage(canvas.current, 0, 0, 2048, 2048);
  //   //     if (CanvasCapture.isRecording()) {
  //   //       CanvasCapture.recordFrame();
  //   //       requestAnimationFrame(_copy);
  //   //     }
  //   //   };
  //   //   _copy();
  //   // }

  //   // CanvasCapture.isRecording

  //   // target.remove();

  //   var link$ = document.createElement('a');
  //   link$.setAttribute('download', 'recordingVideo');

  //   link$.setAttribute('href', url);
  //   link$.click();
  // };

  // const _handleImage = async () => {
  //   // document.body.appendChild(target);
  //   const target = createTarget(2);
  //   const ctx = target.getContext('2d');
  //   ctx.drawImage(canvas.current, 0, 0, target.width, target.height);

  //   // const vctx = videoCanvas.getContext('2d');
  //   // vctx.drawImage(canvas.current, 0, 0);
  //   const image = target.toDataURL();

  //   target.remove();

  //   var link$ = document.createElement('a');
  //   link$.setAttribute('download', 'screenshot.png');

  //   link$.setAttribute('href', image);
  //   link$.click();
  // };
  return (
    <>
      <Tabs
        active={type}
        onChange={setType}
        tabs={[
          { label: 'Link', value: 'LINK' },
          { label: 'Image', value: 'IMAGE' },
          { label: 'Video', value: 'VIDEO' },
          { label: 'Embed', value: 'EMBED' },
        ]}
      />

      {type === 'IMAGE' && <ImageShare code={code} />}
      {/* <button onClick={_handleRecord}>Record</button>
      <button onClick={_handleImage}>Image</button> */}
      {/* <CanvasComponent ref={canvas} /> */}
    </>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1;
  display: block;
  position: relative;
  border: 1px solid var(--colour-border);
  border-radius: 8px;
  overflow: hidden;
`;
const Image = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: black; //var(--background-secondary);
`;

const Loader = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--background-primary-translucent);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 16px;
  display: block;
  width: 100%;
  color: var(--colour-font-translucent);
`;

const Input = styled.input`
  display: block;
  border: 1px solid var(--colour-border);
  margin-top: 6px;
  width: 100%;
  height: 36px;
  background-color: var(--background-secondary);
  color: var(--colour-font);
  border-radius: 6px;
  font-family: var(--font-main);
  padding-left: 12px;
  box-sizing: border-box;
`;

const Side = styled.aside`
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  gap: 16px;
`;
interface iImageShare {
  code: string;
}
const ImageShare: FC<iImageShare> = ({ code }) => {
  const [dimensions, setDimensions] = useState(1024);
  const [timestamp, setTimestamp] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { canvas, scene } = useWebGL(code, { animated: false });

  const target = useRef<HTMLCanvasElement>();
  const timeout = useRef<any>();

  const _handleTimestamp = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const val = Number(value);
    if (Number.isNaN(val)) setTimestamp(0);
    else setTimestamp(val);
  };
  const _handleDimensions = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const val = Number(value);
    if (Number.isNaN(val)) setDimensions(32);
    else setDimensions(Math.min(5000, Math.max(32, val)));
  };

  const _handleKeyDown = (e: KeyboardEvent) => {
    if (e.key.length > 1) return;
    const key = e.key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    if (/^[A-Za-z]*$/.test(key) || ['e', ',', '.', '-', '+', '*', '/'].includes(key)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  useEffect(() => {
    setIsLoading(true);
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      const ctx = target.current!.getContext('2d');
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      scene.current.draw({ keepFrame: true, timestamp, dimensions: [dimensions, dimensions] });

      setTimeout(() => {
        ctx.drawImage(canvas.current, 0, 0, target.current.width, target.current.height);
        setIsLoading(false);
      }, 250);
    }, 500);
  }, [timestamp, dimensions]);

  return (
    <>
      <Content>
        <ImageWrapper>
          {isLoading && <Loader>Generating image...</Loader>}
          <Image width={dimensions} height={dimensions} ref={target} />
        </ImageWrapper>
        <Side>
          <Label>
            Snapshot timestamp (ms)
            <Input
              type='number'
              min='0'
              value={timestamp}
              onChange={_handleTimestamp}
              onKeyDown={_handleKeyDown as any}
            />
          </Label>
          <Label>
            Image dimensions (px)
            <Input
              type='number'
              min='0'
              max='7680'
              value={dimensions}
              onChange={_handleDimensions}
              onKeyDown={_handleKeyDown as any}
            />
          </Label>
        </Side>
      </Content>
      {typeof document !== 'undefined' &&
        createPortal(
          <CanvasComponent width={dimensions} height={dimensions} ref={canvas} />,
          document.querySelector('#canvas'),
        )}
    </>
  );
};

export default Share;

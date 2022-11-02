import { FC } from 'react';
import styled from 'styled-components';
import { record } from '../core/record';
import { useWebGL } from './Canvas/useWebgl';

const CanvasComponent = styled.canvas`
  width: 512px;
  height: 512px;
  position: fixed;
  z-index: -1;
`;

interface iShareProps {
  code: string;
}

const Share: FC<iShareProps> = ({ code }) => {
  const { canvas, fps, error } = useWebGL(code);

  const _handleRecord = async () => {
    console.log('recording');
    const url = await record(canvas.current, 5000);
    console.log(url);

    var link$ = document.createElement('a');
    link$.setAttribute('download', 'recordingVideo');

    link$.setAttribute('href', url);
    link$.click();
  };

  const _handleImage = async () => {
    const videoCanvas = document.createElement('canvas');
    document.body.appendChild(videoCanvas);
    videoCanvas.width = 1024;
    videoCanvas.height = 1024;
    const vctx = videoCanvas.getContext('2d');
    vctx.drawImage(canvas.current, 0, 0);
    const image = videoCanvas.toDataURL();

    // const blob = await videoCanvas[
    //   videoCanvas
    //     ? 'convertToBlob' // specs
    //     : 'toBlob' // current Firefox
    // ]().then((blob) => new FileReader().readAsDataURL(blob));
    // console.log(blob);
    // const image = canvas.current.toDataURL('image/png'); //.replace('image/png', 'image/octet-stream'); // here is the most important part because if you dont replace you will get a DOM 18 exception.

    var link$ = document.createElement('a');
    link$.setAttribute('download', 'recordingVideo');

    link$.setAttribute('href', image);
    link$.click();
  };
  return (
    <>
      <button onClick={_handleRecord}>Record</button>
      <button onClick={_handleImage}>Image</button>
      <CanvasComponent ref={canvas} width={512} height={512} />
    </>
  );
};

export default Share;

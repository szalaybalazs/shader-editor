import { FunctionComponent, useEffect, useState } from 'react';
import toast, { LoaderIcon } from 'react-hot-toast';
import styled from 'styled-components';
import progress from '../core/progress';
import { tBuffer } from '../database/models/Shader';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: 24px;
`;
const BufferWrapperBase = styled.div`
  min-height: 48px;
  margin-bottom: 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-inline: 16px;
`;
const BufferWrapper = styled(BufferWrapperBase)`
  background: var(--background-secondary);
  padding-block: 8px;
`;
const BufferNewWrapper = styled.div<{ dragging: boolean }>`
  flex: 1;
  transition: 240ms;
  border: 2px dashed ${(p) => (p.dragging ? 'var(--colour-primary)' : 'var(--colour-border)')};
  background-color: ${(p) => (p.dragging ? 'var(--colour-primary-5)' : 'transparent')};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BufferIndex = styled.span`
  opacity: 0.4;
  font-family: var(--font-code);
  font-size: 0.875rem;
  width: 24px;
`;
const BufferName = styled.span`
  font-size: 0.875rem;
  font-size: 500;
`;
const BufferFileName = styled.span`
  font-size: 0.875rem;
  font-size: 500;
  opacity: 0.4;
  text-decoration: underline;
  padding-left: 12px;
`;
const BufferNewTitle = styled.span`
  font-size: 0.875rem;
  text-align: center;
  font-weight: 500;
  display: block;
  width: 100%;
  color: var(--colour-white);
`;
const RemoveButton = styled.button`
  margin-left: auto;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 16px;
  transition: 320ms;
  &:hover {
    color: var(--colour-red);
    background-color: var(--colour-red-hover);
  }
  &:active {
    background-color: var(--colour-red-active);
  }
  &:focus {
    box-shadow: 0 0 0 4px var(--colour-red-focus);
  }
`;

interface iBuffersProps {
  buffers: tBuffer[];
  setBuffers: (buffers: tBuffer[]) => void;
}

const Buffers: FunctionComponent<iBuffersProps> = ({ buffers: initialBuffers, setBuffers: setInitialBuffers }) => {
  const [buffers, setBuffers] = useState(initialBuffers);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const _handleRemove = (index: number) => () => {
    const _buffers = [...buffers];
    _buffers.splice(index, 1);
    setBuffers(_buffers);
  };

  useEffect(() => {
    setInitialBuffers(buffers);
  }, [buffers]);

  const _handleDragging = (e) => {
    setIsDragging(true);
    e.stopPropagation();
    e.preventDefault();
  };
  const _handleDragExit = () => {
    setIsDragging(false);
  };

  const _handleDrop = async (e: any) => {
    progress.start();
    e.preventDefault();
    setIsDragging(false);
    setIsLoading(true);

    try {
      const { items, files } = e.dataTransfer;
      const file = items ? items[0]?.getAsFile() : files?.[0];

      if (!String(file.type).startsWith('image/')) throw new Error('NOT_IMAGE');
      const upload = await fetch('/api/attachment/uri', {
        method: 'POST',
        body: JSON.stringify({ category: 'texture', name: file.name, type: file.type }),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => res.json());

      const { key, id, url } = upload;

      const headers = new Headers({ 'Content-Type': file.type });
      const res = await fetch(url, {
        method: 'PUT',
        headers,
        body: file,
      });

      if (res.status !== 200) throw new Error('FAILED');

      setBuffers([...buffers, { type: 'TEXTURE', key, id, index: buffers.length, filename: file.name }]);
    } catch (error) {
      if (error.message === 'NOT_IMAGE') toast.error('Currently only image textures are supported.');
      else if (error.message === 'FAILED') toast.error('Failed to upload image, please try again later.');
    } finally {
      progress.done();
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      {buffers.map((buffer, index) => (
        <Buffer buffer={buffer} id={buffer.id} onRemove={_handleRemove(index)} key={buffer.id} />
      ))}
      <BufferNewWrapper
        onDrop={_handleDrop}
        onDragOver={_handleDragging}
        onDragLeave={_handleDragExit}
        dragging={isDragging}
      >
        {isLoading ? <LoaderIcon /> : <BufferNewTitle>Drop new image files here</BufferNewTitle>}
      </BufferNewWrapper>
    </Wrapper>
  );
};

// todo: display image on hover
interface iBufferProps {
  id: string;
  buffer: tBuffer;
  onRemove: () => void;
}
const Buffer: FunctionComponent<iBufferProps> = ({ buffer, id, onRemove }) => {
  return (
    <BufferWrapper key={buffer.id}>
      <BufferIndex>{buffer.index}.</BufferIndex>
      <BufferName>{buffer.type === 'TEXTURE' ? 'Texture' : 'Render'}</BufferName>
      {buffer.type === 'TEXTURE' && <BufferFileName>{buffer.filename}</BufferFileName>}
      <RemoveButton type='button' onClick={onRemove}>
        &times;
      </RemoveButton>
    </BufferWrapper>
  );
};

export default Buffers;

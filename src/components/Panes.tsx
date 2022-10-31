import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { panesAtom } from '../atoms/view';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: 1;
`;

const Segment = styled.div<{ segmentWidth: number }>`
  height: 100vh;
  display: flex;
  overflow: auto;
`;

const Devider = styled.div`
  width: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ew-resize;
  opacity: 0.4;
  transition: opacity 320ms;
  background-color: var(--background-secondary);
  &:hover {
    opacity: 1;
  }
`;
const Handler = styled.div`
  width: 2px;
  height: 32px;
  border-radius: 50px;
  background-color: var(--colour-font);
  opacity: 0.6;
`;

interface iPanesProps {
  left: ReactNode;
  right: ReactNode;
}

const Panes: FC<iPanesProps> = ({ left, right }) => {
  const [width, setWidth] = useRecoilState(panesAtom);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panes = localStorage.getItem('panes');
    if (panes) setWidth(Number(panes));
  }, []);

  const _handleMouseMove = useCallback(
    (e) => {
      const { width, left } = wrapper.current.getBoundingClientRect();
      const { clientX } = e;
      const relativeWidth = (clientX - left) / width;
      const collapseSize = 200 / width;
      const value = relativeWidth < collapseSize ? 0 : relativeWidth > 1 - collapseSize ? 1 : relativeWidth;
      setWidth(value);
    },
    [setWidth],
  );
  console.log(width);

  const _handleMouseUp = () => {
    document.body.classList.remove('resizing-horizontal');
    window.removeEventListener('mousemove', _handleMouseMove);
    window.removeEventListener('mouseup', _handleMouseUp);
  };

  const _handleMouseDown = () => {
    document.body.classList.add('resizing-horizontal');
    window.addEventListener('mousemove', _handleMouseMove);
    window.addEventListener('mouseup', _handleMouseUp);
  };

  return (
    <Wrapper ref={wrapper}>
      <Segment style={{ width: `calc(${width * 100}% - 6px)` }} segmentWidth={width}>
        {width > 0 && left}
      </Segment>
      <Devider onMouseDown={_handleMouseDown}>
        <Handler />
      </Devider>
      <Segment style={{ width: `calc(${(1 - width) * 100}% - 6px)` }} segmentWidth={1 - width}>
        {width < 1 && right}
      </Segment>
    </Wrapper>
  );
};

export default Panes;

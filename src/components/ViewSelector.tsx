import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { eViewOption } from '../types/view';
import FullIcon from './icons/Full';
import Overlay from './icons/Overlay';
import SplitPaneIcon from './icons/SplitPane';

const ViewSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 4px;
  gap: 2px;
  background-color: var(--background-secondary);
`;

const ViewOption = styled.button<{ active: boolean }>`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  background-color: transparent;
  color: ${(p) => (p.active ? 'var(--colour-primary)' : 'var(--colour-font)')};
  opacity: ${(p) => (p.active ? 1 : 0.8)};
  z-index: 2;
  transition: 160ms;
  cursor: pointer;
  svg {
    height: 16px;
  }
  &:hover {
  }
`;

const Background = styled.div<{ offsetLeft: number }>`
  height: 36px;
  width: 36px;
  transform: translateX(${(p) => p.offsetLeft}px);
  background-color: var(--border-colour);
  position: absolute;
  border-radius: 6px;
  transition: 160ms ease-in-out;
`;

const offsets = {
  SPLIT: 0,
  OVERLAY: 36 + 2,
  FULL: 72 + 4,
};

interface iViewSelectorProps {
  active: eViewOption;
  onViewChange: (view: eViewOption) => void;
}

const ViewSelector: FC<iViewSelectorProps> = ({ active, onViewChange }) => {
  const [activeOption, setActiveOption] = useState(active);

  const _handleHighlight = (view: eViewOption) => () => setActiveOption(view);
  const _handleSelect = (view: eViewOption) => () => onViewChange(view);
  const _handleMouseLeave = () => setActiveOption(active);

  useEffect(() => {
    setActiveOption(active);
  }, [active]);

  return (
    <ViewSelectorWrapper onMouseLeave={_handleMouseLeave}>
      <ViewOption active={'SPLIT' === active} onMouseEnter={_handleHighlight('SPLIT')} onClick={_handleSelect('SPLIT')}>
        <SplitPaneIcon />
      </ViewOption>
      <ViewOption
        active={'OVERLAY' === active}
        onMouseEnter={_handleHighlight('OVERLAY')}
        onClick={_handleSelect('OVERLAY')}
      >
        <Overlay />
      </ViewOption>
      <ViewOption active={'FULL' === active} onMouseEnter={_handleHighlight('FULL')} onClick={_handleSelect('FULL')}>
        <FullIcon />
      </ViewOption>
      <Background offsetLeft={offsets[activeOption]} />
    </ViewSelectorWrapper>
  );
};

export default ViewSelector;

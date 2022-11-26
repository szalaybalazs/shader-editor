import { FC, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding: 4px;
  background-color: var(--background-secondary);
  border-radius: 8px;
  /* width: fit-content; */
`;
const Tab = styled.button<{ active: boolean }>`
  background-color: transparent;
  border-radius: 6px;
  padding: 12px 36px;
  border: none;
  position: relative;
  z-index: 2;
  font-weight: 500;
  font-family: var(--font-main);
  opacity: ${(p) => (p.active ? 1 : 0.6)};
  transition: 320ms ease-in-out;
  color: ${(p) => (p.active ? 'var(--colour-primary)' : 'var(--colour-main)')};
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;

const Background = styled.div`
  background-color: var(--border-colour);
  position: absolute;
  transition: 320ms ease-in-out;
  border-radius: 6px;
  opacity: 0.6;
`;

interface iTabsProps {
  tabs: { label: string; value: string }[];
  active: string;
  onChange: (tab: string) => void;
}

const Tabs: FC<iTabsProps> = ({ tabs, active, onChange }) => {
  const [highlighted, setHighlighted] = useState('');
  const refs = useRef<{ [key: string]: HTMLButtonElement }>({});
  const wrapper = useRef<HTMLDivElement>(null);

  const { width, offset, height } = useMemo(() => {
    const button = refs.current[highlighted];
    if (!button || !wrapper.current) return { width: 0, offset: 0, height: 36 };

    const { left: wrapperLeft } = wrapper.current!.getBoundingClientRect();
    const { width, left, height } = button.getBoundingClientRect();

    return { width, offset: left - wrapperLeft, height };
  }, [highlighted, refs, wrapper]);

  useEffect(() => {
    setHighlighted(active);
  }, [active]);

  return (
    <Wrapper ref={wrapper} onMouseLeave={() => setHighlighted(active)}>
      {tabs.map((tab) => (
        <Tab
          onClick={() => onChange(tab.value)}
          onMouseEnter={() => setHighlighted(tab.value)}
          ref={(ref) => (refs.current[tab.value] = ref)}
          active={active === tab.value}
        >
          {tab.label}
        </Tab>
      ))}
      <Background style={{ width, left: offset, height }} />
    </Wrapper>
  );
};

export default Tabs;

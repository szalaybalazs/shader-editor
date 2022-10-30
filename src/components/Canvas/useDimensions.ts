import { useEffect, useRef, useState } from 'react';

export const useDimensions = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const timeout = useRef<any>(null);
  const [dimensions, setDimensions] = useState([0, 0]);
  const [visible, setVisible] = useState(false);

  const _handleLayout = () => {
    if (!wrapper.current) return null;
    const { width, height } = wrapper.current.getBoundingClientRect();
    setVisible(true);
    setDimensions([width, height]);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setVisible(false), 500);
  };

  useEffect(() => {
    _handleLayout();

    const resizeObserver = new ResizeObserver(() => _handleLayout());
    if (wrapper.current) resizeObserver.observe(wrapper.current);

    return () => resizeObserver.disconnect();
  }, []);
  return { wrapper, dimensions, visible };
};

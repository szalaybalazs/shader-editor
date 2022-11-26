import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalAtom } from '../../atoms/modal';

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 1024;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(p) => (p.visible ? 1 : 0)};
  visibility: ${(p) => (p.visible ? 'visible' : 'hidden')};
  transition: 240ms;
`;
const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.6;
`;
const Wrapper = styled.div<{ visible: boolean }>`
  width: 640px;
  min-height: 560px;
  background-color: var(--background-primary);
  /* border: 1px solid var(--colour-border); */
  z-index: 2;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.4), 0 0 16px 0 rgba(0, 0, 0, 0.2);
  transition: 240ms ease-in-out;
  transform: scale(${(p) => (p.visible ? 1 : 0.4)});
  display: flex;
  flex-direction: column;
`;

const Title = styled.strong`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;
const Subtitle = styled.span`
  display: block;
  font-size: 1rem;
  margin-top: 4px;
  color: var(--colour-font);
  opacity: 0.6;
`;
const Header = styled.div`
  padding: 16px 24px;
  position: relative;
`;

const CloseWrapper = styled.button`
  height: 42px;
  width: 42px;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
  border-radius: 6px;
  font-size: 24px;
  color: var(--colour-font);
  font-weight: lighter;
  opacity: 0.6;
  transition: 240ms;
  &:hover {
    opacity: 1;
    background-color: var(--background-secondary);
  }
`;

const Content = styled.div`
  flex: 1;
  padding-inline: 24px;
  display: flex;
  flex-direction: column;
`;

interface iModalProps {}

const Modal: FC<iModalProps> = () => {
  const [modalState, setModal] = useRecoilState(modalAtom);

  const [modal, setPresentedModal] = useState(modalState);

  const _handleClose = () => setModal(null);

  useEffect(() => {
    if (modalState) setPresentedModal(modalState);
  }, [modalState]);

  useEffect(() => {
    const _handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModal(null);
    };

    window.addEventListener('keydown', _handleKey);
    return () => window.removeEventListener('keydown', _handleKey);
  }, [setModal]);

  const visible = !!modalState;

  return (
    <Container visible={visible}>
      <Backdrop onClick={_handleClose} />
      <Wrapper visible={visible}>
        <Header>
          <Title>{modal?.title}</Title>
          <Subtitle>{modal?.subtitle}</Subtitle>
          <CloseWrapper onClick={_handleClose}>&times;</CloseWrapper>
        </Header>
        <Content>{modal?.content}</Content>
      </Wrapper>
    </Container>
  );
};

export default Modal;

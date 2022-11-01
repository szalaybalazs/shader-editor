import { ReactNode } from 'react';
import { atom } from 'recoil';

export interface iModalProps {
  title: string;
  subtitle: string;
  content: ReactNode;
}

export const modalAtom = atom({
  key: 'modal',
  default: null as iModalProps | null,
});

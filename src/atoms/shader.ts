import { Monaco } from '@monaco-editor/react';
import { ReactNode } from 'react';
import { atom } from 'recoil';

export const errorAtom = atom({
  key: 'error',
  default: [] as { line: number; column: number; length: number; message: string; word: string }[],
});
export const monacoAtom = atom({
  key: 'monaco',
  default: null as Monaco | null,
});

import { atom } from 'recoil';

import { eViewOption } from '../types/view';

const localStorageEffect =
  (key: string) =>
  ({ onSet }) => {
    if (typeof window !== 'undefined') {
      onSet((newValue: any, _, isReset) => {
        if (isReset) localStorage.removeItem(key);
        else localStorage.setItem(key, newValue);
      });
    }
  };

export const viewAtom = atom({
  key: 'view',
  default: 'SPLIT' as eViewOption,
  effects: [localStorageEffect('view')],
});

export const panesAtom = atom({
  key: 'panes',
  default: 0.5,
  effects: [localStorageEffect('panes')],
});

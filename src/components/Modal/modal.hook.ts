import { useRecoilCallback } from 'recoil';
import { modalAtom } from '../../atoms/modal';

export const useModal = () => {
  const _handleOpenModal = useRecoilCallback(
    ({ set }) =>
      (title: string, subtitle: string, content: JSX.Element) => {
        set(modalAtom, {
          title,
          subtitle,
          content,
        });
      },
    [],
  );

  return { open: _handleOpenModal };
};

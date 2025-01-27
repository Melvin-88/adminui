import { useEffect } from 'react';

const preventScroll = (event: Event): void => event.preventDefault();

const useBodyScrollLock = (isLocked: boolean): void => {
  useEffect(
    (): (() => void) | void => {
      if (!isLocked) {
        return;
      }

      document.body.style.overflow = 'hidden';
      document.body.addEventListener('scroll', preventScroll);

      return (): void => {
        document.body.style.overflow = 'auto';
        document.body.removeEventListener('scroll', preventScroll);
      };
    },
    [isLocked],
  );
};

export default useBodyScrollLock;

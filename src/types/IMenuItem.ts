import { ReactNode } from 'react';

export default interface IMenuItem {
  label: ReactNode;
  value: string;
  onClick?: (value: string) => void;
}


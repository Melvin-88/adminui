import { BadgeProps } from '@material-ui/core';
import { ReactNode } from 'react';

export default interface IButtonBadgeProps extends Required<Pick<BadgeProps, 'color'>> {
  value?: ReactNode;
}

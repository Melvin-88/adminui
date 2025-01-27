import { ComponentType } from 'react';
import { SvgIconProps } from '@material-ui/core';

import { IButtonProps } from '^controls/Button';

import IMenuItem from './IMenuItem';

export default interface IPageHeaderAction<
  MenuItemType extends IMenuItem = IMenuItem
>
  extends Pick<
      IButtonProps<MenuItemType>,
      | 'className'
      | 'color'
      | 'disabled'
      | 'variant'
      | 'loading'
      | 'menuItems'
      | 'badgeProps'
      | 'groupMenuItemsBy'
    >,
    Omit<IMenuItem, 'onClick' | 'value'> {
  value?: string;
  Icon: ComponentType<SvgIconProps>;
  onClick?: (value?: string) => void;
  type?: 'button' | 'icon';
}

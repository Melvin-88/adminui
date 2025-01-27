import { ComponentType } from 'react';
import { SvgIconProps } from '@material-ui/core';

import { IButtonProps } from '^controls/Button';

import IMenuItem from './IMenuItem';

export default interface INavigationMenuItem<
  MenuItemType extends IMenuItem = IMenuItem
> extends IMenuItem,
    Pick<
      IButtonProps<MenuItemType>,
      | 'disabled'
      | 'tabIndex'
      | 'className'
      | 'innerRef'
      | 'type'
      | 'MenuItem'
      | 'menuItems'
      | 'getMenuItemSelected'
      | 'badgeProps'
      | 'groupMenuItemsBy'
    > {
  Icon: ComponentType<SvgIconProps>;
}

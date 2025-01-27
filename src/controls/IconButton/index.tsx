import React, {
  ComponentType,
  ElementType,
  ReactElement,
  ReactNode,
} from 'react';
import {
  IconButton as BaseIconButton,
  IconButtonProps,
  CircularProgress,
  Tooltip,
  Badge,
} from '@material-ui/core';

import IMenuItem from '^types/IMenuItem';
import { IMenuItemProps } from '^common/MenuItem';
import IButtonBadgeProps from '^types/IButtonBadgeProps';
import TWithOverridableComponent from '^types/TWithOverridableComponent';
import MenuWrapper from '^common/MenuWrapper';

export interface IIconButtonProps<MenuItemType extends IMenuItem = IMenuItem>
  extends Pick<
    IconButtonProps,
    | 'children'
    | 'color'
    | 'disabled'
    | 'size'
    | 'tabIndex'
    | 'className'
    | 'innerRef'
    | 'type'
    | 'onClick'
  > {
  label?: ReactNode;
  menuItems?: MenuItemType[];
  loading?: boolean;
  badgeProps?: IButtonBadgeProps;
  MenuItem?: ComponentType<IMenuItemProps<MenuItemType>>;
  getMenuItemSelected?: (item: MenuItemType) => boolean;
  groupMenuItemsBy?: (item: MenuItemType) => string;
}

const IconButton = <
  MenuItemType extends IMenuItem = IMenuItem,
  RootComponent extends ElementType = 'button'
>(
    props: TWithOverridableComponent<
    RootComponent,
    IIconButtonProps<MenuItemType>
  >,
  ): ReactElement => {
  const {
    loading,
    menuItems,
    MenuItem,
    getMenuItemSelected,
    badgeProps,
    label,
    disabled,
    children,
    onClick,
    className,
    groupMenuItemsBy,
    ...rest
  } = props as IIconButtonProps<MenuItemType>;

  return (
    <Badge
      {...badgeProps}
      badgeContent={badgeProps?.value}
      className={className}
      overlap="circular"
    >
      <Tooltip
        placement="right"
        title={label || ''}
      >
        <MenuWrapper
          MenuItem={MenuItem}
          menuItems={menuItems}
          groupMenuItemsBy={groupMenuItemsBy}
          getMenuItemSelected={getMenuItemSelected}
          onClick={onClick}
        >
          <BaseIconButton
            disabled={loading || disabled}
            {...rest}
          >
            {loading ? (
              <CircularProgress
                color="inherit"
                size="1em"
              />
            ) : children}
          </BaseIconButton>
        </MenuWrapper>
      </Tooltip>
    </Badge>
  );
};

export default IconButton;

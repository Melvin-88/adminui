import React, {
  ComponentType,
  ElementType,
  ReactElement,
} from 'react';
import {
  Button as BaseButton,
  ButtonProps,
  CircularProgress,
  Badge,
} from '@material-ui/core';
import classNames from 'classnames';

import IMenuItem from '^types/IMenuItem';
import { IMenuItemProps } from '^common/MenuItem';
import IButtonBadgeProps from '^types/IButtonBadgeProps';
import TWithOverridableComponent from '^types/TWithOverridableComponent';
import MenuWrapper from '^common/MenuWrapper';

import styles from './styles.module.scss';

export interface IButtonProps<MenuItemType extends IMenuItem = IMenuItem>
  extends Pick<
    ButtonProps,
    | 'children'
    | 'color'
    | 'disabled'
    | 'endIcon'
    | 'size'
    | 'startIcon'
    | 'variant'
    | 'tabIndex'
    | 'className'
    | 'innerRef'
    | 'type'
    | 'onClick'
  > {
  menuItems?: MenuItemType[];
  loading?: boolean;
  fullWidth?: boolean;
  badgeProps?: IButtonBadgeProps;
  MenuItem?: ComponentType<IMenuItemProps<MenuItemType>>;
  getMenuItemSelected?: (item: MenuItemType) => boolean;
  groupMenuItemsBy?: <GroupMenuItemType extends MenuItemType = MenuItemType>(
    item: GroupMenuItemType
  ) => string;
}

const Button = <
  MenuItemType extends IMenuItem = IMenuItem,
  RootComponent extends ElementType = 'button'
>(
    props: TWithOverridableComponent<RootComponent, IButtonProps<MenuItemType>>,
  ): ReactElement => {
  const {
    loading,
    fullWidth,
    startIcon,
    menuItems,
    MenuItem,
    getMenuItemSelected,
    badgeProps,
    disabled,
    onClick,
    className,
    groupMenuItemsBy,
    ...rest
  } = props as IButtonProps<MenuItemType>;

  return (
    <Badge
      {...badgeProps}
      badgeContent={badgeProps?.value}
      className={classNames(
        {
          [styles.fullWidth]: fullWidth,
        },
        className,
      )}
    >
      <MenuWrapper
        MenuItem={MenuItem}
        menuItems={menuItems}
        groupMenuItemsBy={groupMenuItemsBy}
        getMenuItemSelected={getMenuItemSelected}
        onClick={onClick}
      >
        <BaseButton
          disabled={loading || disabled}
          fullWidth
          startIcon={
            loading ? (
              <CircularProgress
                color="inherit"
                size="1em"
              />
            ) : startIcon
          }
          {...rest}
        />
      </MenuWrapper>
    </Badge>
  );
};

export default Button;

import React, { forwardRef, ReactElement, MutableRefObject, useCallback } from 'react';
import { MenuItem as BaseMenuItem } from '@material-ui/core';
import classNames from 'classnames';

import IMenuItem from '^types/IMenuItem';

import styles from './styles.module.scss';

export type IMenuItemProps<MenuItemType extends IMenuItem> = {
  className?: string;
  selected?: boolean;
  onClick?: (value: MenuItemType['value']) => void;
} & MenuItemType;

export type TMenuItemRef = ((instance: HTMLLIElement | null) => void) | MutableRefObject<HTMLLIElement | null> | null;

const MenuItem = forwardRef(
  <MenuItemType extends IMenuItem>(
    { className, label, value, selected, onClick }: IMenuItemProps<MenuItemType>,
    ref: TMenuItemRef,
  ): ReactElement => {
    const handleClick = useCallback(
      (): void => {
        if (typeof onClick === 'function') {
          onClick(value);
        }
      },
      [value, onClick],
    );

    return (
      <BaseMenuItem
        ref={ref}
        className={
          classNames(
            styles.menuItem,
            {
              [styles.selected]: selected,
            },
            className,
          )
        }
        onClick={handleClick}
      >
        {label}
      </BaseMenuItem>
    );
  },
);

export default MenuItem;

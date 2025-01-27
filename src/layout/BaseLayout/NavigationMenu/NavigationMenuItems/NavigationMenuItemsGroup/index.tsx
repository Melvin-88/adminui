import classNames from 'classnames';
import React, { ReactElement, useMemo } from 'react';

import { useDeviceType } from '^common/DeviceTypeProvider';
import INavigationMenuItem from '^types/INavigationMenuItem';
import INavigationMenuItemsGroup from '^types/INavigationMenuItemsGroup';

import NavigationMenuItem, { INavigationMenuItemProps } from '../NavigationMenuItem';

import NavigationMenuDropdownItem from './NavigationMenuDropdownItem';
import styles from './styles.module.scss';

export interface INavigationMenuItemsGroupProps extends INavigationMenuItemsGroup {
  getItemSelected?: (item: INavigationMenuItem) => boolean;
  className?: string;
}

const NavigationMenuItemsGroup = ({ className, label, Icon, items, getItemSelected }: INavigationMenuItemsGroupProps): ReactElement | null => {
  const { isDesktop } = useDeviceType();

  const selected = useMemo(
    (): boolean => typeof getItemSelected === 'function' && items.some(getItemSelected),
    [getItemSelected, items],
  );

  const groupMenuItemProps = useMemo(
    (): INavigationMenuItemProps<INavigationMenuItem> => {
      const props: INavigationMenuItemProps<INavigationMenuItem> = {
        label,
        selected,
        Icon,
        value: '',
      };

      if (isDesktop) {
        return {
          ...props,
          MenuItem: NavigationMenuDropdownItem,
          menuItems: items,
          getMenuItemSelected: getItemSelected,
        };
      }

      return props;
    },
    [Icon, getItemSelected, isDesktop, items, label, selected],
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={classNames(styles.navigationMenuItemsGroup, className)}>
      <NavigationMenuItem {...groupMenuItemProps} />

      {!isDesktop && (
        <div className={styles.items}>
          {items.map((item: INavigationMenuItem): ReactElement => (
            <NavigationMenuItem
              key={item.value}
              {...item}
              selected={typeof getItemSelected === 'function' && getItemSelected(item)}
              className={classNames(styles.item, item.className)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationMenuItemsGroup;

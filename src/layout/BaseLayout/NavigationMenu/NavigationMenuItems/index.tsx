import classNames from 'classnames';
import React, { ReactElement } from 'react';

import INavigationMenuItem from '^types/INavigationMenuItem';
import INavigationMenuItemsGroup from '^types/INavigationMenuItemsGroup';
import TNavigationMenuItem from '^types/TNavigationMenuItem';

import NavigationMenuItemsGroup from './NavigationMenuItemsGroup';
import NavigationMenuItem from './NavigationMenuItem';
import styles from './styles.module.scss';

export interface INavigationMenuItemsProps {
  items: TNavigationMenuItem[];
  getItemSelected?: (item: INavigationMenuItem) => boolean;
  className?: string;
}

const NavigationMenuItems = ({ items, getItemSelected, className }: INavigationMenuItemsProps): ReactElement | null => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={classNames(styles.navigationMenuItems, className)}>
      {items.map((item: TNavigationMenuItem, key: number): ReactElement => {
        const group = item as INavigationMenuItemsGroup;

        if (group.items) {
          return (
            <NavigationMenuItemsGroup
              {...group}
              key={key}
              getItemSelected={getItemSelected}
              className={styles.itemsGroup}
            />
          );
        }

        const plainItem = item as INavigationMenuItem;

        return (
          <NavigationMenuItem
            {...plainItem}
            key={key}
            selected={typeof getItemSelected === 'function' && getItemSelected(plainItem)}
            className={classNames(styles.item, plainItem.className)}
          />
        );
      })}
    </div>
  );
};

export default NavigationMenuItems;

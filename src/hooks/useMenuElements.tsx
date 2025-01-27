import React, {
  ComponentType,
  ReactElement,
  useCallback,
  useMemo,
} from 'react';
import { ListSubheader } from '@material-ui/core';
import { groupBy } from 'lodash';

import IMenuItem from '^types/IMenuItem';
import DefaultMenuItem, { IMenuItemProps } from '^common/MenuItem';

interface IUseMenuItems<MenuItemType extends IMenuItem = IMenuItem> {
  menuItems?: MenuItemType[];
  MenuItem?: ComponentType<IMenuItemProps<MenuItemType>>;
  handleClose: () => void;
  groupMenuItemsBy?: (item: MenuItemType) => string;
  getMenuItemSelected?: (item: MenuItemType) => boolean;
}

const useMenuElements = <MenuItemType extends IMenuItem = IMenuItem>({
  menuItems,
  MenuItem,
  handleClose,
  groupMenuItemsBy,
  getMenuItemSelected,
}: IUseMenuItems<MenuItemType>): ReactElement[] => {
  const ComputedMenuItem =
    MenuItem || (DefaultMenuItem as ComponentType<MenuItemType>);

  const patchedMenuItems = useMemo(
    (): MenuItemType[] | undefined =>
      menuItems?.map(
        (item: MenuItemType): MenuItemType => ({
          ...item,
          onClick: (value: string): void => {
            if (typeof item.onClick === 'function') {
              item.onClick(value);
            }

            handleClose();
          },
        }),
      ),
    [handleClose, menuItems],
  );

  const groupedMenuItems = useMemo(
    (): Record<string, MenuItemType[]> =>
      groupBy(patchedMenuItems, groupMenuItemsBy),
    [patchedMenuItems, groupMenuItemsBy],
  );

  const renderMenuItem = useCallback(
    (item: MenuItemType): ReactElement => (
      <ComputedMenuItem
        key={item.value}
        selected={
          typeof getMenuItemSelected === 'function' && getMenuItemSelected(item)
        }
        {...item}
      />
    ),
    [getMenuItemSelected, ComputedMenuItem],
  );

  return useMemo((): ReactElement[] => {
    const elements: ReactElement[] = [];
    for (const [groupLabel, items] of Object.entries(groupedMenuItems)) {
      if (typeof groupMenuItemsBy === 'function') {
        elements.push(
          <ListSubheader key={`group_${groupLabel}`}>
            {groupLabel}
          </ListSubheader>,
        );
      }
      for (const item of items) {
        elements.push(renderMenuItem(item));
      }
    }

    return elements;
  }, [groupedMenuItems, groupMenuItemsBy, renderMenuItem]);
};

export default useMenuElements;

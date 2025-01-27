import React, {
  cloneElement,
  ComponentType,
  MouseEvent,
  ReactElement,
  useCallback,
  useState,
} from 'react';
import { Menu, PopoverOrigin, MenuProps } from '@material-ui/core';

import useMenuElements from '^hooks/useMenuElements';
import IMenuItem from '^types/IMenuItem';
import { IMenuItemProps } from '^common/MenuItem';

const ANCHOR_ORIGIN: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'right',
};

export interface IMenuWrapperProps<
  MenuItemType extends IMenuItem = IMenuItem,
  ChildElement extends HTMLButtonElement = HTMLButtonElement
> extends Omit<MenuProps, 'onClick' | 'open' | 'children'> {
  children: ReactElement;
  MenuItem?: ComponentType<IMenuItemProps<MenuItemType>>;
  menuItems?: MenuItemType[];
  getMenuItemSelected?: (item: MenuItemType) => boolean;
  groupMenuItemsBy?: <GroupMenuItemType extends MenuItemType = MenuItemType>(
    item: GroupMenuItemType
  ) => string;
  onClick?: (event: MouseEvent<ChildElement>) => void;
}

const MenuWrapper = <
  MenuItemType extends IMenuItem = IMenuItem,
  ChildElement extends HTMLButtonElement = HTMLButtonElement,
>({ menuItems, MenuItem, children, getMenuItemSelected, groupMenuItemsBy, onClick, ...restProps }: IMenuWrapperProps<MenuItemType>): ReactElement => {
  const [anchorRef, setAnchorRef] = useState<ChildElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = useCallback((): void => setOpen(false), []);

  const handleClick = useCallback(
    (event: MouseEvent<ChildElement>): void => {
      if (typeof onClick === 'function') {
        onClick(event);
      }

      if (menuItems && menuItems.length > 0) {
        setOpen((open: boolean): boolean => !open);
      }
    },
    [menuItems, onClick],
  );

  const menuElements = useMenuElements<MenuItemType>({
    menuItems,
    MenuItem,
    handleClose,
    groupMenuItemsBy,
    getMenuItemSelected,
  });

  return (
    <>
      {
        cloneElement(children, {
          ref: setAnchorRef,
          onClick: handleClick,
        })
      }

      {menuElements.length > 0 && (
        <Menu
          anchorEl={anchorRef}
          anchorOrigin={ANCHOR_ORIGIN}
          getContentAnchorEl={null}
          keepMounted
          onClose={handleClose}
          open={open}
          {...restProps}
        >
          {menuElements}
        </Menu>
      )}
    </>
  );
};

export default MenuWrapper;

import React, { ReactElement, useMemo } from 'react';

import { useDeviceType } from '^common/DeviceTypeProvider';
import IconButton from '^controls/IconButton';
import Button, { IButtonProps } from '^controls/Button';
import INavigationMenuItem from '^types/INavigationMenuItem';
import IMenuItem from '^types/IMenuItem';

export interface INavigationMenuItemProps<MenuItemType extends IMenuItem = IMenuItem> extends INavigationMenuItem<MenuItemType> {
  selected?: boolean;
}

const NavigationMenuItem = <MenuItemType extends IMenuItem = IMenuItem>({ label, value, selected, Icon, onClick, ...buttonProps }: INavigationMenuItemProps<MenuItemType>): ReactElement => {
  const { isDesktop } = useDeviceType();

  const commonProps = useMemo(
    (): Pick<IButtonProps, 'className' | 'color' | 'onClick'> => ({
      onClick: (): void => {
        if (typeof onClick === 'function') {
          onClick(value);
        }
      },
      color: selected? 'primary': 'default',
      ...buttonProps,
    }),
    [selected, buttonProps, onClick, value],
  );

  return (
    isDesktop
      ? (
        <IconButton
          label={label}
          {...commonProps}
        >
          <Icon />
        </IconButton>
      )
      : (
        <Button
          {...commonProps}
          variant="text"
          startIcon={<Icon />}
        >
          {label}
        </Button>
      )
  );
};

export default NavigationMenuItem;

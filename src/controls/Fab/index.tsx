import React, { ReactElement } from 'react';
import { Fab as FabBase, FabProps } from '@material-ui/core';

import IMenuItem from '^types/IMenuItem';
import MenuWrapper, { IMenuWrapperProps } from '^common/MenuWrapper';

export interface IFabProps<MenuItemType extends IMenuItem = IMenuItem> extends FabProps {
  menuProps?: Omit<IMenuWrapperProps<MenuItemType>, 'children'>
}

const Fab = <
  MenuItemType extends IMenuItem = IMenuItem,
>({
    children,
    menuProps,
    onClick,
    ...restProps
  }: IFabProps<MenuItemType>): ReactElement => (
    <MenuWrapper
      {...menuProps}
      onClick={onClick}
    >
      <FabBase {...restProps}>
        {children}
      </FabBase>
    </MenuWrapper>
  );

export default Fab;

import { ElementType } from 'react';

import MenuItem from '^common/MenuItem';

import INavigationMenuItem from './INavigationMenuItem';
import INavigationMenuItemsGroup from './INavigationMenuItemsGroup';
import TWithOverridableComponent from './TWithOverridableComponent';

type TNavigationMenuItem<ButtonRootComponent extends ElementType = typeof MenuItem> =
  TWithOverridableComponent<
    ButtonRootComponent,
    INavigationMenuItem | INavigationMenuItemsGroup
  >;

export default TNavigationMenuItem;

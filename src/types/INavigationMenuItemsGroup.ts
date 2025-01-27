import { ComponentType, ReactNode } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import INavigationMenuItem from '^types/INavigationMenuItem';

export default interface INavigationMenuItemsGroup {
  label: ReactNode;
  Icon: ComponentType<SvgIconProps>;
  items: INavigationMenuItem[];
}

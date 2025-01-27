import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import ConfluenceIcon from '^icons/Confluence';
import RoadIcon from '^icons/Road';
import HandshakeIcon from '^icons/Handshake';
import IMenuItem from '^types/IMenuItem';
import NavigationMenuDropdownItem from '^layout/BaseLayout/NavigationMenu/NavigationMenuItems/NavigationMenuItemsGroup/NavigationMenuDropdownItem';
import INavigationMenuItem from '^types/INavigationMenuItem';

import FabComponent, { IFabProps } from '.';

const TemplateFactory = <MenuItemType extends IMenuItem = IMenuItem>(): StoryFn<
  IFabProps<MenuItemType>
> => {
  const Template: StoryFn<IFabProps<MenuItemType>> = (
    args: IFabProps<MenuItemType>,
  ): ReactElement => <FabComponent {...args} />;

  return Template;
};

const Template: StoryFn<IFabProps> = TemplateFactory();

export const Simple = Template.bind({});

Simple.args = {
  children: <ConfluenceIcon />,
  onClick: alert,
} as IFabProps;

export const WithMenu = Template.bind({});
WithMenu.args = {
  children: <ConfluenceIcon />,
  menuProps: {
    menuItems: [
      {
        label: 'First',
        value: 'first',
        onClick: alert,
      },
      {
        label: 'Second',
        value: 'second',
        onClick: alert,
      },
      {
        label: 'Third',
        value: 'third',
        onClick: alert,
      },
    ],
  },
} as IFabProps;

interface IMenuItemWithGroup extends IMenuItem {
  group: string;
}

export const WithMenuGrouped = TemplateFactory<IMenuItemWithGroup>().bind({});
WithMenuGrouped.args = {
  children: <ConfluenceIcon />,
  color: 'primary',
  menuProps: {
    groupMenuItemsBy: (item: IMenuItemWithGroup): string => item.group,
    menuItems: [
      {
        label: 'First',
        value: 'first',
        group: 'Main',
        onClick: alert,
      },
      {
        label: 'Second',
        value: 'second',
        group: 'Other',
        onClick: alert,
      },
      {
        label: 'Third',
        value: 'third',
        group: 'Other',
        onClick: alert,
      },
    ],
  },
} as IFabProps<IMenuItemWithGroup>;

export const WithCustomMenuItems = TemplateFactory<INavigationMenuItem>().bind(
  {},
);
WithCustomMenuItems.args = {
  children: <ConfluenceIcon />,
  size: 'small',
  menuProps: {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    MenuItem: NavigationMenuDropdownItem,
    menuItems: [
      {
        label: 'First',
        value: 'first',
        Icon: ConfluenceIcon,
        onClick: alert,
      },
      {
        label: 'Second',
        value: 'second',
        Icon: RoadIcon,
        onClick: alert,
      },
      {
        label: 'Third',
        value: 'third',
        Icon: HandshakeIcon,
        onClick: alert,
      },
    ],
  },
} as IFabProps<INavigationMenuItem>;

export default {
  title: 'AdminUI/Controls/Fab',
  component: FabComponent,
} as Meta<IFabProps>;

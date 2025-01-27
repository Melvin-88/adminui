import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Home } from '@material-ui/icons';

import IMenuItem from '^types/IMenuItem';
import ConfluenceIcon from '^icons/Confluence';
import RoadIcon from '^icons/Road';
import HandshakeIcon from '^icons/Handshake';
import INavigationMenuItem from '^types/INavigationMenuItem';
import NavigationMenuDropdownItem from '^layout/BaseLayout/NavigationMenu/NavigationMenuItems/NavigationMenuItemsGroup/NavigationMenuDropdownItem';

import IconButtonComponent, { IIconButtonProps } from '.';

const TemplateFactory = <MenuItemType extends IMenuItem = IMenuItem>(): StoryFn<IIconButtonProps<MenuItemType>> => {
  const Template: StoryFn<IIconButtonProps<MenuItemType>> = (args: IIconButtonProps<MenuItemType>): ReactElement => (
    <IconButtonComponent {...args} />
  );

  return Template;
};
const Template: StoryFn<IIconButtonProps> = TemplateFactory();

export const Simple = Template.bind({});

Simple.args = {
  children: <Home />,
} as IIconButtonProps;

export const WithMenu = Template.bind({});
WithMenu.args = {
  children: <Home />,
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
} as IIconButtonProps;

interface IMenuItemWithGroup extends IMenuItem {
  group: string;
}

export const WithMenuGrouped = TemplateFactory<IMenuItemWithGroup>().bind({});
WithMenuGrouped.args = {
  children: <Home />,
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
  groupMenuItemsBy: (item: IMenuItemWithGroup): string => item.group,
};

export const WithCustomMenuItems = TemplateFactory<INavigationMenuItem>().bind({});
WithCustomMenuItems.args = {
  children: <Home />,
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
} as IIconButtonProps<INavigationMenuItem>;

export const Loading = Template.bind({});
Loading.args = {
  children: <Home />,
  loading: true,
} as IIconButtonProps;

export const WithBadge = Template.bind({});
WithBadge.args = {
  children: <Home />,
  badgeProps: {
    value: 10,
    color: 'secondary',
  },
} as IIconButtonProps;

export const WithOverridenRootComponent = Template.bind({});
WithOverridenRootComponent.args = {
  children: <Home />,
  component: 'div',
  title: 'With overriden root component',
} as IIconButtonProps;

export default {
  title: 'AdminUI/Controls/IconButton',
  component: IconButtonComponent,
} as Meta<IIconButtonProps>;

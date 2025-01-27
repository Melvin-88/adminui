import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import ConfluenceIcon from '^icons/Confluence';
import RoadIcon from '^icons/Road';
import HandshakeIcon from '^icons/Handshake';
import IMenuItem from '^types/IMenuItem';
import NavigationMenuDropdownItem from '^layout/BaseLayout/NavigationMenu/NavigationMenuItems/NavigationMenuItemsGroup/NavigationMenuDropdownItem';
import INavigationMenuItem from '^types/INavigationMenuItem';

import ButtonComponent, { IButtonProps } from '.';

const TemplateFactory = <MenuItemType extends IMenuItem = IMenuItem>(): StoryFn<
  IButtonProps<MenuItemType>
> => {
  const Template: StoryFn<IButtonProps<MenuItemType>> = (
    args: IButtonProps<MenuItemType>,
  ): ReactElement => <ButtonComponent {...args} />;

  return Template;
};

const Template: StoryFn<IButtonProps> = TemplateFactory();

export const Simple = Template.bind({});

Simple.args = {
  children: 'Button',
} as IButtonProps;

export const WithMenu = Template.bind({});
WithMenu.args = {
  children: 'With Menu',
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
} as IButtonProps;

interface IMenuItemWithGroup extends IMenuItem {
  group: string;
}

export const WithMenuGrouped = TemplateFactory<IMenuItemWithGroup>().bind({});
WithMenuGrouped.args = {
  children: 'With Menu Grouped',
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

export const WithCustomMenuItems = TemplateFactory<INavigationMenuItem>().bind(
  {},
);
WithCustomMenuItems.args = {
  children: 'With Custom Menu Items',
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
} as IButtonProps<INavigationMenuItem>;

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading',
  loading: true,
} as IButtonProps;

export const WithBadge = Template.bind({});
WithBadge.args = {
  children: 'With Badge',
  badgeProps: {
    value: 10,
    color: 'secondary',
  },
} as IButtonProps;

export const WithOverridenRootComponent = Template.bind({});
WithOverridenRootComponent.args = {
  children: 'With Overriden Root Component (the button is a link that opens in a new tab)',
  component: 'span',
  href: 'https://google.com',
  target: '_blank',
} as IButtonProps;

export default {
  title: 'AdminUI/Controls/Button',
  component: ButtonComponent,
} as Meta<IButtonProps>;

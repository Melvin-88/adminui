import React, { ReactElement, useMemo, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Delete, Edit, GetApp, Menu, Star } from '@material-ui/icons';

import IPageHeaderAction from '^types/IPageHeaderAction';
import IPageHeaderTab from '^types/IPageHeaderTab';
import IMenuItem from '^types/IMenuItem';

import { IPageHeaderSearchProps } from './PageHeaderSearch';
import { IPageHeaderTabPanelProps } from './PageHeaderTabPanel';

import PageHeaderComponent, { IPageHeaderProps } from '.';

interface IGroupableMenuItem extends IMenuItem {
  group: string;
}

const actions: IPageHeaderAction<IGroupableMenuItem>[] = [
  {
    type: 'icon',
    label: 'Highlighted',
    value: 'highlighted',
    Icon: Star,
    onClick: alert,
    badgeProps: {
      value: 10,
      color: 'secondary',
    },
  },
  {
    label: 'Download',
    value: 'download',
    Icon: GetApp,
    onClick: alert,
  },
  {
    label: 'Menu',
    value: 'menu',
    Icon: Menu,
    badgeProps: {
      value: 10,
      color: 'secondary',
    },
    menuItems: [
      {
        label: 'First',
        value: 'first',
        onClick: alert,
        group: 'First group',
      },
      {
        label: 'Second',
        value: 'second',
        onClick: alert,
        group: 'First group',
      },
      {
        label: 'Third',
        value: 'third',
        onClick: alert,
        group: 'Second group',
      },
    ],
    groupMenuItemsBy: (item: IGroupableMenuItem): string => item.group,
  },
  {
    label: 'Edit',
    value: 'edit',
    Icon: Edit,
    variant: 'outlined',
    onClick: alert,
  },
  {
    label: 'Delete',
    value: 'delete',
    Icon: Delete,
    color: 'secondary',
    onClick: alert,
  },
];

const tabs: IPageHeaderTab[] = [
  {
    label: 'Months',
    value: 'months',
  },
  {
    label: 'Kilometers',
    value: 'kilometers',
  },
  {
    label: 'Categories',
    value: 'categories',
  },
];

const Template: StoryFn<IPageHeaderProps> = (
  args: IPageHeaderProps,
): ReactElement => (
  <div style={{ margin: '0 auto', maxWidth: '80rem' }}>
    <PageHeaderComponent {...args} />
  </div>
);

const ComplementaryTemplate: StoryFn<IPageHeaderProps> = (
  args: IPageHeaderProps,
): ReactElement => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<string>(
    args.tabPanelProps?.tabs?.[0].value || '',
  );

  const searchProps = useMemo(
    (): IPageHeaderSearchProps | undefined =>
      args.searchProps
        ? {
          ...args.searchProps,
          value: searchValue,
          onChange: setSearchValue,
        }
        : undefined,
    [args.searchProps, searchValue],
  );

  const tabPanelProps = useMemo((): IPageHeaderTabPanelProps | undefined => {
    if (!args.tabPanelProps) {
      return undefined;
    }

    return {
      ...args.tabPanelProps,
      currentTab,
      onTabClick: setCurrentTab,
    };
  }, [args.tabPanelProps, currentTab]);

  return (
    <div style={{ margin: '0 auto', maxWidth: '80rem' }}>
      <PageHeaderComponent
        {...args}
        searchProps={searchProps}
        tabPanelProps={tabPanelProps}
      />

      {!!args.searchProps && (
        <div style={{ padding: '1rem', wordBreak: 'break-all' }}>
          Search value: {searchValue}
        </div>
      )}
    </div>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  title: 'Title',
} as IPageHeaderProps;

export const WithSubTitle = Template.bind({});
WithSubTitle.args = {
  title: 'Title',
  subTitle: 'Subtitle',
} as IPageHeaderProps;

export const WithBackButton = Template.bind({});
WithBackButton.args = {
  title: 'Title',
  onBackClick: (): void => alert('Back clicked'),
} as IPageHeaderProps;

export const WithLabels = Template.bind({});
WithLabels.args = {
  title: 'Title',
  subTitle: 'Test',
  labels: [
    {
      label: 'Label',
      color: 'green',
    },
    {
      label: 'Label 2',
      color: 'orange',
    },
  ],
} as IPageHeaderProps;

export const Loading = Template.bind({});
Loading.args = {
  title: 'Title',
  loading: true,
  onBackClick: (): void => alert('Back clicked'),
} as IPageHeaderProps;

export const WithActions = Template.bind({});
WithActions.args = {
  title: 'Title',
  actions,
} as IPageHeaderProps;

export const WithTabs = ComplementaryTemplate.bind({});
WithTabs.args = {
  title: 'Title',
  tabPanelProps: {
    tabs,
  },
} as IPageHeaderProps;

export const WithSearch = ComplementaryTemplate.bind({});
WithSearch.args = {
  title: 'Title',
  searchProps: {},
} as IPageHeaderProps;

export const WithUpperCaseSearch = ComplementaryTemplate.bind({});
WithUpperCaseSearch.args = {
  title: 'Title',
  searchProps: {
    toUpperCase: true,
  },
} as IPageHeaderProps;

export const Complementary = ComplementaryTemplate.bind({});
Complementary.args = {
  title: 'TitleTitleTitleTitleTitle TitleTitleTitleTitle TitleTitleTitleTitle',
  subTitle: 'Subtitle',
  actions: actions.slice(0, 3),
  searchProps: {} as IPageHeaderSearchProps,
  tabPanelProps: {
    tabs,
  } as IPageHeaderProps['tabPanelProps'],
  labels: [
    {
      label: 'Label',
      color: 'green',
    },
  ],
  onBackClick: (): void => alert('Back clicked'),
} as IPageHeaderProps;

export default {
  title: 'AdminUI/Layout/PageHeader',
  component: PageHeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<IPageHeaderProps>;

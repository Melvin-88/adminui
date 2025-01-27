import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Home, Description, Grade, Dns, Link, BusinessCenter, MoreHoriz, Update, Assessment, BugReport, ExitToApp, Star, GetApp, Menu, Delete } from '@material-ui/icons';
import classNames from 'classnames';

import INavigationMenuItem from '^types/INavigationMenuItem';
import IPageHeaderAction from '^types/IPageHeaderAction';
import IPageHeaderTab from '^types/IPageHeaderTab';
import PageHeader from '^layout/PageHeader';
import HandshakeIcon from '^icons/Handshake';

import { INavigationMenuProps } from './NavigationMenu';
import Header from './Header';
import styles from './stories.styles.module.scss';

import BaseLayoutComponent, { IBaseLayoutProps } from '.';

const actions: IPageHeaderAction[] = [
  {
    type: 'icon',
    label: 'Highlighted',
    value: 'highlighted',
    badgeProps: {
      value: 200,
      color: 'secondary',
    },
    Icon: Star,
    onClick: alert,
  },
  {
    label: 'Download',
    value: 'download',
    variant: 'outlined',
    Icon: GetApp,
    onClick: alert,
    badgeProps: {
      value: 5,
      color: 'primary',
    },
  },
  {
    label: 'Menu',
    value: 'menu',
    Icon: Menu,
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

const Template: StoryFn<IBaseLayoutProps> = (args: IBaseLayoutProps): ReactElement => {
  const [selectedItem, setSelectedItem] = useState<string>('home');
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState<string>(tabs[0].value);

  const getItemSelected = useCallback(
    ({ value }: INavigationMenuItem): boolean => value === selectedItem,
    [selectedItem],
  );

  const navigationMenuProps = useMemo(
    (): INavigationMenuProps => ({
      ...args.navigationMenuProps,
      getItemSelected,
      items: [
        {
          Icon: Home,
          label: 'Home',
          value: 'home',
          onClick: (): void => setSelectedItem('home'),
        },
        {
          Icon: Description,
          label: 'All documents',
          value: 'documents',
          onClick: (): void => setSelectedItem('documents'),
        },
        {
          Icon: Grade,
          label: 'Favorites',
          value: 'favorites',
          badgeProps: {
            value: 99,
            color: 'secondary',
          },
          onClick: (): void => setSelectedItem('favorites'),
        },
        {
          Icon: Dns,
          label: 'Forms',
          value: 'forms',
          onClick: (): void => setSelectedItem('forms'),
        },
        {
          Icon: Link,
          label: 'Links',
          value: 'links',
          onClick: (): void => setSelectedItem('links'),
        },
        {
          Icon: HandshakeIcon,
          label: 'Cooperation agreements',
          value: 'cooperation-agreements',
          onClick: (): void => setSelectedItem('cooperation-agreements'),
        },
        {
          Icon: BusinessCenter,
          label: 'Contracts',
          value: 'contracts',
          onClick: (): void => setSelectedItem('contracts'),
        },
      ],
      secondaryItems: [
        {
          Icon: MoreHoriz,
          label: 'More',
          value: 'more',
          items: [
            {
              Icon: Update,
              label: 'Updates list',
              value: 'updates-list',
              onClick: (): void => alert('Updates'),
            },
            {
              Icon: Assessment,
              label: 'User guide',
              value: 'user-guide',
              onClick: (): void => setSelectedItem('user-guide'),
            },
            {
              Icon: BugReport,
              label: 'Report bug',
              value: 'report-bug',
              onClick: (): void => setSelectedItem('report-bug'),
            },
          ],
        },
        {
          Icon: ExitToApp,
          label: 'Log out',
          value: 'log-out',
          onClick: (): void => alert('Logged out'),
        },
      ],
    }),
    [args.navigationMenuProps, getItemSelected],
  );

  return (
    <div
      className={
        classNames(
          styles.layout,
          {
            // Hack for better layout in storybook "new tab" view
            [styles.fullHeight]: !window.parent[0],
          },
        )
      }
    >
      <BaseLayoutComponent
        {...args}
        header={Header}
        navigationMenuProps={navigationMenuProps}
      >
        <PageHeader
          title="Title"
          subTitle="Subtitle"
          actions={actions}
          onBackClick={(): void => alert('Back click')}
          labels={[{
            label: 'Label',
            color: 'grey',
          },
          {
            label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            color: 'red',
          }]}
          searchProps={{
            value: searchValue,
            onChange: setSearchValue,
          }}
          tabPanelProps={{
            currentTab,
            tabs,
            onTabClick: setCurrentTab,
          }}
        />

        <div className={styles.content}>
          <div className={styles.placeholder} />
          <div className={styles.placeholder} />
          <div className={styles.placeholder} />
          <div className={styles.placeholder} />
        </div>
      </BaseLayoutComponent>
    </div>
  );
};

export const BaseLayout = Template.bind({});
BaseLayout.storyName = 'BaseLayout';
BaseLayout.args = {
  navigationMenuProps: {
    Icon: Home,
    onIconClick: (): void => alert('Home icon click'),
    shouldCloseMenuOnIconClick: true,
  },
} as IBaseLayoutProps;

export default {
  title: 'AdminUI/Layout/BaseLayout',
  component: BaseLayoutComponent,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<IBaseLayoutProps>;

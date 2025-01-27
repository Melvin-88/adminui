import React, { ComponentType, ElementType, ReactElement } from 'react';
import { Tabs } from '@material-ui/core';
import classNames from 'classnames';

import TPageHeaderTab from '^types/TPageHeaderTab';

import PageHeaderTab, { IPageHeaderTabProps } from './PageHeaderTab';
import styles from './styles.module.scss';

export interface IPageHeaderTabPanelProps<
  TabRootComponent extends ElementType = 'button',
  TabType extends TPageHeaderTab<TabRootComponent> = TPageHeaderTab<TabRootComponent>
> {
  tabs: TabType[];
  currentTab: string;
  Tab?: ComponentType<IPageHeaderTabProps<TabRootComponent, TabType>>;
  className?: string;
  onTabClick?: (value: string) => void;
}

const PageHeaderTabPanel = <
  TabRootComponent extends ElementType = 'button',
  TabType extends TPageHeaderTab<TabRootComponent> = TPageHeaderTab<TabRootComponent>
>({
    className,
    currentTab,
    tabs,
    Tab = PageHeaderTab<TabRootComponent, TabType>,
    onTabClick,
  }: IPageHeaderTabPanelProps<TabRootComponent, TabType>): ReactElement => (
    <Tabs
      className={classNames(styles.tabPanel, className)}
      value={currentTab}
      variant="scrollable"
      scrollButtons="off"
    >
      {tabs.map(
        (tab: TabType): ReactElement => (
          <Tab
            key={tab.value}
            onClick={onTabClick}
            {...tab}
          />
        ),
      )}
    </Tabs>
  );

export default PageHeaderTabPanel;

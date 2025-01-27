import React, {
  ElementType,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';
import { Close } from '@material-ui/icons';

import IPageHeaderAction from '^types/IPageHeaderAction';
import useTexts from '^hooks/useTexts';
import TPageHeaderTab from '^types/TPageHeaderTab';

import PageHeaderTitle, { IPageHeaderTitleProps } from './PageHeaderTitle';
import PageHeaderAction from './PageHeaderAction';
import PageHeaderSearch, { IPageHeaderSearchProps } from './PageHeaderSearch';
import PageHeaderTabPanel, {
  IPageHeaderTabPanelProps,
} from './PageHeaderTabPanel';
import PageHeaderSkeleton from './PageHeaderSkeleton';
import styles from './styles.module.scss';

export interface IPageHeaderProps<
  TabRootComponent extends ElementType = 'button',
  TabType extends TPageHeaderTab<TabRootComponent> = TPageHeaderTab<TabRootComponent>
> extends Omit<IPageHeaderTitleProps, 'shrink'> {
  actions?: IPageHeaderAction[];
  searchProps?: IPageHeaderSearchProps;
  tabPanelProps?: IPageHeaderTabPanelProps<TabRootComponent, TabType>;
  loading?: boolean;
}

const PageHeader = <
  TabRootComponent extends ElementType = 'button',
  TabType extends TPageHeaderTab<TabRootComponent> = TPageHeaderTab<TabRootComponent>
>({
    className,
    title,
    subTitle,
    labels,
    actions,
    searchProps,
    tabPanelProps,
    loading,
    BackIcon,
    onBackClick,
  }: IPageHeaderProps<TabRootComponent, TabType>): ReactElement => {
  const texts = useTexts();

  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const handleSearchToggle = useCallback(
    (open: boolean): void => setSearchOpen(open),
    [],
  );

  const handleSearchReset = useCallback(
    (): void => searchProps?.onChange(''),
    [searchProps],
  );

  const titleProps = useMemo(
    (): IPageHeaderTitleProps =>
      searchProps?.value
        ? {
          title: (
            <div
              className={styles.searchTitle}
              onClick={(): void => setSearchOpen(true)}
            >
              {searchProps.value}
            </div>
          ),
          subTitle:
              searchProps.resultsLabel ||
              texts.pageHeader.searchResults.subTitle,
          shrink: true,
          onBackClick: handleSearchReset,
          BackIcon: Close,
        }
        : {
          title,
          subTitle,
          labels,
          onBackClick,
          BackIcon,
        },
    [
      BackIcon,
      handleSearchReset,
      labels,
      onBackClick,
      searchProps,
      subTitle,
      texts.pageHeader.searchResults.subTitle,
      title,
    ],
  );

  return (
    <div className={classNames(styles.pageHeader, className)}>
      <div className={styles.container}>
        {loading ? (
          <PageHeaderSkeleton
            onBackClick={onBackClick}
            BackIcon={BackIcon}
          />
        ) : (
          <>
            <PageHeaderTitle {...titleProps} />

            <div className={styles.actions}>
              {searchProps && (
                <PageHeaderSearch
                  className={styles.action}
                  {...searchProps}
                  open={searchOpen}
                  onToggleOpen={handleSearchToggle}
                />
              )}

              {actions?.map(
                (action: IPageHeaderAction): ReactElement => (
                  <PageHeaderAction
                    key={action.value}
                    className={styles.action}
                    {...action}
                  />
                ),
              )}
            </div>
          </>
        )}
      </div>

      {!loading && !!tabPanelProps && (
        <PageHeaderTabPanel
          {...tabPanelProps}
          Tab={tabPanelProps.Tab}
          className={classNames(styles.tabPanel, tabPanelProps.className)}
        />
      )}
    </div>
  );
};

export default PageHeader;

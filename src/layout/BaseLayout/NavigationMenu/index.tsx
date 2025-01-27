import React, {
  ComponentType,
  CSSProperties,
  ElementType,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Fab, IconButton, SvgIconProps } from '@material-ui/core';
import classNames from 'classnames';
import { Close, Menu } from '@material-ui/icons';
import zIndex from '@material-ui/core/styles/zIndex';

import INavigationMenuItem from '^types/INavigationMenuItem';
import useBodyScrollLock from '^hooks/useBodyScrollLock';
import TNavigationMenuItem from '^types/TNavigationMenuItem';
import SkeletonProvider from '^data-display/SkeletonProvider';
import MenuItem from '^common/MenuItem';

import NavigationMenuItems from './NavigationMenuItems';
import DesktopSkeleton from './NavigationMenuSkeleton/Desktop';
import MobileSkeleton from './NavigationMenuSkeleton/Mobile';
import styles from './styles.module.scss';
import { patchItemsWithCustomOnClick } from './utils';

const navigationMenuStyles: CSSProperties = {
  zIndex: zIndex.drawer - 1,
};

export interface INavigationMenuProps<
  ButtonRootComponent extends ElementType = typeof MenuItem
> {
  items?: TNavigationMenuItem<ButtonRootComponent>[];
  secondaryItems?: TNavigationMenuItem<ButtonRootComponent>[];
  Icon: ComponentType<SvgIconProps>;
  onIconClick: () => void;
  shouldCloseMenuOnIconClick?: boolean;
  getItemSelected?: (item: INavigationMenuItem) => boolean;
  className?: string;
  loading?: boolean;
}

const NavigationMenu = <ButtonRootComponent extends ElementType = 'button'>({
  className,
  items = [],
  secondaryItems,
  Icon,
  onIconClick,
  getItemSelected,
  loading = false,
  shouldCloseMenuOnIconClick = true,
}: INavigationMenuProps<ButtonRootComponent>): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  useBodyScrollLock(open);

  const handleOpen = useCallback((): void => setOpen(true), []);

  const handleClose = useCallback((): void => setOpen(false), []);

  const patchedItems = useMemo(
    (): TNavigationMenuItem[] =>
      patchItemsWithCustomOnClick(items, handleClose),
    [items, handleClose],
  );

  const patchedSecondaryItems = useMemo(
    (): TNavigationMenuItem[] =>
      patchItemsWithCustomOnClick(secondaryItems || [], handleClose),
    [secondaryItems, handleClose],
  );

  const handleIconClick = useCallback((): void => {
    onIconClick();

    if (shouldCloseMenuOnIconClick) {
      handleClose();
    }
  }, [handleClose, shouldCloseMenuOnIconClick, onIconClick]);

  return (
    <>
      <div
        className={classNames(
          styles.navigationMenu,
          {
            [styles.open]: open,
            [styles.loading]: loading,
          },
          className,
        )}
        style={navigationMenuStyles}
      >
        <SkeletonProvider
          Skeleton={DesktopSkeleton}
          showSkeleton={loading}
        >
          <div className={styles.header}>
            <Fab
              size="small"
              onClick={handleIconClick}
            >
              <Icon />
            </Fab>

            <IconButton
              className={styles.closeIcon}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </div>

          <NavigationMenuItems
            className={styles.items}
            getItemSelected={getItemSelected}
            items={patchedItems}
          />

          <NavigationMenuItems
            className={styles.secondaryItems}
            getItemSelected={getItemSelected}
            items={patchedSecondaryItems}
          />
        </SkeletonProvider>
      </div>

      <SkeletonProvider
        Skeleton={MobileSkeleton}
        className={styles.openIcon}
        showSkeleton={loading}
      >
        <div className={styles.openIconContainer}>
          <IconButton
            className={styles.openIcon}
            onClick={handleOpen}
          >
            <Menu />
          </IconButton>
        </div>
      </SkeletonProvider>
    </>
  );
};

export default NavigationMenu;

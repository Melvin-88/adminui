import React, { CSSProperties, ReactElement, ReactNode, useMemo } from 'react';
import { DrawerProps, Drawer, Typography, DrawerClassKey, ModalProps } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import zIndex from '@material-ui/core/styles/zIndex';
import classNames from 'classnames';

import IconButton from '^controls/IconButton';
import SkeletonProvider from '^data-display/SkeletonProvider';

import SideBarSkeleton from './SideBarSkeleton';
import styles from './styles.module.scss';

const drawerStyles: CSSProperties = {
  zIndex: zIndex.drawer,
};

export interface ISideBarProps extends Pick<DrawerProps, | 'children' | 'className' | 'disablePortal'> {
  title: ReactNode;
  footer?: ReactNode;
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  anchor?: 'right' | 'left';
  size?: 'small' | 'medium';
}

const sizeMap: Record<NonNullable<ISideBarProps['size']>, string> = {
  small: styles.small,
  medium: styles.medium,
};

const SideBar = ({
  children,
  open,
  loading,
  onClose,
  anchor = 'right',
  className,
  title,
  footer,
  size='small',
  disablePortal,
}: ISideBarProps): ReactElement => {
  const drawerClasses = useMemo(
    (): Partial<Record<DrawerClassKey, string>> => (
      {
        paper: classNames(
          styles.sideBarWrapper,
          sizeMap[size],
        ),
      }
    ),
    [size],
  );

  const modalProps = useMemo(
    (): Partial<ModalProps> => ({
      disablePortal,
    }),
    [disablePortal],
  );

  return (
    <Drawer
      style={drawerStyles}
      open={open}
      onClose={onClose}
      anchor={anchor}
      className={className}
      classes={drawerClasses}
      ModalProps={modalProps}
    >
      <div className={styles.sideBarContainer}>
        <div className={styles.titleBlock}>
          <Typography variant="h6">
            {title}
          </Typography>

          <div className={styles.closeBlock}>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </div>
        </div>

        <SkeletonProvider
          showSkeleton={!!loading}
          Skeleton={SideBarSkeleton}
        >
          <div className={styles.sideBarContent}>
            {children}
          </div>

          {!!footer && (
            <div className={styles.footerBlock}>
              {footer}
            </div>
          )}
        </SkeletonProvider>
      </div>
    </Drawer>
  );
};

export default SideBar;

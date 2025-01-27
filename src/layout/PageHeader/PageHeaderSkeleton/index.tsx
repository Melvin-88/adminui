import { IconButton } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { KeyboardArrowLeft } from '@material-ui/icons';
import classNames from 'classnames';

import { useDeviceType } from '^common/DeviceTypeProvider';

import { IPageHeaderTitleProps } from '../PageHeaderTitle';

import Desktop from './Desktop';
import Mobile from './Mobile';
import styles from './styles.module.scss';

export interface IPageHeaderSkeletonProps extends Pick<IPageHeaderTitleProps, 'BackIcon' | 'onBackClick'> {
  className?: string;
}

const PageHeaderSkeleton = ({ className, BackIcon = KeyboardArrowLeft, onBackClick }: IPageHeaderSkeletonProps): ReactElement => {
  const { isDesktop } = useDeviceType();

  const Skeleton = isDesktop ? Desktop : Mobile;

  return (
    <div className={classNames(styles.pageHeaderSkeleton, className)}>
      {typeof onBackClick === 'function' && (
        <IconButton
          className={styles.backButton}
          onClick={onBackClick}
        >
          <BackIcon />
        </IconButton>
      )}

      <Skeleton className={styles.skeleton} />
    </div>
  );
};

export default PageHeaderSkeleton;

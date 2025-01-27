import React, { ComponentType, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

import ISkeletonProps from '^types/ISkeletonProps';

import styles from './styles.module.scss';

export interface ISkeletonProviderProps {
  Skeleton: ComponentType<ISkeletonProps>;
  showSkeleton: boolean;
  className?: string;
  children: ReactNode;
  withForceContentRender?: boolean;
}

const SkeletonProvider = ({
  Skeleton,
  showSkeleton,
  className,
  children,
  withForceContentRender,
}: ISkeletonProviderProps): ReactElement => {
  if (withForceContentRender) {
    return (
      <>
        {showSkeleton && (
          <Skeleton className={classNames(className, styles.hidesSibling)} />
        )}
        {children}
      </>
    );
  }

  return <>{showSkeleton ? <Skeleton className={className} /> : children}</>;
};

export default SkeletonProvider;

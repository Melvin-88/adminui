import React, { ComponentType, ReactElement } from 'react';

import { useDeviceType } from '^common/DeviceTypeProvider';
import DeviceType from '^enums/DeviceType';
import ISkeletonProps from '^types/ISkeletonProps';

import DesktopSkeleton from './DesktopSkeleton';
import MobileSkeleton from './MobileSkeleton';

const SKELETON_ITEMS_COUNT = 12;

const itemsCount = Array.from(Array(SKELETON_ITEMS_COUNT).keys());

const configSkeleton: Record<DeviceType, ComponentType<ISkeletonProps>> = {
  [DeviceType.Mobile]: MobileSkeleton,
  [DeviceType.Tablet]: MobileSkeleton,
  [DeviceType.Desktop]: DesktopSkeleton,
};

const ListItemSkeleton = ({ className }: ISkeletonProps): ReactElement => {
  const { deviceType } = useDeviceType();

  const Skeleton = configSkeleton[deviceType];

  return (
    <div className={className}>
      {itemsCount.map((key: number): ReactElement => (
        <Skeleton key={key} />
      ))}
    </div>
  );
};

export default ListItemSkeleton;

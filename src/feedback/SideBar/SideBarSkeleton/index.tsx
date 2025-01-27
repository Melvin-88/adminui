import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

import ISkeletonProps from '^types/ISkeletonProps';

const SideBarSkeleton = (props: ISkeletonProps): ReactElement => (
  <ContentLoader
    viewBox="0 0 375 600"
    preserveAspectRatio="none"
    {...props}
  >
    <rect
      x="16"
      y="24"
      width="203"
      height="32"
      rx="4"
    />

    <rect
      x="16"
      y="80"
      width="343"
      height="24"
      rx="4"
    />

    <rect
      x="16"
      y="120"
      width="343"
      height="24"
      rx="4"
    />

    <rect
      x="16"
      y="160"
      width="115"
      height="24"
      rx="4"
    />

    <rect
      x="16"
      y="232"
      width="203"
      height="32"
      rx="4"
    />

    <rect
      x="16"
      y="288"
      width="343"
      height="24"
      rx="4"
    />

    <rect
      x="16"
      y="328"
      width="343"
      height="24"
      rx="4"
    />

    <rect
      x="16"
      y="368"
      width="115"
      height="24"
      rx="4"
    />

    <rect
      x="16"
      y="440"
      width="203"
      height="32"
      rx="4"
    />

    <rect
      x="16"
      y="496"
      width="343"
      height="24"
      rx="4"
    />

    <rect
      x="16"
      y="536"
      width="343"
      height="24"
      rx="4"
    />

    <rect
      x="16"
      y="576"
      width="115"
      height="24"
      rx="4"
    />
  </ContentLoader>
);

export default SideBarSkeleton;

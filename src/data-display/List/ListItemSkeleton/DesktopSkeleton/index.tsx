import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

import ISkeletonProps from '^types/ISkeletonProps';

const DesktopSkeleton = (props: ISkeletonProps): ReactElement => (
  <ContentLoader
    viewBox="0 0 1258 60"
    preserveAspectRatio="none"
    {...props}
  >
    <rect
      x="16"
      y="18"
      width="42"
      height="24"
      rx="4"
    />

    <rect
      x="74"
      y="18"
      width="480"
      height="24"
      rx="4"
    />

    <path
      d="M1134 42C1140.63 42 1146 36.6274 1146 30C1146 23.3726 1140.63 18 1134 18C1127.37 18 1122 23.3726 1122 30C1122 36.6274 1127.37 42 1134 42Z"
    />

    <path
      d="M1166 42C1172.63 42 1178 36.6274 1178 30C1178 23.3726 1172.63 18 1166 18C1159.37 18 1154 23.3726 1154 30C1154 36.6274 1159.37 42 1166 42Z"
    />

    <path
      d="M1210 30C1210 36.6274 1204.63 42 1198 42C1191.37 42 1186 36.6274 1186 30C1186 23.3726 1191.37 18 1198 18C1204.63 18 1210 23.3726 1210 30Z"
    />

    <path
      d="M1230 42C1236.63 42 1242 36.6274 1242 30C1242 23.3726 1236.63 18 1230 18C1223.37 18 1218 23.3726 1218 30C1218 36.6274 1223.37 42 1230 42Z"
    />

    <rect
      y="59"
      width="1258"
      height="1"
    />
  </ContentLoader>
);

export default DesktopSkeleton;

import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

import ISkeletonProps from '^types/ISkeletonProps';

const Desktop = (props: ISkeletonProps): ReactElement => (
  <ContentLoader
    viewBox="0 0 1184 32"
    {...props}
  >
    <rect
      width="512"
      height="32"
      rx="4"
    />

    <rect
      x="1120"
      width="64"
      height="32"
      rx="4"
    />

    <rect
      x="1048"
      width="64"
      height="32"
      rx="4"
    />
  </ContentLoader>
);

export default Desktop;

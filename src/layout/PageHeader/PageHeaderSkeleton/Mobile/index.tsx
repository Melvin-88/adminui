import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

import ISkeletonProps from '^types/ISkeletonProps';

const Mobile = (props: ISkeletonProps): ReactElement => (
  <ContentLoader
    viewBox="0 0 285 101"
    preserveAspectRatio="none"
    height="101"
    {...props}
  >
    <rect
      x="189"
      y="0"
      width="42"
      height="42"
      rx="4"
    />
    <rect
      x="243"
      y="0"
      width="42"
      height="42"
      rx="4"
    />
    <rect
      y="66"
      width="285"
      height="32"
      rx="4"
    />
  </ContentLoader>
);

export default Mobile;

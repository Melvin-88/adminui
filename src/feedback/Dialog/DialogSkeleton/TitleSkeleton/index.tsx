import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

import ISkeletonProps from '^types/ISkeletonProps';

export const TitleSkeleton = (props: ISkeletonProps): ReactElement => (
  <ContentLoader
    viewBox="0 0 422 32"
    preserveAspectRatio="none"
    height="32"
    width="100%"
    {...props}
  >
    <rect
      width="422"
      height="32"
      rx="4"
    />
  </ContentLoader>
);

export default TitleSkeleton;


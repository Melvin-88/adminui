import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

import ISkeletonProps from '^types/ISkeletonProps';

const Mobile = ({ className, ...rest }: ISkeletonProps): ReactElement => (
  <ContentLoader
    width="42"
    height="42"
    className={className}
    {...rest}
  >
    <rect
      width="42"
      height="42"
      rx="4"
    />
  </ContentLoader>
);

export default Mobile;

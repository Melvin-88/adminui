import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

import ISkeletonProps from '^types/ISkeletonProps';

const ContentSkeleton = (props: ISkeletonProps): ReactElement => (
  <ContentLoader
    viewBox="0 0 512 536"
    preserveAspectRatio="none"
    {...props}
  >
    <rect
      x="24"
      y="0"
      width="442"
      height="32"
      rx="4"
    />
    <rect
      x="24"
      y="56"
      width="364"
      height="24"
      rx="4"
    />
    <rect
      x="24"
      y="96"
      width="464"
      height="24"
      rx="4"
    />
    <rect
      x="24"
      y="136"
      width="264"
      height="24"
      rx="4"
    />
    <rect
      x="24"
      y="184"
      width="442"
      height="32"
      rx="4"
    />
    <rect
      x="24"
      y="240"
      width="364"
      height="24"
      rx="4"
    />
    <rect
      x="24"
      y="280"
      width="464"
      height="24"
      rx="4"
    />
    <rect
      x="24"
      y="320"
      width="264"
      height="24"
      rx="4"
    />
    <rect
      x="24"
      y="368"
      width="442"
      height="32"
      rx="4"
    />
    <rect
      x="24"
      y="424"
      width="364"
      height="24"
      rx="4"
    />
    <rect
      x="24"
      y="463"
      width="464"
      height="24"
      rx="4"
    />
    <rect
      x="24"
      y="504"
      width="264"
      height="24"
      rx="4"
    />
  </ContentLoader>
);

export default ContentSkeleton;


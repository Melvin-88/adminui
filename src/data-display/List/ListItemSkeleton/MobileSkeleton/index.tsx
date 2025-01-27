import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

import ISkeletonProps from '^types/ISkeletonProps';

const MobileSkeleton = (props: ISkeletonProps): ReactElement => (
  <ContentLoader
    viewBox="0 0 375 100"
    preserveAspectRatio="none"
    {...props}
  >
    <rect
      x="16"
      y="20"
      width="64"
      height="24"
      rx="4"
    />

    <rect
      x="16"
      y="56"
      width="343"
      height="24"
      rx="4"
    />

    <rect
      y="99"
      width="375"
      height="1"
    />

    <path
      d="M251 44C257.627 44 263 38.6274 263 32C263 25.3726 257.627 20 251 20C244.373 20 239 25.3726 239 32C239 38.6274 244.373 44 251 44Z"
    />

    <path
      d="M283 44C289.627 44 295 38.6274 295 32C295 25.3726 289.627 20 283 20C276.373 20 271 25.3726 271 32C271 38.6274 276.373 44 283 44Z"
    />

    <path
      d="M327 32C327 38.6274 321.627 44 315 44C308.373 44 303 38.6274 303 32C303 25.3726 308.373 20 315 20C321.627 20 327 25.3726 327 32Z"
    />

    <path
      d="M347 44C353.627 44 359 38.6274 359 32C359 25.3726 353.627 20 347 20C340.373 20 335 25.3726 335 32C335 38.6274 340.373 44 347 44Z"
    />
  </ContentLoader>
);

export default MobileSkeleton;

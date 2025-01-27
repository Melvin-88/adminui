import React, { ReactElement } from 'react';
import { SvgIconProps } from '@material-ui/core';

const MitsubishiIcon = (props: SvgIconProps): ReactElement => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3333 11.0008L16.0006 19.0004L20.6666 11.0008L16.0006 3L11.3333 11.0008ZM25.334 19.0005H16.0007L20.6667 27.0001H30L25.334 19.0005ZM11.3333 27.0001L16.0006 19.0005H6.66603L2 27.0001H11.3333Z"
    />
  </svg>
);

export default MitsubishiIcon;

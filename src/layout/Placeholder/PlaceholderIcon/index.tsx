import React, { ReactElement } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const PlaceholderIcon = (props: SvgIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="184"
    height="117"
    viewBox="0 0 184 117"
    fill="none"
    {...props}
  >
    <path
      d="M92 117C142.81 117 184 108.057 184 97.0244C184 85.9922 142.81 77.0488 92 77.0488C41.1898 77.0488 0 85.9922 0 97.0244C0 108.057 41.1898 117 92 117Z"
      fill="currentColor"
    />
    <path
      d="M158.125 39.2664L128.955 6.44366C127.555 4.20639 125.511 2.85376 123.358 2.85376H60.6424C58.489 2.85376 56.4449 4.20639 55.0447 6.44081L25.875 39.2693V65.6343H158.125V39.2664Z"
      stroke="currentColor"
    />
    <path
      d="M119.637 48.3152C119.637 43.7351 122.495 39.954 126.04 39.9512H158.125V91.708C158.125 97.7663 154.33 102.732 149.644 102.732H34.3562C29.67 102.732 25.875 97.7634 25.875 91.708V39.9512H57.96C61.5049 39.9512 64.3626 43.7266 64.3626 48.3067V48.3695C64.3626 52.9496 67.252 56.6479 70.794 56.6479H113.206C116.748 56.6479 119.637 52.9153 119.637 48.3352V48.3152Z"
      fill="white"
      stroke="currentColor"
    />
  </svg>
);

export default PlaceholderIcon;

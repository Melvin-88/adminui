import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const ElectricIcon = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path
      d="M20.9498 10.4874V15.0251C20.9498 19.9813 16.9398 24 11.9748 24C7.01873 24 3 19.9899 3 15.0251L3 10.4874C3 9.70756 3.63226 9.0753 4.41213 9.0753L19.5376 9.0753C20.3175 9.0753 20.9498 9.70756 20.9498 10.4874Z"
    />
    <path
      d="M7.4372 3.96693e-07C6.65733 4.30782e-07 6.02507 0.632258 6.02507 1.41213V6.25103L8.84933 6.25103V1.41213C8.84933 0.632258 8.21707 3.62604e-07 7.4372 3.96693e-07Z"
    />
    <path
      d="M15.1003 1.41213V6.25103H17.9246V1.41213C17.9246 0.632257 17.2923 -3.40893e-08 16.5125 0C15.7326 3.40893e-08 15.1003 0.632258 15.1003 1.41213Z"
    />
  </SvgIcon>
);

export default ElectricIcon;


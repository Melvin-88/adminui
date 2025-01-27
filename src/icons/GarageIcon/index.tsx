import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const GarageIcon = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path d="M4 21V9L12 3L20 9V21H17V11H7V21H4ZM8.5 19.5H15.5V16.75H8.5V19.5ZM8.5 15.25H15.5V12.5H8.5V15.25Z" />
  </SvgIcon>
);

export default GarageIcon;

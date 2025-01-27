import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const ImportIcon = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path
      d="M15.59 9.41L13 6.83V16.5H11V6.83L8.41 9.41L7 8L12 3L17 8L15.59 9.41Z"
    />
    <path
      d="M21 19V21H3V19H21Z"
    />
  </SvgIcon>
);

export default ImportIcon;

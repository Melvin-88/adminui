import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const ExportIcon = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path
      d="M21 19H3V21H21V19ZM13 12.67L15.59 10.09L17 11.5L12 16.5L7 11.5L8.41 10.09L11 12.67V3H13V12.67Z"
    />
  </SvgIcon>
);

export default ExportIcon;

import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const CloseSmallIcon = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path
      d="M16.8787 8.53134L15.4687 7.12134L12 10.59L8.53134 7.12134L7.12134 8.53134L10.59 12L7.12134 15.4687L8.53134 16.8787L12 13.41L15.4687 16.8787L16.8787 15.4687L13.41 12L16.8787 8.53134Z"
    />
  </SvgIcon>
);

export default CloseSmallIcon;

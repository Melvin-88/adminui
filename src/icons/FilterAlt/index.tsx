import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const FilterAlt = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path
      d="M10.0001 13C10.0001 13 6.27006 8.2 4.25006 5.61C3.74006 4.95 4.21006 4 5.04006 4H18.9501C19.7801 4 20.2501 4.95 19.7401 5.61C17.7201 8.2 14.0001 13 14.0001 13V19C14.0001 19.55 13.5501 20 13.0001 20H11.0001C10.4501 20 10.0001 19.55 10.0001 19V13ZM6.99988 6H16.9999L15.1211 8.3625H8.87113L6.99988 6Z"
    />
  </SvgIcon>
);

export default FilterAlt;

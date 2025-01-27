import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const FilterAltOutlined = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path
      d="M6.99993 6H16.9999L11.9899 12.3L6.99993 6ZM4.24993 5.61C6.26993 8.2 9.99993 13 9.99993 13V19C9.99993 19.55 10.4499 20 10.9999 20H12.9999C13.5499 20 13.9999 19.55 13.9999 19V13C13.9999 13 17.7199 8.2 19.7399 5.61C20.2499 4.95 19.7799 4 18.9499 4H5.03993C4.20993 4 3.73993 4.95 4.24993 5.61Z"
    />
  </SvgIcon>
);

export default FilterAltOutlined;

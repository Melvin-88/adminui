import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const TextIcon = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path
      d="M3.67837 0H0V3.67837H3.67837V0Z"
    />
    <path
      d="M24 0H20.3217V3.67837H24V0Z"
    />
    <path
      d="M20.3217 20.3217H24V24.0001H20.3217V20.3217Z"
    />
    <path
      d="M18.3519 5.64819V1.84656H5.64819V5.64819H1.84656V18.3519H5.64819V22.1535H18.3519V18.3519H22.1535V5.64819H18.3519ZM16.9715 7.56248H13.0874V18.4212H10.9176V7.56248H7.0335V5.5837H16.9764L16.9715 7.56248Z"
    />
    <path
      d="M0 20.3217H3.67837V24.0001H0V20.3217Z"
    />
  </SvgIcon>
);

export default TextIcon;

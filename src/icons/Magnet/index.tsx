import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const MagnetIcon = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path d="M14.1999 3.57052L10.8603 0.258345C10.5158 -0.086115 9.95916 -0.086115 9.6146 0.258345L7.22918 2.66961L11.788 7.22716L14.1999 4.81589C14.5445 4.47143 14.5445 3.91498 14.1999 3.57052Z" />
    <path d="M23.7416 13.1096L20.4285 9.79741C20.0839 9.45294 19.5273 9.45294 19.1828 9.79741L16.7709 12.2087L21.3297 16.7662L23.7416 14.355C24.0861 14.0105 24.0861 13.454 23.7416 13.1096Z" />
    <path d="M12.4771 16.5012L15.5251 13.454L20.1104 18.0116L17.0624 21.0588C15.2071 22.9401 12.6626 24 10.0122 24C7.3352 24 4.79075 22.9401 2.90892 21.0588C-0.987264 17.1372 -0.960761 10.8308 2.93543 6.96218L5.98346 3.91498L10.5423 8.47253L7.49423 11.5197C6.11598 12.8976 6.11598 15.1234 7.49423 16.5012C8.87247 17.8791 11.0989 17.8791 12.4771 16.5012Z" />
  </SvgIcon>
);

export default MagnetIcon;

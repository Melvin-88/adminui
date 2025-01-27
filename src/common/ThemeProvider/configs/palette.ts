import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import AdditionalColorWeight from '^enums/colors/AdditionalColorWeight';
import GreyColorWeight from '^enums/colors/GreyColorWeight';
import MainColorWeight from '^enums/colors/MainColorWeight';

import { primary, secondary, grey, red, green } from './colors';

const palette: PaletteOptions = {
  primary: {
    main: primary[MainColorWeight.w500],
    dark: primary[MainColorWeight.w700],
    light: primary[MainColorWeight.w400],
    contrastText: grey[GreyColorWeight.w000],
  },
  secondary: {
    main: secondary[MainColorWeight.w500],
    dark: secondary[MainColorWeight.w700],
    light: secondary[MainColorWeight.w400],
    contrastText: grey[GreyColorWeight.w000],
  },
  action: {
    disabled: grey[GreyColorWeight.w200],
    disabledBackground: grey[GreyColorWeight.w100],
  },
  error: {
    main: red[AdditionalColorWeight.w500],
  },
  success: {
    main: green[AdditionalColorWeight.w500],
  },
  warning: {
    main: grey[GreyColorWeight.w400],
  },
  info: {
    main: primary[MainColorWeight.w300],
  },
};

export default palette;

import { alpha } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';

import GreyColorWeight from '^enums/colors/GreyColorWeight';
import MainColorWeight from '^enums/colors/MainColorWeight';

import { grey, primary, secondary } from './colors';

const overrides: Overrides = {
  MuiAccordion: {
    root: {
      borderWidth: '0 0 1px 0px',
      '&::before': {
        height: 0,
      },
      '&$expanded': {
        margin: 0,
      },
    },
  },
  MuiFab: {
    root: {
      backgroundColor: grey[GreyColorWeight.w500],
      color: grey[GreyColorWeight.w000],
      '&:hover': {
        backgroundColor: grey[GreyColorWeight.w700],
        '@media (hover: none)': {
          backgroundColor: grey[GreyColorWeight.w700],
        },
      },
    },
  },
  MuiAlert: {
    outlinedWarning: {
      backgroundColor: secondary[MainColorWeight.w100],
      borderRadius: 0,
      borderColor: secondary[MainColorWeight.w100],
      color: secondary[MainColorWeight.w500],
      '& $icon': {
        color: 'currentColor',
      },
    },
  },
  MuiAccordionSummary: {
    expandIcon: {
      color: grey[GreyColorWeight.w900],
    },
  },
  MuiFormControlLabel: {
    label: {
      color: grey[GreyColorWeight.w900],
      '&$disabled': {
        color: grey[GreyColorWeight.w200],
      },
    },
  },
  MuiCheckbox: {
    colorPrimary: {
      color: primary[MainColorWeight.w500],
      '&$disabled': {
        color: primary[MainColorWeight.w300],
      },
    },
    colorSecondary: {
      color: secondary[MainColorWeight.w500],
      '&$disabled': {
        color: secondary[MainColorWeight.w300],
      },
    },
  },
  MuiRadio: {
    colorPrimary: {
      color: primary[MainColorWeight.w500],
      '&$disabled': {
        color: primary[MainColorWeight.w300],
      },
    },
    colorSecondary: {
      color: secondary[MainColorWeight.w500],
      '&$disabled': {
        color: secondary[MainColorWeight.w300],
      },
    },
  },
  MuiSwitch: {
    switchBase: {
      color: grey[GreyColorWeight.w050],
      '&$disabled+ .MuiSwitch-track': {
        opacity: 1,
      },
    },
    track: {
      backgroundColor: grey[GreyColorWeight.w200],
      opacity: 1,
    },
    colorPrimary: {
      '&$checked:not($disabled) + .MuiSwitch-track': {
        backgroundColor: primary[MainColorWeight.w300],
        opacity: 1,
      },
      '&$disabled': {
        color: grey[GreyColorWeight.w400],
        '& + .MuiSwitch-track': {
          backgroundColor: grey[GreyColorWeight.w100],
        },
      },
    },
    colorSecondary: {
      '&$checked:not($disabled) + .MuiSwitch-track': {
        backgroundColor: secondary[MainColorWeight.w300],
        opacity: 1,
      },
      '&$disabled': {
        color: grey[GreyColorWeight.w400],
        '& + .MuiSwitch-track': {
          backgroundColor: grey[GreyColorWeight.w100],
        },
      },
    },
  },
  MuiChip: {
    root: {
      backgroundColor: grey[GreyColorWeight.w050],
      color: grey[GreyColorWeight.w800],
    },
    icon: {
      color: grey[GreyColorWeight.w400],
    },
  },
  MuiFormLabel: {
    root: {
      color: grey[GreyColorWeight.w400],
      '&$disabled': {
        color: grey[GreyColorWeight.w100],
      },
    },
  },
  MuiButton: {
    root: {
      color: grey[GreyColorWeight.w500],
      '&:hover': {
        backgroundColor: grey[GreyColorWeight.w100],
      },
    },
    outlined: {
      color: grey[GreyColorWeight.w500],
      borderColor: grey[GreyColorWeight.w500],
      '&:hover': {
        backgroundColor: grey[GreyColorWeight.w100],
      },
    },
    contained: {
      color: grey[GreyColorWeight.w000],
      backgroundColor: grey[GreyColorWeight.w500],
      '&:hover': {
        backgroundColor: grey[GreyColorWeight.w700],
      },
    },
  },
  MuiIconButton: {
    root: {
      padding: '9px',
      color: grey[GreyColorWeight.w400],
      '&:hover': {
        backgroundColor: alpha(grey[GreyColorWeight.w100], 0.4),
      },
    },
    sizeSmall: {
      padding: '6px',
    },
    label: {
      '& > .MuiSvgIcon-root': {
        fontSize: 'inherit',
      },
    },
  },
  MuiOutlinedInput: {
    root: {
      '&$disabled': {
        '& .MuiOutlinedInput-notchedOutline, .MuiInputAdornment-root': {
          borderColor: grey[GreyColorWeight.w100],
          color: grey[GreyColorWeight.w100],
        },
      },
    },
    notchedOutline: {
      borderColor: grey[GreyColorWeight.w200],
    },
  },
  MuiInputAdornment: {
    root: {
      color: grey[GreyColorWeight.w200],
      '& > .MuiTypography-root': {
        color: 'inherit',
      },
    },
  },
  MuiDialogTitle: {
    root: {
      padding: '16px 16px 16px 24px',
    },
  },
  MuiListSubheader: {
    root: {
      padding: '6px 8px',
      lineHeight: '16px',
      color: grey[GreyColorWeight.w500],
      fontWeight: 400,
    },
    gutters: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  MuiListItem: {
    root: {
      color: grey[GreyColorWeight.w900],
    },
  },
};

export default overrides;

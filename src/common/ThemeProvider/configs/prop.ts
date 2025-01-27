import { ComponentsProps } from '@material-ui/core/styles/props';

const props: ComponentsProps = {
  MuiAlert: {
    variant: 'filled',
  },
  MuiAutocomplete: {
    fullWidth: true,
  },
  MuiAccordion: {
    elevation: 0,
    square: true,
    variant: 'outlined',
  },
  MuiCheckbox: {
    color: 'primary',
  },
  MuiRadio: {
    color: 'primary',
  },
  MuiRadioGroup: {
    color: 'primary',
  },
  MuiSwitch: {
    color: 'primary',
  },
  MuiButtonBase: {
    disableRipple: true,
  },
  MuiButton: {
    variant: 'contained',
    color: 'primary',
    size: 'large',
    disableElevation: true,
  },
  MuiTextField: {
    variant: 'outlined',
    color: 'primary',
    fullWidth: true,
  },
  MuiTabs: {
    indicatorColor: 'primary',
  },
  MuiTooltip: {
    interactive: true,
    // Fixes issue with layout shifts of embedded Iframes
    // https://bytdyt.atlassian.net/browse/SP-2817
    PopperProps: {
      disablePortal: true,
    },
  },
};

export default props;

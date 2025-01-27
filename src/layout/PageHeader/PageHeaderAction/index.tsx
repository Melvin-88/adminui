import React, { ReactElement, useCallback } from 'react';

import IPageHeaderAction from '^types/IPageHeaderAction';
import { useDeviceType } from '^common/DeviceTypeProvider';
import IconButton from '^controls/IconButton';
import Button from '^controls/Button';

export interface IPageHeaderActionProps extends IPageHeaderAction {
  className?: string;
}

const PageHeaderAction = ({ type, variant, color = 'primary', value, Icon, label, onClick, ...rest }: IPageHeaderActionProps): ReactElement => {
  const { isDesktop } = useDeviceType();

  const handleClick = useCallback(
    (): void => {
      if (typeof onClick === 'function') {
        onClick(value);
      }
    },
    [value, onClick],
  );

  return !isDesktop || type === 'icon'
    ? (
      <IconButton
        label={label}
        onClick={handleClick}
        color={color}
        {...rest}
      >
        <Icon />
      </IconButton>
    )
    : (
      <Button
        startIcon={<Icon />}
        size="medium"
        variant={variant}
        onClick={handleClick}
        color={color}
        {...rest}
      >
        {label}
      </Button>
    );
};

export default PageHeaderAction;

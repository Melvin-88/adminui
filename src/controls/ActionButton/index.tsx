import React, { ReactElement, useCallback, MouseEvent, ReactNode } from 'react';

import Button, { IButtonProps } from '^controls/Button';

export interface IActionButtonProps extends Omit<IButtonProps, 'children'> {
  label?: ReactNode;
}

const ActionButton = ({ onClick, label, ...props }: IActionButtonProps): ReactElement => {
  const handleButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      if (typeof onClick === 'function') {
        onClick(e);
      }
    },
    [onClick],
  );

  return (
    <Button
      {...props}
      onClick={handleButtonClick}
    >
      {label}
    </Button>
  );
};

export default ActionButton;

import React, { ElementType, ReactElement, useCallback } from 'react';
import { Tab } from '@material-ui/core';

import TWithOverridableComponent from '^types/TWithOverridableComponent';
import TPageHeaderTab from '^types/TPageHeaderTab';

export type IPageHeaderTabProps<
  RootElement extends ElementType = 'button',
  TabType extends TPageHeaderTab<RootElement> = TPageHeaderTab<RootElement>
> = {
  onClick?: (value: string) => void;
} & TWithOverridableComponent<RootElement, TabType>;

const PageHeaderTab = <
  RootComponent extends ElementType = 'button',
  TabType extends TPageHeaderTab<RootComponent> = TPageHeaderTab<RootComponent>
>({
    label,
    value,
    onClick,
    ...rest
  }: IPageHeaderTabProps<RootComponent, TabType>): ReactElement => {
  const handleClick = useCallback((): void => {
    if (typeof onClick === 'function') {
      onClick(value);
    }
  }, [value, onClick]);

  return (
    <Tab
      value={value}
      onClick={handleClick}
      label={label}
      {...rest}
    />
  );
};

export default PageHeaderTab;

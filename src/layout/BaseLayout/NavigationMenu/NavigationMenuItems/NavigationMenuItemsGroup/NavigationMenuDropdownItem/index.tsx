import React, { forwardRef, ReactElement } from 'react';
import classNames from 'classnames';

import MenuItem, { TMenuItemRef } from '^common/MenuItem';
import INavigationMenuItem from '^types/INavigationMenuItem';

import styles from './styles.module.scss';

const NavigationMenuDropdownItem = forwardRef(({ className, label, Icon, ...rest }: INavigationMenuItem, ref: TMenuItemRef): ReactElement => (
  <MenuItem
    {...rest}
    ref={ref}
    className={classNames(styles.navigationMenuDropdownMenuItem, className)}
    label={(
      <>
        <Icon className={styles.icon} />

        {label}
      </>
    )}
  />
));

export default NavigationMenuDropdownItem;

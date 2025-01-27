import React, { ComponentType, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { SvgIconProps, Typography } from '@material-ui/core';

import PlaceholderIcon from './PlaceholderIcon';
import styles from './styles.module.scss';

export interface IPlaceholderProps {
  title: ReactNode;
  subTitle?: ReactNode;
  className?: string;
  Icon?: ComponentType<SvgIconProps>
  iconClassName?: string;
  children?: ReactNode
}

const Placeholder = ({ title, subTitle, className, Icon = PlaceholderIcon, iconClassName, children }: IPlaceholderProps): ReactElement => (
  <div className={classNames(styles.placeholder, className)}>
    <Typography
      className={styles.title}
      variant="h6"
    >
      {title}
    </Typography>
    {!!subTitle && (
      <Typography
        className={styles.subTitle}
        variant="body2"
      >
        {subTitle}
      </Typography>
    )}
    <Icon className={classNames(styles.icon, iconClassName)} />
    {!!children && (
      <div className={styles.children}>{children}</div>
    )}
  </div>
);

export default Placeholder;

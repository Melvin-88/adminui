import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import React, { ReactElement, ReactNode } from 'react';

import styles from './styles.module.scss';

export interface IFormSectionProps {
  label?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

const FormSection = ({
  className,
  label,
  children,
  action,
}: IFormSectionProps): ReactElement => (
  <div className={classNames(styles.formSection, className)}>
    {!!label || !!action ? (
      <div className={styles.formSectionLabel}>
        <Typography variant="subtitle2">{label}</Typography>
        {action}
      </div>
    ) : null}

    {children}
  </div>
);

export default FormSection;

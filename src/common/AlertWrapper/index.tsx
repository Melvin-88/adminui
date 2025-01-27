import React, { ReactNode, ReactElement } from 'react';
import { Alert, AlertProps } from '@material-ui/lab';

import styles from './styles.module.scss';

interface IAlertWrapperProps {
  content: ReactNode;
  severity: AlertProps['severity'];
}

const AlertWrapper = ({ content, severity }: IAlertWrapperProps): ReactElement => (
  <Alert
    className={styles.alertWrapper}
    severity={severity}
  >
    {content}
  </Alert>
);

export default AlertWrapper;

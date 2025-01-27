import { AlertProps } from '@material-ui/lab';
import React, { ReactNode, Key } from 'react';
import { toast } from 'react-toastify';

import AlertWrapper from '^common/AlertWrapper';

class NotificationService {
  private baseNotification = (content: ReactNode, severity: AlertProps['severity']): Key => toast(
    <AlertWrapper
      content={content}
      severity={severity}
    />,
  );

  public success = (content: ReactNode): Key => this.baseNotification(content, 'success');
  public info = (content: ReactNode): Key => this.baseNotification(content, 'info');
  public warning = (content: ReactNode): Key => this.baseNotification(content, 'warning');
  public error = (content: ReactNode): Key => this.baseNotification(content, 'error');
}

export default new NotificationService();

import React, { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';

import { useDeviceType } from '^common/DeviceTypeProvider';

import 'react-toastify/dist/ReactToastify.min.css';

const TOASTS_LIMIT = 5;

const NotificationContainer = (): ReactElement => {
  const { isDesktop } = useDeviceType();

  return (
    <ToastContainer
      closeButton={false}
      hideProgressBar
      limit={TOASTS_LIMIT}
      position={isDesktop ? 'bottom-right' : 'bottom-center'}
    />
  );
};

export default NotificationContainer;

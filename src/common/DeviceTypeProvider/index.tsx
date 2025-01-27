import React, { ReactElement, ReactNode, useState, useMemo, useEffect } from 'react';

import DeviceType from '^enums/DeviceType';

import { Context, IDeviceTypeContext } from './context';
import { computeDeviceType } from './utils';

export { useDeviceType } from './context';

export interface IDeviceTypeProviderProps {
  children: ReactNode;
}

const DeviceTypeProvider = ({ children }: IDeviceTypeProviderProps): ReactElement => {
  const [deviceType, setDeviceType] = useState<DeviceType>(computeDeviceType());

  useEffect(
    (): (() => void) => {
      const handleResize = (): void => setDeviceType(computeDeviceType());

      window.addEventListener('resize', handleResize);

      return (): void => window.removeEventListener('resize', handleResize);
    },
    [],
  );

  const value = useMemo(
    (): IDeviceTypeContext => ({
      deviceType,
      isMobile: deviceType === DeviceType.Mobile,
      isTablet: deviceType === DeviceType.Tablet,
      isDesktop: deviceType === DeviceType.Desktop,
    }),
    [deviceType],
  );

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default DeviceTypeProvider;

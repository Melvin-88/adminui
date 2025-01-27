import { createContext, useContext } from 'react';

import DeviceType from '^enums/DeviceType';

import { computeDeviceType } from './utils';

export interface IDeviceTypeContext {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const defaultValue: IDeviceTypeContext = {
  deviceType: computeDeviceType(),
  isMobile: true,
  isTablet: false,
  isDesktop: false,
};

export const Context = createContext<IDeviceTypeContext>(defaultValue);

export const useDeviceType = (): IDeviceTypeContext => useContext(Context);

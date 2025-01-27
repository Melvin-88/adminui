import DeviceType from '^enums/DeviceType';

const DEVICE_TYPE_KEY = '--device-type';

export const computeDeviceType = (): DeviceType => getComputedStyle(document.documentElement)
  .getPropertyValue(DEVICE_TYPE_KEY)
  .trim() as DeviceType;

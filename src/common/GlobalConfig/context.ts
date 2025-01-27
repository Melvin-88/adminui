import { createContext, useContext } from 'react';

import Locale from '^enums/Locale';
import IGlobalConfig from '^types/IGlobalConfig';

export const defaultValue: IGlobalConfig = {
  locale: Locale.DK,
  textOverrides: {},
};

const context = createContext(defaultValue);

export const { Provider } = context;

export const useGlobalConfig = (): IGlobalConfig => useContext(context);

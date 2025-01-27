import React, { ReactElement, useEffect, useMemo } from 'react';
import merge from 'lodash.merge';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MediaUtilsProvider, IMediaUtilsProviderProps } from '@interdan/media-utils';

import ThemeProvider, { IThemeProviderProps } from '^common/ThemeProvider';
import IGlobalConfig from '^types/IGlobalConfig';
import DeepPartial from '^types/DeepPartial';
import DeviceTypeProvider from '^common/DeviceTypeProvider';
import NotificationContainer from '^feedback/NotificationContainer';
import dateTimeLocales from '^configs/dateTimeLocales';
import LocaleService from '^utils/LocaleService';

import { defaultValue, Provider } from './context';

export { useGlobalConfig } from './context';

export interface IGlobalConfigProps extends IThemeProviderProps, IMediaUtilsProviderProps, DeepPartial<IGlobalConfig> {}

const GlobalConfig = ({ theme, cloudinaryConfig, children, ...config }: IGlobalConfigProps): ReactElement => {
  const value = useMemo(
    (): IGlobalConfig => merge(defaultValue, config),
    [config],
  );

  useEffect(
    (): void => {
      if (config.locale) {
        LocaleService.locale = config.locale;
      }
    },
    [config.locale],
  );

  return (
    <DeviceTypeProvider>
      <MediaUtilsProvider cloudinaryConfig={cloudinaryConfig}>
        <MuiPickersUtilsProvider
          utils={DateFnsUtils}
          locale={dateTimeLocales[value.locale]}
        >
          <ThemeProvider theme={theme}>
            <NotificationContainer />
            <Provider value={value}>
              {children}
            </Provider>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </MediaUtilsProvider>
    </DeviceTypeProvider>
  );
};

export default GlobalConfig;

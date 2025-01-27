import { createContext, useContext } from 'react';

export interface IFormProviderContext {
  disabled?: boolean;
}

const defaultValue: IFormProviderContext = {
  disabled: false,
};

const context = createContext(defaultValue);

export const { Provider } = context;

export const useFormProviderContext = (): IFormProviderContext => useContext(context);

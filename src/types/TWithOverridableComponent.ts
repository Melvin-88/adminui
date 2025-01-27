import { ElementType, ComponentProps } from 'react';

type TWithOverridableComponent<T extends ElementType, Props> = {
  component?: T;
} & ComponentProps<T> &
  Props;

export default TWithOverridableComponent;

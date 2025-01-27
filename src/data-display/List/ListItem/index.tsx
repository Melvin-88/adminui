import React, { ElementType, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

import TWithOverridableComponent from '^types/TWithOverridableComponent';

import styles from './styles.module.scss';

export interface IListItemProps {
  children: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  error?: boolean;
  className?: string;
  disableHover?: boolean;
  onClick?: () => void;
}

const ListItem = <RootComponent extends ElementType = 'div'>({
  component: Component = 'div',
  ...props
}: TWithOverridableComponent<RootComponent, IListItemProps>): ReactElement => {
  const {
    className,
    onClick,
    disabled,
    selected,
    error,
    children,
    disableHover,
    ...rest
  } = props as IListItemProps;

  return (
    <Component
      className={classNames(
        styles.item,
        {
          [styles.disabled]: disabled,
          [styles.error]: error,
          [styles.selected]: selected,
          [styles.disableHover]: disableHover,
          [styles.pointer]: typeof onClick === 'function',
        },
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default ListItem;

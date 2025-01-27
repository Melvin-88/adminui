import React, { ElementType, ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

import NavigationMenu, { INavigationMenuProps } from './NavigationMenu';
import styles from './styles.module.scss';

export interface IBaseLayoutProps<
  NavigationButtonRootComponent extends ElementType = 'button'
> {
  navigationMenuProps: INavigationMenuProps<NavigationButtonRootComponent>;
  children: ReactNode;
  className?: string;
  header?: ReactNode;
}

const BaseLayout = <
  NavigationButtonRootComponent extends ElementType = 'button'
>({
    className,
    navigationMenuProps,
    children,
    header,
  }: IBaseLayoutProps<NavigationButtonRootComponent>): ReactElement => (
    <div className={classNames(styles.baseLayout, className)}>
      {header}
      <NavigationMenu<NavigationButtonRootComponent> {...navigationMenuProps} />

      <div className={styles.content}>{children}</div>
    </div>
  );

export default BaseLayout;

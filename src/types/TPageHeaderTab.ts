import { ElementType } from 'react';

import IPageHeaderTab from '^types/IPageHeaderTab';
import TWithOverridableComponent from '^types/TWithOverridableComponent';

type TPageHeaderTab<RootComponent extends ElementType = 'button'> =
  TWithOverridableComponent<RootComponent, IPageHeaderTab>;

export default TPageHeaderTab;

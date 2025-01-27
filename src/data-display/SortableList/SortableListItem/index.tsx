import React, { ReactElement } from 'react';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import ListItem, { IListItemProps } from '^data-display/List/ListItem';

import styles from './styles.module.scss';

export interface ISortableListItemProps extends IListItemProps {}

const SortableListItem = ({ children, ...rest }: ISortableListItemProps): ReactElement => (
  <ListItem {...rest}>
    <div className={styles.item}>
      {children}
      <DragIndicatorIcon />
    </div>
  </ListItem>
);

export default SortableListItem;

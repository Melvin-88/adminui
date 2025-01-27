import React, { Key, ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Typography } from '@material-ui/core';

import ISortingItem from '^types/ISortingItem';
import Label from '^data-display/Label';

import SortableListItem from './SortableListItem';

import SortableListComponent, { ISortableListProps, ISortableListItemImplementationProps } from '.';

interface ICustomItem extends ISortingItem {
  highlighted: boolean;
}

const customItems: ICustomItem[] = [
  { id: 1, key: 1, name: 'First item', highlighted: true },
  { id: 2, key: 2, name: 'Second item', highlighted: false },
  { id: 3, key: 3, name: 'Third item', highlighted: true },
  { id: 4, key: 4, name: 'Fourth item', highlighted: false },
];

const items: ISortingItem[] = [
  { id: 1, key: 1, name: 'First item' },
  { id: 2, key: 2, name: 'Second item' },
  { id: 3, key: 3, name: 'Third item' },
  { id: 4, key: 4, name: 'Fourth item' },
];

const BaseSortableListItem = ({ item, ...rest }: ISortableListItemImplementationProps<ICustomItem>): ReactElement => (
  <SortableListItem {...rest}>
    <Typography variant="body2">{item.name}</Typography>
  </SortableListItem >
);

const CustomSortableListItem = ({ item, ...rest }: ISortableListItemImplementationProps<ICustomItem>): ReactElement => (
  <SortableListItem {...rest}>
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      <Typography variant="body2">{item.name}</Typography>
      <div>
        <Label
          color={item.highlighted ? 'primary' : 'red'}
          label="Label"
        />
      </div>
    </div>
  </SortableListItem >
);

const handleOrderChange = (list: ISortingItem[]): void => console.log(list); // eslint-disable-line no-console

const Template: StoryFn<ISortableListProps<ISortingItem>> = (args: ISortableListProps<ISortingItem>): ReactElement => (
  <SortableListComponent
    {...args}
  />
);

export const SortableList = Template.bind({});

SortableList.storyName = 'SortableList';

SortableList.args = {
  items,
  onOrderChange: handleOrderChange,
  Item: BaseSortableListItem,
  multiSelect: true,
  computeItemKey: (_i: number, { id }: ISortingItem): Key => id,
} as ISortableListProps<ISortingItem>;

export const CustomItem = Template.bind({}) as unknown as StoryFn<ISortableListProps<ICustomItem>>;

CustomItem.args = {
  items: customItems,
  Item: CustomSortableListItem,
  onOrderChange: handleOrderChange,
  computeItemKey: (i: number): Key => i,
} as ISortableListProps<ICustomItem>;

export default {
  title: 'AdminUI/Data Display/SortableList',
  component: SortableListComponent,
} as Meta<ISortableListProps<ISortingItem>>;

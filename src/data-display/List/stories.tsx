import React, { ReactElement, Key, useCallback, useState, ReactNode } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Typography } from '@material-ui/core';

import Label from '^data-display/Label';
import Dialog from '^feedback/Dialog';

import ListItem from './ListItem';
import styles from './stories.styles.module.scss';

import ListComponent, { IListItemImplementationProps, IListProps } from '.';

interface IListItem {
  name: ReactNode;
  key: Key;
}

interface ICustomItem extends IListItem {
  highlighted: boolean;
}

interface IOneOfManyItems {
  code: string,
}

const items: IListItem[] = [
  { key: 1, name: 'Default' },
  { key: 2, name: 'With error' },
  { key: 3, name: 'Selected' },
  { key: 4, name: 'Disabled' },
  { key: 5, name: 'Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text Long text' },
];

const customItems: ICustomItem[] = [
  { key: 1, name: 'Test', highlighted: true },
  { key: 2, name: 'test 2', highlighted: false },
  { key: 3, name: 'Test 3', highlighted: true },
];

const lotsOfItems = [...new Array(1e4)]
  .map((i: undefined, index: number): IOneOfManyItems => ({
    code: `${index} - ${Math.random().toString(36)
      .slice(-8)}`,
  }));

const BaseListItem = ({ item, onClick, ...rest }: IListItemImplementationProps<IListItem>): ReactElement => (
  <ListItem
    onClick={onClick}
    {...rest}
  >
    <Typography variant="body2">{item.name}</Typography>
  </ListItem>
);

const OneOfManyListItem = ({ item, ...rest }: IListItemImplementationProps<IOneOfManyItems>): ReactElement => (
  <ListItem {...rest}>
    <Typography variant="body2">{item.code}</Typography>
  </ListItem>
);

const CustomListItem = ({ item, ...rest }: IListItemImplementationProps<ICustomItem>): ReactElement => (
  <ListItem {...rest}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="body2">{item.name}</Typography>
      <div>
        <Label
          color={item.highlighted ? 'primary' : 'red'}
          label="Label"
        />
      </div>
    </div>
  </ListItem>
);

const getItemError = (item: IListItem): boolean => item?.key === 2;
const getItemSelected = (item: IListItem): boolean => item?.key === 3;
const getItemDisabled = (item: IListItem): boolean => item?.key === 4;
const getKey = (_i: number, { key }: IListItem): Key => key;

const handleItemClick = <ItemType, >(item: ItemType): void => {
  alert(JSON.stringify(item, null, 2));
};

const Template: StoryFn<IListProps<IListItem>> = (args: IListProps<IListItem>): ReactElement => (
  <ListComponent {...args} />
);

export const List = Template.bind({});

List.args = {
  items,
  Item: BaseListItem,
  getItemError,
  getItemDisabled,
  getItemSelected,
  onItemClick: handleItemClick,
  computeItemKey: getKey,
} as IListProps<IListItem>;

export const CustomItem = Template.bind({}) as unknown as StoryFn<IListProps<ICustomItem>>;

CustomItem.args = {
  items: customItems,
  Item: CustomListItem,
  computeItemKey: getKey,
} as IListProps<ICustomItem>;

export const Loading = Template.bind({});
Loading.args = {
  items,
  loading: true,
};

export const LongList = Template.bind({}) as unknown as StoryFn<IListProps<IOneOfManyItems>>;

LongList.args = {
  items: lotsOfItems,
  Item: OneOfManyListItem,
  onItemClick: handleItemClick,
  computeItemKey: (_i: number, { code }: IOneOfManyItems): Key => code,
} as IListProps<IOneOfManyItems>;

export const LongListNotVirtualized = Template.bind({}) as unknown as StoryFn<IListProps<IOneOfManyItems>>;

LongListNotVirtualized.args = {
  items: lotsOfItems,
  Item: OneOfManyListItem,
  onItemClick: handleItemClick,
  computeItemKey: (_i: number, { code }: IOneOfManyItems): Key => code,
  isVirtualizationDisabled: true,
} as IListProps<IOneOfManyItems>;

interface IParentDependentListItem extends IListItemImplementationProps<IListItem> {
  onDoubleClick: (item: IListItem) => void;
  isinitialized: boolean;
}

const ParentDependentListItem = ({ item, onDoubleClick, ...rest }: IParentDependentListItem): ReactElement => {
  const handleClick = useCallback(
    (): void => {
      if (typeof onDoubleClick === 'function') {
        onDoubleClick(item);
      }
    },
    [item, onDoubleClick],
  );

  return (
    <ListItem
      {...rest}
      onClick={handleClick}
    >
      <Typography variant="body2">{item.name}</Typography>
    </ListItem>
  );
};

export const Parent = (): ReactElement => {
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);

  const handleItemDoubleClick = useCallback(
    (): void => {
      setIsDialogOpened(true);
    },
    [],
  );

  return (
    <>
      <ListComponent
        items={items}
        Item={ParentDependentListItem}
        computeItemKey={getKey}
        additionalItemProps={{
          onDoubleClick: handleItemDoubleClick,
          isinitialized: false,
        }}
      />

      <Dialog
        title="Test"
        open={isDialogOpened}
        onClose={(): void => setIsDialogOpened(false)}
      />
    </>
  );
};

const listContainer = (Story:StoryFn):ReactElement => (
  <div className={styles.listContainer}>
    <Story />
  </div>
);

export default {
  title: 'AdminUI/Data Display/List',
  component: ListComponent,
  decorators: [listContainer],
} as Meta<IListProps<IListItem>>;

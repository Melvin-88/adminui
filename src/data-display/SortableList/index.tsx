import React, {
  ComponentType,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { ReactSortable } from 'react-sortablejs';

import { TComputeItemKey } from '^data-display/List';
import ListItemSkeleton from '^data-display/List/ListItemSkeleton';
import SkeletonProvider from '^data-display/SkeletonProvider';
import ISkeletonProps from '^types/ISkeletonProps';
import ISortingItem from '^types/ISortingItem';

import { ISortableListItemProps } from './SortableListItem';

const ANIMATION_SPEED = 300;

export interface ISortableListItemImplementationProps<
  ItemType extends ISortingItem
> extends Omit<ISortableListItemProps, 'children'> {
  item: ItemType;
}

export interface ISortableListProps<ItemType extends ISortingItem> {
  multiSelect?: boolean;
  items: ItemType[];
  onOrderChange: (list: ItemType[]) => void;
  ItemsSkeleton?: ComponentType<ISkeletonProps>;
  loading?: boolean;
  className?: string;
  skeletonClassName?: string;
  Item: ComponentType<ISortableListItemImplementationProps<ItemType>>;
  computeItemKey: TComputeItemKey<ItemType>
}

const SortableList = <ItemType extends ISortingItem>({
  multiSelect,
  onOrderChange,
  Item,
  ItemsSkeleton = ListItemSkeleton,
  items,
  loading,
  className,
  skeletonClassName,
  computeItemKey,
}: ISortableListProps<ItemType>): ReactElement => {
  const [list, setList] = useState<ItemType[]>(items);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleChange = useCallback(
    (newList: ItemType[]): void => setList(newList),
    [],
  );

  const handleEnd = useCallback((): void => {
    onOrderChange(list);
    setIsDragging(false);
  }, [list, onOrderChange]);

  const handleStart = useCallback((): void => setIsDragging(true), []);

  useEffect((): void => setList(items), [items]);

  return (
    <div className={className}>
      <SkeletonProvider
        className={skeletonClassName}
        showSkeleton={!!loading}
        Skeleton={ItemsSkeleton}
      >
        <ReactSortable
          list={list}
          setList={handleChange}
          onStart={handleStart}
          onEnd={handleEnd}
          multiDrag={!!multiSelect}
          animation={ANIMATION_SPEED}
        >
          {list.map(
            (item: ItemType, index: number): ReactElement => (
              <Item
                item={item}
                selected={item.selected}
                disableHover={isDragging}
                key={computeItemKey(index, item)}
              />
            ),
          )}
        </ReactSortable>
      </SkeletonProvider>
    </div>
  );
};

export default SortableList;

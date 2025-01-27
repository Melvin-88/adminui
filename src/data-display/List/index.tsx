import React, { ComponentType, ReactElement, Key, useCallback } from 'react';
import classNames from 'classnames';
import { Virtuoso } from 'react-virtuoso';

import ISkeletonProps from '^types/ISkeletonProps';
import SkeletonProvider from '^data-display/SkeletonProvider';

import { IListItemProps } from './ListItem';
import ListItemsSkeleton from './ListItemSkeleton';
import styles from './styles.module.scss';

export interface IListItemImplementationProps<ItemType>
  extends Omit<IListItemProps, 'children'> {
  item: ItemType;
}

export type TComputeItemKey<ItemType> = (index: number, item: ItemType) => Key;

export interface IListProps<
  ItemType,
  ItemProps extends IListItemImplementationProps<ItemType> = IListItemImplementationProps<ItemType>,
  AdditionalItemProps = Omit<
    ItemProps,
    keyof IListItemImplementationProps<ItemType>
  >
> {
  items: ItemType[];
  onItemClick?: (item: ItemType) => void;
  loading?: boolean;
  className?: string;
  skeletonClassName?: string;
  itemWrapperClassName?: string;
  Item: ComponentType<ItemProps>;
  ItemsSkeleton?: ComponentType<ISkeletonProps>;
  getItemDisabled?: (item: ItemType) => boolean;
  getItemSelected?: (item: ItemType) => boolean;
  getItemError?: (item: ItemType) => boolean;
  computeItemKey: TComputeItemKey<ItemType>;
  isVirtualizationDisabled?: boolean;
  additionalItemProps?: keyof AdditionalItemProps extends never
    ? undefined
    : AdditionalItemProps;
}

const List = <
  ItemType,
  ItemProps extends IListItemImplementationProps<ItemType> = IListItemImplementationProps<ItemType>
>({
    items,
    loading,
    className,
    Item,
    ItemsSkeleton = ListItemsSkeleton,
    itemWrapperClassName,
    getItemSelected,
    getItemDisabled,
    getItemError,
    onItemClick,
    skeletonClassName,
    computeItemKey,
    isVirtualizationDisabled = false,
    additionalItemProps = undefined,
  }: IListProps<ItemType, ItemProps>): ReactElement => {
  const computeItemProps = useCallback(
    (item: ItemType): ItemProps =>
      ({
        item,
        disabled:
          typeof getItemDisabled === 'function' && getItemDisabled(item),
        error: typeof getItemError === 'function' && getItemError(item),
        selected:
          typeof getItemSelected === 'function' && getItemSelected(item),
        onClick: (): void => {
          if (typeof onItemClick === 'function') {
            onItemClick(item);
          }
        },
        ...additionalItemProps,
      } as unknown as ItemProps),
    [
      getItemDisabled,
      getItemError,
      getItemSelected,
      additionalItemProps,
      onItemClick,
    ],
  );

  const renderItemWrapper = useCallback(
    (children: ReactElement): ReactElement => (
      <div className={itemWrapperClassName}>{children}</div>
    ),
    [itemWrapperClassName],
  );

  return (
    <div className={classNames(styles.list, className)}>
      <SkeletonProvider
        showSkeleton={!!loading}
        className={skeletonClassName}
        Skeleton={ItemsSkeleton}
      >
        {isVirtualizationDisabled ? (
          items.map(
            (item: ItemType, key: number): ReactElement => renderItemWrapper(
              <Item
                key={computeItemKey(key, item)}
                {...computeItemProps(item)}
              />,
            ),
          )
        ) : (
          <Virtuoso
            data={items}
            computeItemKey={computeItemKey}
            itemContent={(_key: number, item: ItemType): ReactElement => renderItemWrapper(
              <Item {...computeItemProps(item)} />,
            )}
          />
        )}
      </SkeletonProvider>
    </div>
  );
};

export default List;

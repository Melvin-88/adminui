import INavigationMenuItem from '^types/INavigationMenuItem';
import INavigationMenuItemsGroup from '^types/INavigationMenuItemsGroup';
import TNavigationMenuItem from '^types/TNavigationMenuItem';

const patchItem = (item: INavigationMenuItem, onClick: INavigationMenuItem['onClick']): INavigationMenuItem => ({
  ...item,
  onClick: (value: string): void => {
    if (typeof onClick === 'function') {
      onClick(value);
    }

    if (typeof item.onClick === 'function') {
      item.onClick(value);
    }
  },
});

export const patchItemsWithCustomOnClick = (items: TNavigationMenuItem[], onClick: INavigationMenuItem['onClick']): TNavigationMenuItem[] => (
  items.map((item: TNavigationMenuItem): TNavigationMenuItem => {
    const group = item as INavigationMenuItemsGroup;

    if (group.items) {
      return {
        ...item,
        items: group.items.map((item: INavigationMenuItem): INavigationMenuItem => patchItem(item, onClick)),
      };
    }

    return patchItem(item as INavigationMenuItem, onClick) as TNavigationMenuItem;
  })
);


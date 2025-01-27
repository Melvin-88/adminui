import IMenuItem from './IMenuItem';

export default interface IPageHeaderTab extends Omit<IMenuItem, 'onClick'> {}

import IOption from './IOption';

export default interface IDisableableOption<TValue extends string | number = string | number> extends IOption<TValue> {
    disabled?:boolean;
}

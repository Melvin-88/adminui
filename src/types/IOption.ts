export default interface IOption<TValue extends string | number = string | number> {
  label: string;
  value: TValue;
}

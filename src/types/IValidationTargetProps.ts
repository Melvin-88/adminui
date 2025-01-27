import { Ref } from 'react';

export default interface IValidationTargetProps {
  error?: string;
  name?: string;
  disabled?: boolean;
  inputRef?: Ref<HTMLElement | null>;
}

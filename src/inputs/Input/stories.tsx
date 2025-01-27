import React, { ReactElement, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AttachMoney } from '@material-ui/icons';

import InputComponent, { IInputProps } from '.';

const Template: StoryFn<IInputProps> = (args: IInputProps): ReactElement => {
  const [value, setValue] = useState<string | null>('');

  return (
    <>
      <InputComponent
        value={value}
        onChange={setValue}
        {...args}
      />

      <pre>
        Value: {value}
      </pre>
    </>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  label: 'Simple',
} as IInputProps;

export const SimpleWithAdornments = Template.bind({});
SimpleWithAdornments.args = {
  label: 'SimpleWithAdornments',
  startAdornment: <AttachMoney />,
  endAdornment: 'kr.',
} as IInputProps;

export const UpperCased = Template.bind({});
UpperCased.args = {
  label: 'Simple',
  toUpperCase: true,
} as IInputProps;

export const LowerCased = Template.bind({});
LowerCased.args = {
  label: 'Simple',
  toLowerCase: true,
} as IInputProps;

export const CharsCounter = Template.bind({});
CharsCounter.args = {
  label: 'CharsCounter',
  charsCounter: 20,
} as IInputProps;

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading',
  loading: true,
} as IInputProps;

export const Multiline = Template.bind({});
Multiline.args = {
  label: 'Multiline',
  multiline: true,
} as IInputProps;

export const Integer = Template.bind({});
Integer.args = {
  label: 'Integer',
  type: 'integer',
} as IInputProps;

export const IntegerWithNegative = Template.bind({});
IntegerWithNegative.args = {
  label: 'IntegerWithNegative',
  type: 'integer',
  allowNegative: true,
} as IInputProps;

export const Decimal = Template.bind({});
Decimal.args = {
  label: 'Decimal',
  type: 'decimal',
} as IInputProps;

export const Mask = Template.bind({});
Mask.args = {
  label: 'Mask',
  mask: '00-00-00-00',
  type: 'tel',
} as IInputProps;

// provides search virtual keyboard on mobile devices
export const Search = Template.bind({});
Search.args = {
  label: 'Search',
  type: 'search',
} as IInputProps;

export default {
  title: 'AdminUI/Inputs/Input',
  component: InputComponent,
} as Meta<IInputProps>;

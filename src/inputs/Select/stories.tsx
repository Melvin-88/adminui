import React, { ReactElement, useCallback, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AttachMoney } from '@material-ui/icons';
import { Chip } from '@material-ui/core';
import { AutocompleteGetTagProps } from '@material-ui/lab';

import IOption from '^types/IOption';

import SelectComponent, { ISelectProps } from '.';

type TSelectProps = ISelectProps<IOption>;

const options: IOption[] = [
  {
    label: 'First',
    value: 'first',
  },
  {
    label: 'Second',
    value: 'second',
  },
  {
    label: 'Third',
    value: 'third',
  },
];

const Template: StoryFn<TSelectProps> = (args: TSelectProps): ReactElement => {
  const [value, setValue] = useState<string | string[]>((args.defaultValue as string | string[]) || '');

  const handleChange = useCallback(
    (value: string | number | (string | number)[] | null): void => setValue(value as string),
    [],
  );

  return (
    <>
      <SelectComponent
        value={value}
        onChange={handleChange}
        {...args}
      />

      <pre>
        Value: {JSON.stringify(value)}
      </pre>
    </>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  label: 'Simple',
  options,
} as TSelectProps;

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Multiple',
  multiple: true,
  options,
} as TSelectProps;

export const FixedValues = Template.bind({});
FixedValues.args = {
  label: 'FixedValues',
  multiple: true,
  defaultValue: [options[0].value, options[1].value],
  fixedValues: [options[1].value],
  options,
} as TSelectProps;

export const AllowAdd = Template.bind({});
AllowAdd.args = {
  label: 'AllowAdd',
  allowAdd: true,
  multiple: true,
  options,
} as TSelectProps;

interface IGroupingOption extends IOption {
  group: string;
}

const groupingOptions: IGroupingOption[] = [
  {
    label: 'First',
    group: 'Test',
    value: 'first',
  },
  {
    label: 'Third',
    group: 'Test',
    value: 'third',
  },
  {
    label: 'Fourth',
    group: 'Test',
    value: 'fourth',
  },
  {
    label: 'Second',
    group: 'another',
    value: 'second',
  },
];

export const Grouped = (Template as unknown as StoryFn<ISelectProps<IGroupingOption>>).bind({});
Grouped.args = {
  label: 'Grouped',
  options: groupingOptions,
  groupBy: ({ group }: IGroupingOption): string => group,
} as ISelectProps<IGroupingOption>;

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading',
  loading: true,
  options: [],
} as TSelectProps;

export const CustomOptions = Template.bind({});
CustomOptions.args = {
  label: 'CustomOptions',
  options,
  renderOption: ({ label }: IOption): ReactElement => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <AttachMoney />

      {label}
    </div>
  ),
} as TSelectProps;

export const CustomTags = Template.bind({});
CustomTags.args = {
  label: 'CustomTags',
  options,
  multiple: true,
  renderTags: (options: IOption[], getTagProps: AutocompleteGetTagProps): ReactElement => (
    <>
      {options.map(
        ({ label }: IOption, index: number): ReactElement => (
          <Chip
            key={index}
            color="primary"
            icon={<AttachMoney />}
            label={label}
            {...getTagProps({ index })}
          />
        ),
      )}
    </>
  ),
};

export default {
  title: 'AdminUI/Inputs/Select',
  component: SelectComponent,
} as Meta<TSelectProps>;

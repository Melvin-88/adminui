import React, { ReactElement, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import DatePickerComponent, { IDatePickerProps } from '.';

const Template: StoryFn<IDatePickerProps> = (args: IDatePickerProps): ReactElement => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <DatePickerComponent
        {...args}
        value={value}
        onChange={setValue}
      />

      <pre>
        Value: {value}
      </pre>
    </>
  );
};

export const DatePicker = Template.bind({});

DatePicker.args = {
  label: 'DatePicker',
  maxDate: new Date('2100-01-01'),
  minDate: new Date('1900-01-01'),
} as IDatePickerProps;
DatePicker.storyName = 'DatePicker';

export default {
  title: 'AdminUI/Inputs/Date & Time/DatePicker',
  component: DatePickerComponent,
} as Meta<IDatePickerProps>;

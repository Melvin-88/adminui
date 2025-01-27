import React, { ReactElement, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import DateTimePickerComponent, { IDateTimePickerProps } from '.';

const Template: StoryFn<IDateTimePickerProps> = (args: IDateTimePickerProps): ReactElement => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <DateTimePickerComponent
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

export const DateTimePicker = Template.bind({});
DateTimePicker.storyName = 'DateTimePicker';
DateTimePicker.args = {
  label: 'DateTimePicker',
  maxDate: new Date('2100-01-01'),
  minDate: new Date('1900-01-01'),
} as IDateTimePickerProps;

export default {
  title: 'AdminUI/Inputs/Date & Time/DateTimePicker',
  component: DateTimePickerComponent,
} as Meta<IDateTimePickerProps>;

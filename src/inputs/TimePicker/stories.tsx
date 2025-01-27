import React, { ReactElement, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import TimePickerComponent, { ITimePickerProps } from '.';

const Template: StoryFn<ITimePickerProps> = (args: ITimePickerProps): ReactElement => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <TimePickerComponent
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

export const TimePicker = Template.bind({});

TimePicker.args = {
  label: 'TimePicker',
} as ITimePickerProps;
TimePicker.storyName = 'TimePicker';

export default {
  title: 'AdminUI/Inputs/Date & Time/TimePicker',
  component: TimePickerComponent,
} as Meta<ITimePickerProps>;

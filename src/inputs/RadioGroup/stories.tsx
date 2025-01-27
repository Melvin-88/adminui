import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import RadioGroupComponent, { IRadioGroupProps } from '.';

const Template: StoryFn<IRadioGroupProps> = (args: IRadioGroupProps): ReactElement => (
  <RadioGroupComponent {...args} />
);

export const RadioGroup = Template.bind({});

RadioGroup.storyName = 'RadioGroup';

RadioGroup.args = {
  label: 'Visible',
  options: [
    {
      label: 'First',
      value: 'first',
    },
    {
      label: 'Second',
      value: 'second',
    },
    {
      label: 'Third (disabled)',
      value: 'third',
      disabled: true,
    },
  ],
} as IRadioGroupProps;

export default {
  title: 'AdminUI/Inputs/RadioGroup',
  component: RadioGroupComponent,
} as Meta<IRadioGroupProps>;

import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import SwitchComponent, { ISwitchProps } from '.';

const Template: StoryFn<ISwitchProps> = (args: ISwitchProps): ReactElement => (
  <SwitchComponent {...args} />
);

export const Switch = Template.bind({});

Switch.storyName = 'Switch';

Switch.args = {
  label: 'Visible',
} as ISwitchProps;

export default {
  title: 'AdminUI/Inputs/Switch',
  component: SwitchComponent,
} as Meta<ISwitchProps>;

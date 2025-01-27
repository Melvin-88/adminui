import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import CheckBoxComponent, { ICheckBoxProps } from '.';

const Template: StoryFn<ICheckBoxProps> = (args: ICheckBoxProps): ReactElement => (
  <CheckBoxComponent {...args} />
);

export const CheckBox = Template.bind({});

CheckBox.storyName = 'CheckBox';

CheckBox.args = {
  label: 'Visible',
} as ICheckBoxProps;

export default {
  title: 'AdminUI/Inputs/CheckBox',
  component: CheckBoxComponent,
} as Meta<ICheckBoxProps>;

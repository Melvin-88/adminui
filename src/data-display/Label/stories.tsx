import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import LabelComponent, { ILabelProps } from '.';

const Template: StoryFn<ILabelProps> = (args: ILabelProps): ReactElement => (
  <LabelComponent {...args} />
);

export const Label = Template.bind({});

Label.args = {
  color: 'primary',
  label: 'Label',
} as ILabelProps;

export default {
  title: 'AdminUI/Data Display/Label',
  component: LabelComponent,
} as Meta<ILabelProps>;

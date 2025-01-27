import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import BadgeComponent, { IBadgeProps } from '.';

const Template: StoryFn<IBadgeProps> = (args: IBadgeProps): ReactElement => (
  <BadgeComponent {...args} />
);

export const Badge = Template.bind({});

Badge.args = {
  color: 'red',
  value: '22',
  children: 'Total',
} as IBadgeProps;

export default {
  title: 'AdminUI/Data Display/Badge',
  component: BadgeComponent,
} as Meta<IBadgeProps>;

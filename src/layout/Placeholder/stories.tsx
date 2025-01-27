import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Button from '^controls/Button';

import PlaceholderComponent, { IPlaceholderProps } from '.';

const Template: StoryFn<IPlaceholderProps> = (args: IPlaceholderProps): ReactElement => (
  <PlaceholderComponent {...args} />
);

export const Placeholder = Template.bind({});

Placeholder.args = {
  title: 'Empty list',
  subTitle: 'Press star on any doc and it will appear here',
  children: <Button>Click</Button>,
} as IPlaceholderProps;

export default {
  title: 'AdminUI/Layout/Placeholder',
  component: PlaceholderComponent,
} as Meta<IPlaceholderProps>;

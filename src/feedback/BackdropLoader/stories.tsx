import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import BackdropLoaderComponent, { IBackdropLoaderProps } from '.';

const Template: StoryFn<IBackdropLoaderProps> = (args: IBackdropLoaderProps): ReactElement => (
  <div
    style={{
      height: '400px',
    }}
  >
    <BackdropLoaderComponent {...args} />
  </div>
);

export const BackdropLoader = Template.bind({});

BackdropLoader.args = {
  open: true,
};

export const BackdropLoaderWithDescription = Template.bind({});

BackdropLoaderWithDescription.args = {
  open: true,
  description: 'Please wait\nIt can take up to 30 seconds',
};

export default {
  title: 'AdminUI/Feedback/BackdropLoader',
  component: BackdropLoaderComponent,
} as Meta<IBackdropLoaderProps>;

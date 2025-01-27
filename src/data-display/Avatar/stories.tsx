import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import AvatarComponent, { IAvatarProps } from '.';

const Template: StoryFn<IAvatarProps> = (args: IAvatarProps): ReactElement => (
  <AvatarComponent {...args} />
);

export const Avatar = Template.bind({});

Avatar.args = {
  name: 'Colin Newton',
} as IAvatarProps;

export const AvatarJustName = Template.bind({});

AvatarJustName.args = {
  name: 'Christiana',
} as IAvatarProps;

export const AvatarWithMiddleName = Template.bind({});

AvatarWithMiddleName.args = {
  name: 'Manu Morán Aguilar',
} as IAvatarProps;

export const AvatarOneLetterName = Template.bind({});

AvatarOneLetterName.args = {
  name: '蔼',
} as IAvatarProps;

export const AvatarEmptyName = Template.bind({});

AvatarEmptyName.args = {
  name: '',
} as IAvatarProps;

export default {
  title: 'AdminUI/Data Display/Avatar',
  component: AvatarComponent,
} as Meta<IAvatarProps>;

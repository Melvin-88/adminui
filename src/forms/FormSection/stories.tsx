import { Meta, StoryFn } from '@storybook/react';
import React, { ReactElement } from 'react';

import Button from '^controls/Button';
import CheckBox from '^inputs/CheckBox';
import Switch from '^inputs/Switch';

import FormSectionComponent, { IFormSectionProps } from '.';

const Template: StoryFn<IFormSectionProps> = (args: IFormSectionProps): ReactElement => (
  <FormSectionComponent {...args}>
    <CheckBox label="Required" />
    <Switch label="Disabled" />
  </FormSectionComponent>
);

export const FormSection = Template.bind({});

FormSection.storyName = 'FormSection';

FormSection.args = {
  label: 'Statuses',
} as IFormSectionProps;

export const FormSectionWithAction = Template.bind({});
FormSectionWithAction.args = {
  label: 'Statuses',
  action: <Button>Select All</Button>,
} as IFormSectionProps;

export default {
  title: 'AdminUI/Forms/FormSection',
  component: FormSectionComponent,
} as Meta<IFormSectionProps>;

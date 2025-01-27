import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import FilePickerComponent, { IFilePickerProps } from '.';

const Template: StoryFn<IFilePickerProps> = (args: IFilePickerProps): ReactElement => (
  <FilePickerComponent {...args} />
);

export const FilePicker = Template.bind({});

FilePicker.args = {} as IFilePickerProps;
FilePicker.storyName = 'FilePicker';

export default {
  title: 'AdminUI/Controls/FilePicker',
  component: FilePickerComponent,
} as Meta<IFilePickerProps>;

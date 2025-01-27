import React, { ReactElement, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import RichTextEditorComponent, { IRichTextEditorProps } from '.';

const Template: StoryFn<IRichTextEditorProps> = (args: IRichTextEditorProps): ReactElement => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <RichTextEditorComponent
        value={value}
        onChange={setValue}
        {...args}
      />

      <div style={{ width: '100%', padding: '1rem' }}>
        Value: {value}
      </div>
    </>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  label: 'Description',
} as IRichTextEditorProps;

export const WithCounter = Template.bind({});
WithCounter.args = {
  label: 'Description',
  charsCounter: 100,
} as IRichTextEditorProps;

export const WithTables = Template.bind({});
WithTables.args = {
  label: 'Description',
  enableTable: true,
} as IRichTextEditorProps;

export const WithImages = Template.bind({});
WithImages.args = {
  label: 'Description',
  enableImage: true,
} as IRichTextEditorProps;

export default {
  title: 'AdminUI/Inputs/RichTextEditor',
  component: RichTextEditorComponent,
} as Meta<IRichTextEditorProps>;

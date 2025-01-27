import React, { ReactElement, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import SliderComponent, { ISliderProps } from '.';

const Template: StoryFn<ISliderProps> = (props: ISliderProps): ReactElement => {
  const [value, setValue] = useState<ISliderProps['value']>();

  return (
    <>
      <SliderComponent
        value={value}
        onChange={setValue}
        {...props}
      />

      <pre>
        Value: {JSON.stringify(value)}
      </pre>
    </>
  );
};

export const Slider = Template.bind({});
Slider.args = {
  defaultValue: 0,
  min: 2,
  max: 20,
} as ISliderProps;

export const Range = Template.bind({});
Range.args = {
  type: 'range',
  min: 2,
  max: 20,
  marks: true,
} as ISliderProps;

export default {
  title: 'AdminUI/Inputs/Slider',
  component: SliderComponent,
} as Meta<ISliderProps>;

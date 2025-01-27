import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import AccordionComponent, { IAccordionProps } from '.';

const Template: StoryFn<IAccordionProps> = (args: IAccordionProps): ReactElement => (
  <AccordionComponent {...args} />
);

export const Accordion = Template.bind({});

Accordion.args = {
  label: 'Accordion',
  details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempore excepturi soluta aliquam sunt omnis officia doloribus praesentium aspernatur facere iusto quibusdam sequi, debitis, odit ipsum dolores distinctio porro ducimus repudiandae ea quo veniam ab dolorum tenetur. Commodi, aspernatur debitis.',
} as IAccordionProps;

export default {
  title: 'AdminUI/Data Display/Accordion',
  component: AccordionComponent,
} as Meta<IAccordionProps>;

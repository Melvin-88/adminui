/* eslint-disable max-lines */
import React, { ReactElement } from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Input from '^inputs/Input';

import Label from '../Label';

import InfoTableComponent, { IInfoTableProps, IInfoTableSection } from '.';

const sectionsMixedSettings: IInfoTableSection[] = [
  {
    title: 'first section',
    rows: [
      {
        name: 'Car price',
        value: '42.785,00 kr.',
        hasDivider: true,
        layout: 'singleColumn',
      },
      {
        name: 'Car price',
        value: '42.785,00 kr.',
        hasDivider: true,
        layout: 'singleColumn',
        contentAlignment: 'center',
      },
      {
        name: 'Car price',
        value: '42.785,00 kr.',
        hasDivider: true,
        layout: 'singleColumn',
        contentAlignment: 'end',
      },
      {
        name: 'Car plate number',
        value: <Input/>,
        layout: 'singleColumn',
      },
      {
        name: 'Car plate number',
        value: <Input/>,
      },
      {
        name: 'Downpayment',
        value: '8.557,00 kr.',
      },
      {
        name: 'Duration',
        value: '12 months',
      },
      {
        name: 'Price per month',
        value: '3.565,41 kr.',
        withIdent: true,
      },
      {
        name: 'Aop rate',
        value: '3.565,41 kr.',
        withIdent: true,
      },
    ],
  },
  {
    rows: [
      {
        name: 'Bank loan amount',
        value: '42.785,00 kr.',
      },
      {
        name: 'Borrowing interest rate',
        value: '',
        hasDivider: true,
      },
      {
        name: 'Debitore rate',
        value: null,
      },
      {
        name: 'Total cash payment',
      },
      {
        name: 'Total credit amount',
        value: '121212212121212121196,94 kr.',
        hasDivider: true,
      },
      {
        name: 'Total credit amount',
        value: (
          <>
            <Label
              color='primary'
              label="label text 1"
            />

            <Label
              color='yellow'
              label="label text 2"
            />
          </>
        ),
      },
      {
        name: 'Total credit amount',
        value: (
          <>
            <Label
              color='primary'
              label="label text 1"
            />

            <Label
              color='yellow'
              label="label text 2"
            />
          </>
        ),
        contentAlignment: 'center',
      },
    ],
  },
];

const Template: StoryFn<IInfoTableProps> = (args: IInfoTableProps): ReactElement => (
  <div
    style={{
      maxWidth: '20rem',
    }}
  >
    <InfoTableComponent {...args} />
  </div>
);

export const InfoTableMixedSettings = Template.bind({});

InfoTableMixedSettings.args = {
  sections: sectionsMixedSettings,
} as IInfoTableProps;

const sectionsSingleColumn: IInfoTableSection[] = [
  {
    title: 'first section',
    rows: [
      {
        name: 'Car price',
        value: '42.785,00 kr.',
        layout: 'singleColumn',
      },
      {
        name: 'Downpayment',
        value: '8.557,00 kr.',
        layout: 'singleColumn',
      },
      {
        name: 'Duration',
        value: '12 months',
        layout: 'singleColumn',
      },
      {
        name: 'Price per month',
        value: '3.565,41 kr.',
        layout: 'singleColumn',
      },
      {
        name: 'Aop rate',
        value: '3.565,41 kr.',
        layout: 'singleColumn',
      },
    ],
  },
  {
    rows: [
      {
        name: 'Bank loan amount',
        value: '42.785,00 kr.',
        layout: 'singleColumn',
      },
      {
        name: 'Borrowing interest rate',
        value: '',
        layout: 'singleColumn',
      },
      {
        name: 'Debitore rate',
        value: null,
        layout: 'singleColumn',
      },
      {
        name: 'Total cash payment',
        layout: 'singleColumn',
      },
      {
        name: 'Total credit amount',
        value: '121212212121212121196,94 kr.',
        layout: 'singleColumn',
      },
      {
        name: 'Total credit amount',
        value: (
          <>
            <Label
              color='primary'
              label="label text 1"
            />

            <Label
              color='yellow'
              label="label text 2"
            />
          </>
        ),
        layout: 'singleColumn',
      },
    ],
  },
];
export const InfoTableSingleColumn = Template.bind({});

InfoTableSingleColumn.args = {
  sections: sectionsSingleColumn,
} as IInfoTableProps;

const sectionsWithTwoColumns: IInfoTableSection[] = [
  {
    title: 'first section',
    rows: [
      {
        name: 'Car price',
        value: '42.785,00 kr.',
      },
      {
        name: 'Downpayment',
        value: '8.557,00 kr.',
      },
      {
        name: 'Duration',
        value: '12 months',
      },
      {
        name: 'Price per month',
        value: '3.565,41 kr.',
      },
      {
        name: 'Aop rate',
        value: '3.565,41 kr.',
      },
    ],
  },
  {
    rows: [
      {
        name: 'Bank loan amount',
        value: '42.785,00 kr.',
      },
      {
        name: 'Borrowing interest rate',
        value: '',
      },
      {
        name: 'Debitore rate',
        value: null,
      },
      {
        name: 'Total cash payment',
      },
      {
        name: 'Total credit amount',
        value: '121212212121212121196,94 kr.',
      },
      {
        name: 'Total credit amount',
        value: (
          <>
            <Label
              color='primary'
              label="label text 1"
            />

            <Label
              color='yellow'
              label="label text 2"
            />
          </>
        ),
      },
    ],
  },
];
export const InfoTableTwoColumns = Template.bind({});

InfoTableTwoColumns.args = {
  sections: sectionsWithTwoColumns,
} as IInfoTableProps;

export default {
  title: 'AdminUI/Data Display/InfoTable',
  component: InfoTableComponent,
} as Meta<IInfoTableProps>;

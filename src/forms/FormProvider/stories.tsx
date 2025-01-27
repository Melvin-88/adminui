/* eslint-disable max-lines */
import React, { ReactElement, useCallback, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from '@material-ui/core';
import { isValid, isWithinInterval, parseISO } from 'date-fns';
import { useFormContext, useWatch } from 'react-hook-form';

import FormField, { IFormFieldProps } from '^forms/FormField';
import CheckBox from '^inputs/CheckBox';
import Switch from '^inputs/Switch';
import RadioGroup from '^inputs/RadioGroup';
import Input from '^inputs/Input';
import RichTextEditor from '^inputs/RichTextEditor';
import Select from '^inputs/Select';
import DatePicker from '^inputs/DatePicker';
import TimePicker from '^inputs/TimePicker';
import DateTimePicker from '^inputs/DateTimePicker';
import Slider from '^inputs/Slider';
import formatNumber from '^utils/formatters/formatNumber';
import formatTime from '^utils/formatters/formatTime';
import formatDate from '^utils/formatters/formatDate';
import IOption from '^types/IOption';
import IValidationTargetProps from '^types/IValidationTargetProps';

import FormProviderComponent, { IFormProviderProps } from '.';

interface IFormValues {
  text: string | null;
  integer: number | null;
  decimal: number | null;
  visible: boolean;
  disabled: boolean;
  method: string;
  type: string | null;
  multiType: string[];
  description: string;
  date: string | null;
  time: string | null;
  dateTime: string | null;
  slider: number;
  range: number[];
  withOption?: boolean | null;
}

const now = new Date().toISOString();

const defaultValues: Partial<IFormValues> = {
  text: 'Text',
  integer: 32432,
  decimal: 5436.32,
  type: 'internal',
  multiType: ['external'],
  visible: true,
  disabled: false,
  method: 'post',
  description: 'Some text',
  date: now,
  time: now,
  dateTime: null,
  slider: 3,
  range: [2, 10],
};

const required = (value: string | string[] | boolean): string | undefined =>
  (Array.isArray(value) && value.length === 0) || !value?.toString()
    ? 'This field is required'
    : undefined;

const checkValue = (desiredValue: string) => (
  value: string,
): string | undefined =>
  value === desiredValue ? undefined : 'Incorrect value';
const isDateValid = (value: string): string | undefined =>
  isValid(parseISO(value))
    ? undefined
    : `Date is invalid, should be like ${formatDate(new Date().toUTCString())}`;

const isTimeAcceptable = (startTime: string, endTime: string) => (
  value: string,
): string | undefined => {
  const [startHours, startMinutes] = startTime.split(':');
  const [endHours, endMinutes] = endTime.split(':');

  const target = new Date(value);

  const start = new Date(target);
  start.setHours(Number(startHours), Number(startMinutes));

  const end = new Date(target);
  end.setHours(Number(endHours), Number(endMinutes));

  return isWithinInterval(target, { start, end })
    ? undefined
    : `Time should be from ${formatTime(startTime)} to ${formatTime(endTime)}`;
};

const max = (max: number) => (value: number): string | undefined =>
  value <= max ? undefined : `Value should be less than ${formatNumber(max)}`;

type TFormProviderProps = IFormProviderProps<IFormValues>;
type TValidations = Partial<
  Record<keyof IFormValues, IFormFieldProps<IValidationTargetProps>['validate']>
>;

const validations: TValidations = {
  text: required,
  integer: {
    required,
    max: max(1000),
  },
  type: required,
  multiType: required,
  visible: required,
  method: checkValue('put'),
  date: {
    required,
    isDateValid,
  },
  time: {
    required,
    isDateValid,
  },
  dateTime: {
    required,
    isDateValid,
    isTimeAcceptable: isTimeAcceptable('09:00', '16:00'),
  },
  description: required,
  slider: required,
};

const typeSelectOptions: IOption[] = [
  {
    label: 'Internal',
    value: 'internal',
  },
  {
    label: 'External',
    value: 'external',
  },
];

interface IBaseTemplateProps extends TFormProviderProps {
  validations?: TValidations;
}

const VisibilityFields = (): ReactElement => {
  const { reset, getValues } = useFormContext();
  const visibility = useWatch({
    name: 'isVisibleSelect',
  });

  // Note: currently the form will submit withOption as null
  // This is not desired behaviour, and should be fixed
  // by https://bytdyt.atlassian.net/browse/UL-174
  const handleResetField = useCallback((): void => {
    reset({ ...getValues(), withOption: null });
  }, [reset, getValues]);

  return (
    <>
      <FormField
        name="isVisibleSelect"
        Target={Select}
        label="isVisibleSelect"
        options={[
          {
            label: 'Visible',
            value: 'visible',
          },
          {
            label: 'Hidden',
            value: 'hidden',
          },
        ]}
      />
      {visibility === 'visible' && (
        <FormField
          name="withOption"
          Target={CheckBox}
          label="with option"
        />
      )}
      <Button
        type="button"
        onClick={handleResetField}
      >
        Reset form to check if default null values are reset to correct defaults
      </Button>
    </>
  );
};

const Template: StoryFn<IBaseTemplateProps> = ({
  validations = {},
  ...rest
}: IBaseTemplateProps): ReactElement => {
  const [values, setValues] = useState<IFormValues>();

  return (
    <div style={{ maxWidth: '40rem' }}>
      <FormProviderComponent
        {...rest}
        onSubmit={setValues}
        defaultValues={{
          // currently form will submit this value as null
          // desired behaviour for values from checkbox to be selected as false
          // https://bytdyt.atlassian.net/browse/UL-174
          withOption: null,
        }}
      >
        <FormField
          name="text"
          label="Text"
          Target={Input}
          validate={validations?.text}
          required
        />

        <FormField
          name="integer"
          type="integer"
          label="Integer"
          Target={Input}
          validate={validations?.integer}
        />

        <FormField
          name="decimal"
          type="decimal"
          label="Decimal"
          Target={Input}
          validate={validations?.decimal}
        />

        <FormField
          name="type"
          Target={Select}
          label="Type"
          options={typeSelectOptions}
          validate={validations?.type}
          required
        />

        <FormField
          name="multiType"
          Target={Select}
          label="Multi Type"
          multiple
          options={typeSelectOptions}
          validate={validations?.multiType}
        />

        <FormField
          name="visible"
          Target={CheckBox}
          label="Visible"
          validate={validations?.visible}
        />

        <FormField
          name="disabled"
          Target={Switch}
          label="Disabled"
          validate={validations?.disabled}
        />

        <FormField
          name="method"
          Target={RadioGroup}
          defaultValue="post"
          label="Method"
          options={[
            {
              label: 'POST',
              value: 'post',
            },
            {
              label: 'PUT',
              value: 'put',
            },
          ]}
          validate={validations?.method}
        />

        <FormField
          name="date"
          Target={DatePicker}
          required
          label="Date"
          validate={validations?.date}
        />

        <FormField
          name="time"
          Target={TimePicker}
          required
          label="Time"
          validate={validations?.time}
        />

        <FormField
          name="dateTime"
          required
          Target={DateTimePicker}
          label="DateTime"
          validate={validations?.dateTime}
        />

        <FormField
          name="description"
          Target={RichTextEditor}
          label="Description"
          validate={validations?.description}
        />

        <FormField
          name="slider"
          Target={Slider}
          min={0}
          max={10}
          marks
          validate={validations?.slider}
        />

        <FormField
          name="range"
          Target={Slider}
          type="range"
          min={0}
          max={20}
          validate={validations?.range}
        />

        <VisibilityFields />

        <Button type="submit">Submit</Button>

        <div style={{ width: '100%' }}>
          Values: {JSON.stringify(values || {})}
        </div>
      </FormProviderComponent>
    </div>
  );
};

export const Simple = Template.bind({});

Simple.storyName = 'Simple';
Simple.args = {} as IBaseTemplateProps;

export const WithValidation = Template.bind({});

WithValidation.storyName = 'WithValidation';
WithValidation.args = {
  validations,
} as IBaseTemplateProps;

export const WithDefaultValues = Template.bind({});

WithDefaultValues.storyName = 'WithDefaultValues';
WithDefaultValues.args = {
  defaultValues,
} as IBaseTemplateProps;

export default {
  title: 'AdminUI/Forms/FormProvider',
  component: FormProviderComponent,
} as Meta<IBaseTemplateProps>;

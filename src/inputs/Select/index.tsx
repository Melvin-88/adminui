// TODO: Consider refactoring it, @olri, @olz
/* eslint-disable max-lines */
import React, {
  MouseEvent,
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
  FocusEvent,
  ReactNode,
  useRef,
} from 'react';
import {
  OutlinedTextFieldProps,
  TextField,
  ClickAwayListener,
  Chip,
  CircularProgress,
} from '@material-ui/core';
import {
  AutocompleteProps,
  AutocompleteRenderInputParams,
  Autocomplete,
  FilterOptionsState,
  createFilterOptions,
  AutocompleteGetTagProps,
} from '@material-ui/lab';

import IOption from '^types/IOption';
import IValidationTargetProps from '^types/IValidationTargetProps';
import arrayToMap from '^utils/arrayToMap';
import useTexts from '^hooks/useTexts';
import { ICON_DEFAULT_SIZE } from '^configs/defaults';

import { valueToOption } from './utils';
import styles from './styles.module.scss';

const autocompleteClasses = {
  endAdornment: styles.endAdornment,
};

type TAutocompleteProps<Option> = AutocompleteProps<
  Option,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined
>;

export interface ISelectProps<Option extends IOption>
  extends Pick<
      TAutocompleteProps<Option>,
      | 'value'
      | 'defaultValue'
      | 'options'
      | 'multiple'
      | 'disableClearable'
      | 'loading'
      | 'innerRef'
      | 'classes'
      | 'className'
      | 'filterSelectedOptions'
      | 'filterOptions'
      | 'getOptionDisabled'
      | 'getOptionLabel'
      | 'getOptionSelected'
      | 'groupBy'
      | 'renderGroup'
      | 'renderOption'
      | 'renderTags'
      | 'size'
      | 'loadingText'
      | 'noOptionsText'
      | 'disableCloseOnSelect'
      | 'onFocus'
      | 'onBlur'
      | 'onKeyPress'
      | 'forcePopupIcon'
    >,
    IValidationTargetProps,
    Pick<OutlinedTextFieldProps, 'label' | 'required'> {
  color?: OutlinedTextFieldProps['color'];
  allowAdd?: boolean;
  InputProps?: Omit<OutlinedTextFieldProps, 'inputRef' | 'label'>;
  fixedValues?: Array<Option['value']>;
  addText?: (value: string) => string;
  onChange?: (
    value: Option['value'] | Array<Option['value']> | null,
    option?: Option | Array<Option> | null
  ) => void;
}

const Select = <Option extends IOption>({
  name,
  label,
  value,
  options,
  color,
  multiple,
  loading,
  disabled,
  error,
  filterSelectedOptions = !!multiple,
  InputProps,
  inputRef,
  allowAdd,
  getOptionLabel,
  getOptionSelected,
  filterOptions,
  onChange,
  loadingText,
  noOptionsText,
  addText,
  disableClearable,
  onBlur,
  onFocus,
  disableCloseOnSelect,
  fixedValues,
  required,
  forcePopupIcon = true,
  ...rest
}: ISelectProps<Option>): ReactElement => {
  const texts = useTexts();
  const [open, setOpen] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<Option | Option[] | null>(
    multiple ? [] : null,
  );

  // Flag to keep track if focus event came to Select from window
  // (e.g. when user returned to the current tab)
  const shouldIgnoreWindowFocusRef = useRef<boolean>(false);

  const optionsMap = useMemo(
    (): Record<string, Option> => arrayToMap(options, 'value'),
    [options],
  );

  const fixedValuesSet = useMemo(
    (): Set<Option['value']> => new Set(fixedValues),
    [fixedValues],
  );

  const fixedOptions = useMemo(
    (): Option[] =>
      options.filter(({ value }: Option): boolean => fixedValuesSet.has(value)),
    [fixedValuesSet, options],
  );

  const processChange = useCallback(
    (
      value: Option['value'] | Array<Option['value']> | null,
      option?: Option | Array<Option> | null,
    ): void => {
      if (typeof onChange === 'function') {
        onChange(value, option);
      }
    },
    [onChange],
  );

  useEffect(
    (): (() => void) => {
      const handleWindowFocus = (): void => {
        // Rise focus ignoring flag whenever user returns to the current tab
        // in order to avoid opening list of option in this case
        shouldIgnoreWindowFocusRef.current = true;
      };

      const handleWindowFocusOut = (): void => {
        // Reset focus ignoring flag in case if window is not the main target anymore
        shouldIgnoreWindowFocusRef.current = false;
      };

      window.addEventListener('focus', handleWindowFocus);
      window.addEventListener('focusout', handleWindowFocusOut);

      if (value === '') {
        processChange(multiple ? [] : null);
      }

      return (): void => {
        window.removeEventListener('focus', handleWindowFocus);
        window.removeEventListener('focusout', handleWindowFocusOut);
      };
    },
    // Define correct default value and subscribe to window onFocus event only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect((): void => {
    let activeOption: Option | Option[] =
      optionsMap[value as string] ||
      (value ? valueToOption<Option>(value as string) : null);

    if (multiple) {
      activeOption = ((value as string[]) || []).map(
        (value: string): Option => {
          let option = optionsMap[value];

          if (!option) {
            option = valueToOption(value);
          }

          return option;
        },
      );
    }

    setActiveOption(activeOption);
  }, [value, optionsMap, multiple]);

  const handleClose = useCallback((): void => setOpen(false), []);

  const handleOpen = useCallback((): void => setOpen(true), []);

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLDivElement>): void => {
      if (typeof onFocus === 'function') {
        onFocus(event);
      }

      // In case if focus event was received after window.onFocus event
      // - ignore it and reset the flag
      if (shouldIgnoreWindowFocusRef.current) {
        shouldIgnoreWindowFocusRef.current = false;

        return;
      }

      handleOpen();
    },
    [onFocus, handleOpen],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLDivElement>): void => {
      if (typeof onBlur === 'function') {
        onBlur(event);
      }

      handleClose();
    },
    [onBlur, handleClose],
  );

  const handleChange = useCallback(
    (
      _: ChangeEvent<Record<string, never>>,
      option: Option | Option[] | null | string,
    ): void => {
      let newOption: Option | Option[] | null = null;

      if (typeof option === 'string') {
        newOption = valueToOption<Option>(option);
      } else if (Array.isArray(option)) {
        // In case if we have any fixed values and 'Clear' button is clicked, we should preserve them
        const computedOption = option.length === 0 ? fixedOptions : option;

        newOption = computedOption.map(
          (option: Option | string): Option =>
            typeof option === 'string' ? valueToOption<Option>(option) : option,
        );
      } else {
        newOption = option;
      }

      setActiveOption(newOption);

      if (!disableCloseOnSelect) {
        handleClose();
      }

      if (Array.isArray(newOption)) {
        processChange(
          newOption.map(({ value }: Option): string => value as string),
          newOption,
        );

        return;
      }

      // Set value to `null` in case if select was cleared
      processChange(newOption?.value || null, newOption);
    },
    [processChange, handleClose, disableCloseOnSelect, fixedOptions],
  );

  const handleClickAway = useCallback(
    (event: MouseEvent<Document>): void => {
      // Here material-ui produce 2 events: Pointer and Touch, but we need to handle Pointer events only
      if (event instanceof PointerEvent && !disableCloseOnSelect) {
        handleClose();
      }
    },
    [disableCloseOnSelect, handleClose],
  );

  const computedGetOptionLabel = useCallback(
    (option: Option): string => {
      if (typeof getOptionLabel === 'function') {
        return getOptionLabel(option);
      }

      return typeof option === 'object' ? option.label : (option as string);
    },
    [getOptionLabel],
  );

  const computedGetOptionSelected = useCallback(
    (option: Option, activeOption: Option): boolean => {
      if (typeof getOptionSelected === 'function') {
        return getOptionSelected(option, activeOption);
      }

      return option.value === activeOption.value;
    },
    [getOptionSelected],
  );

  const computedFilterOptions = useCallback(
    (options: Option[], state: FilterOptionsState<Option>): Option[] => {
      const filterOptionsResolved = typeof filterOptions === 'function' ? filterOptions : createFilterOptions<Option>();
      const filtered = filterOptionsResolved(options, state);
      const computedAddText = addText || texts.select.add;

      if (allowAdd && state.inputValue !== '') {
        filtered.push({
          label: computedAddText(state.inputValue),
          value: state.inputValue,
        } as Option);
      }

      return filtered;
    },
    [filterOptions, addText, allowAdd, texts],
  );

  const renderInput = useCallback(
    (props: AutocompleteRenderInputParams): ReactElement => (
      <TextField
        {...props}
        {...InputProps}
        label={label}
        inputRef={inputRef}
        name={name}
        error={!!error}
        helperText={error || InputProps?.helperText}
        color={color}
        required={required}
      />
    ),
    [InputProps, label, inputRef, name, error, color, required],
  );

  const renderTags = useCallback(
    (options: Option[], getTagProps: AutocompleteGetTagProps): ReactElement => (
      <>
        {options.map(
          ({ label, value }: Option, index: number): ReactElement => (
            <Chip
              label={label}
              {...getTagProps({ index })}
              disabled={fixedValuesSet.has(value)}
            />
          ),
        )}
      </>
    ),
    [fixedValuesSet],
  );

  const popupIcon = useMemo(
    (): ReactNode =>
      loading ? (
        <CircularProgress
          color={color}
          size={ICON_DEFAULT_SIZE}
        />
      ) : undefined,
    [color, loading],
  );

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Autocomplete
        {...rest}
        value={activeOption}
        disableCloseOnSelect={disableCloseOnSelect}
        options={options}
        multiple={multiple}
        filterSelectedOptions={filterSelectedOptions}
        loading={loading}
        disabled={disabled || loading}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClose={handleClose}
        onOpen={handleOpen}
        color={color}
        open={open}
        renderTags={renderTags}
        onChange={handleChange as TAutocompleteProps<Option>['onChange']}
        getOptionLabel={computedGetOptionLabel}
        getOptionSelected={computedGetOptionSelected}
        renderInput={renderInput}
        filterOptions={computedFilterOptions}
        loadingText={loadingText || texts.select.loading}
        noOptionsText={noOptionsText || texts.select.noOptions}
        freeSolo={allowAdd}
        forcePopupIcon={forcePopupIcon}
        popupIcon={popupIcon}
        disableClearable={disableClearable || loading}
        classes={autocompleteClasses}
      />
    </ClickAwayListener>
  );
};

export default Select;

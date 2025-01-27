import React, { ReactElement, useCallback, useState, KeyboardEvent, useEffect, useRef } from 'react';
import { Close, Search, Edit } from '@material-ui/icons';
import classNames from 'classnames';
import { Modal } from '@material-ui/core';

import IconButton from '^controls/IconButton';
import Input, { IInputProps } from '^inputs/Input';
import Button from '^controls/Button';
import { useDeviceType } from '^common/DeviceTypeProvider';
import useBodyScrollLock from '^hooks/useBodyScrollLock';
import useTexts from '^hooks/useTexts';

import styles from './styles.module.scss';

export interface IPageHeaderSearchProps extends Required<Pick<IInputProps, 'value' | 'onChange'>>, Pick<IInputProps, 'mask' | 'toUpperCase' | 'toLowerCase'> {
  label?: string;
  resultsLabel?: string;
  className?: string;
}

interface IPageHeaderSearchFullProps extends IPageHeaderSearchProps {
  open: boolean;
  onToggleOpen: (open: boolean) => void;
}

const PageHeaderSearch = ({ className, label, value, onChange, open, onToggleOpen, ...restProps }: IPageHeaderSearchFullProps): ReactElement => {
  const texts = useTexts();
  const { isDesktop } = useDeviceType();

  const [internalValue, setInternalValue] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useBodyScrollLock(open && !isDesktop);

  const handleOpen = useCallback(
    (): void => {
      onToggleOpen(true);
      setInternalValue(value);
    },
    [value, onToggleOpen],
  );

  useEffect(
    (): void => {
      if (open) {
        inputRef.current?.focus();
      }
    },
    [open],
  );

  useEffect(
    (): void => setInternalValue(value),
    [value],
  );

  const setInputRef = useCallback(
    (instance: HTMLInputElement | null): void => {
      inputRef.current = instance;
    },
    [],
  );

  const handleClose = useCallback(
    (): void => {
      onToggleOpen(false);
    },
    [onToggleOpen],
  );

  const handleSearchApply = useCallback(
    (): void => {
      handleClose();
      onChange(internalValue);
    },
    [onChange, internalValue, handleClose],
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSearchApply();

        inputRef.current?.blur();
      }
    },
    [handleSearchApply],
  );

  const renderSearchPanel = useCallback((content:ReactElement):ReactElement => {
    const overlayClassName =
      classNames(
        styles.overlay,
        {
          [styles.overlayDesktop]: isDesktop,
          [styles.overlayMobile]: !isDesktop,
          [styles.open]: open,
        },
      );

    if (isDesktop) {
      return (
        <div className={overlayClassName}>
          {content}
        </div>
      );
    }

    return (
      <Modal
        open={open}
        keepMounted
        hideBackdrop
        className={overlayClassName}
      >
        {content}
      </Modal>
    );
  }, [isDesktop, open]);

  return (
    <>
      <IconButton
        className={className}
        color="primary"
        onClick={handleOpen}
      >
        {value ? <Edit /> : <Search />}
      </IconButton>

      {renderSearchPanel(
        <div className={styles.searchPanel}>
          <div className={styles.content}>
            <Input
              {...restProps}
              type='search'
              className={styles.input}
              size={isDesktop ? 'small' : 'medium'}
              label={label || texts.pageHeader.search.label}
              onKeyPress={handleKeyPress}
              value={internalValue}
              onChange={setInternalValue}
              inputRef={setInputRef}
            />

            <IconButton
              className={styles.closeButton}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </div>

          <Button
            className={styles.applyButton}
            size={isDesktop ? 'medium' : 'large'}
            onClick={handleSearchApply}
          >
            {label || texts.pageHeader.search.label}
          </Button>
        </div>,
      )}
    </>
  );
};

export default PageHeaderSearch;

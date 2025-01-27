import React, { ComponentType, ReactElement, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import SunEditorReact, { SunEditorReactProps } from 'suneditor-react';
import SetOptions from 'suneditor-react/types/SetOptions';
import SunEditor from 'suneditor/src/lib/core';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';

import BaseFormControl from '^inputs/BaseFormControl';
import { useGlobalConfig } from '^common/GlobalConfig';
import IValidationTargetProps from '^types/IValidationTargetProps';
import RichTextEditorButton from '^enums/RichTextEditorButton';
import Locale from '^enums/Locale';

import 'suneditor/dist/css/suneditor.min.css';

import styles from './styles.module.scss';

interface ISunEditorRef {
  editor: SunEditor;
}
interface ISunEditorProps extends SunEditorReactProps {
  ref?: (instance: ISunEditorRef | null) => void;
}

const Editor = SunEditorReact as ComponentType<ISunEditorProps>;

const EDITOR_SELECTOR = '.sun-editor-editable';
const EMPTY_VALUE = '<p><br></p>';

const DEFAULT_BUTTONS: RichTextEditorButton[][] = [
  [
    RichTextEditorButton.Bold,
    RichTextEditorButton.Italic,
    RichTextEditorButton.Underline,
    RichTextEditorButton.Strike,
  ],
  [
    RichTextEditorButton.FontColor,
    RichTextEditorButton.HighlightColor,
    RichTextEditorButton.Link,
    RichTextEditorButton.RemoveFormat,
  ],
  [
    RichTextEditorButton.Align,
    RichTextEditorButton.List,
  ],
];

const LOCALE_TO_LANG_MAP: Record<Locale, SunEditorReactProps['lang']> = {
  [Locale.DK]: 'da',
};

export interface IRichTextEditorProps extends IValidationTargetProps {
  value?: string | null;
  label?: ReactNode;
  disabled?: boolean;
  charsCounter?: number;
  className?: string;
  enableTable?: boolean;
  enableImage?: boolean;
  onChange?: (value: string | null) => void;
}

const RichTextEditor = ({ className, label, value, disabled, charsCounter, enableTable, enableImage, inputRef, onChange, ...rest }: IRichTextEditorProps): ReactElement => {
  const [editorRef, setEditorRef] = useState<SunEditor | null>(null);
  const [focused, setFocused] = useState<boolean>(false);

  const { locale } = useGlobalConfig();

  const handleFocus = useCallback(
    (): void => {
      setFocused(true);
    },
    [],
  );

  const handleBlur = useCallback(
    (): void => {
      setFocused(false);
    },
    [],
  );

  const options = useMemo(
    (): SetOptions => {
      const additionalButtons: RichTextEditorButton[] = [];

      if (enableTable) {
        additionalButtons.push(RichTextEditorButton.Table);
      }

      if (enableImage) {
        additionalButtons.push(RichTextEditorButton.Image);
      }

      return {
        buttonList: [...DEFAULT_BUTTONS, additionalButtons],
        imageFileInput: false,
        imageUrlInput: false,
        charCounter: !!charsCounter,
        maxCharCount: charsCounter,
        historyStackDelayTime: 0,
      };
    },
    [charsCounter, enableImage, enableTable],
  );

  const handleLoad = useCallback(
    (): void => {
      if (typeof inputRef === 'function') {
        inputRef(document.querySelector(EDITOR_SELECTOR));
      }
    },
    [inputRef],
  );

  const handleRef = useCallback(
    (instance: ISunEditorRef | null): void => {
      if (!instance) {
        return;
      }

      setEditorRef(instance.editor);
    },
    [],
  );

  const processChange = useCallback(
    (value: string | null): void => {
      if (typeof onChange === 'function') {
        onChange(value);
      }
    },
    [onChange],
  );

  const handleChange = useCallback(
    (value: string): void => (
      // Set value to `null` in case if input was cleared
      processChange(value === EMPTY_VALUE ? null : value)
    ),
    [processChange],
  );

  useEffect(
    (): void => {
      if (value === '') {
        processChange(null);
      }
    },
    // Define correct default value only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(
    (): void => {
      if (!editorRef) {
        return;
      }

      // Manually update onChange callback, cause suneditor-react sets it only on mount
      editorRef.onChange = handleChange;
    },
    [editorRef, handleChange],
  );

  return (
    <BaseFormControl
      {...rest}
      className={classNames(
        styles.richTextEditor,
        {
          [styles.focused]: focused,
        },
        className,
      )}
    >
      {label && (
        <Typography
          className={styles.label}
          variant="subtitle2"
        >
          {label}
        </Typography>
      )}

      <Editor
        ref={handleRef}
        lang={LOCALE_TO_LANG_MAP[locale]}
        onLoad={handleLoad}
        setOptions={options}
        height="auto"
        setContents={value || ''}
        disable={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </BaseFormControl>
  );
};

export default RichTextEditor;

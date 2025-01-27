import React, { ReactElement, useState, useCallback, useEffect } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { AlertType, DropzoneAreaBase, DropzoneAreaBaseProps, FileObject } from 'material-ui-dropzone';
import classNames from 'classnames';

import NotificationService from '^utils/NotificationService';
import useTexts from '^hooks/useTexts';
import { bytesToMegabytes } from '^utils/fileSizeConverter';

import styles from './styles.module.scss';

const FILES_LIMIT = 50;

export interface IFilePickerProps extends Pick<DropzoneAreaBaseProps, 'acceptedFiles' | 'filesLimit' | 'maxFileSize' | 'dropzoneText' |'getFileLimitExceedMessage' | 'getDropRejectMessage'> {
  className?: string;
  onChange?: (files: File[]) => void;
}

const FilePicker = ({ className, filesLimit = FILES_LIMIT, maxFileSize = Infinity, dropzoneText, getFileLimitExceedMessage, getDropRejectMessage, onChange, ...rest }: IFilePickerProps): ReactElement => {
  const texts = useTexts();

  const [files, setFiles] = useState<FileObject[]>([]);

  const limitReached = filesLimit && files.length >= filesLimit;

  useEffect(
    (): void => {
      if (typeof onChange === 'function') {
        onChange(files.map(({ file }: FileObject): File => file));
      }
    },
    [files, onChange],
  );

  const handleAdd = useCallback(
    (newFiles: FileObject[]): void => (
      setFiles((files: FileObject[]): FileObject[] => (
        [...files, ...newFiles]
      ))
    ),
    [],
  );

  const handleRemove = useCallback(
    (key: number) => (): void => (
      setFiles((files: FileObject[]): FileObject[] => files.filter(
        (_: FileObject, index: number): boolean => index !== key,
      ))
    ),
    [],
  );

  const resolveRejectedErrorMessage = useCallback(
    ({ name, size }: File, acceptedFiles: string[], maxFileSize: number): string => {
      if (size > maxFileSize) {
        return texts.filePicker.fileRejectedFileSize(name, bytesToMegabytes(maxFileSize).toFixed(2));
      }

      if (acceptedFiles.length > 0) {
        const match = name.match(/\.[0-9a-z]+$/i);

        if (match && match.length > 0 && !acceptedFiles.includes(match[0])) {
          return texts.filePicker.fileRejectedNotSupportedFormat(name);
        }
      }

      return '';
    },
    [texts.filePicker],
  );

  const handleAlert = useCallback(
    (message: string, variant: AlertType): void => {
      if (variant === 'error') {
        NotificationService.error(message);
      }
    },
    [],
  );

  return (
    <div className={classNames(styles.filePicker, className)}>
      {!limitReached && (
        <DropzoneAreaBase
          classes={{
            root: styles.dropzoneArea,
            text: styles.text,
            icon: styles.icon,
          }}
          filesLimit={filesLimit}
          maxFileSize={maxFileSize}
          fileObjects={files}
          showPreviewsInDropzone={false}
          onAdd={handleAdd}
          showAlerts={false}
          dropzoneText={dropzoneText || texts.filePicker.dropzoneText}
          getFileLimitExceedMessage={getFileLimitExceedMessage || texts.filePicker.limitExceed}
          getDropRejectMessage={getDropRejectMessage || resolveRejectedErrorMessage}
          onAlert={handleAlert}
          {...rest}
        />
      )}

      <div
        className={
          classNames(
            styles.files,
            {
              [styles.hasDropzoneArea]: !limitReached,
            },
          )
        }
      >
        {files.map(({ file }: FileObject, key: number): ReactElement => (
          <div
            key={key}
            className={styles.file}
          >
            <Typography
              variant="caption"
              noWrap
            >
              {file.name}
            </Typography>

            <IconButton
              size="small"
              onClick={handleRemove(key)}
            >
              <DeleteOutline />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilePicker;

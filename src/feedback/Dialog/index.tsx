import React, { ReactElement, ReactNode, useMemo } from 'react';
import {
  DialogProps,
  PropTypes,
  Dialog as BaseDialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  IconButton,
  PaperProps,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';

import SkeletonProvider, { ISkeletonProviderProps } from '^data-display/SkeletonProvider';
import useTexts from '^hooks/useTexts';
import ActionButton, { IActionButtonProps } from '^controls/ActionButton';
import { useDeviceType } from '^common/DeviceTypeProvider';

import DialogTitleSkeleton from './DialogSkeleton/TitleSkeleton';
import DialogContentSkeleton from './DialogSkeleton/ContentSkeleton';
import styles from './styles.module.scss';

export interface IDialogProps
  extends Pick<
    DialogProps,
    | 'className'
    | 'children'
    | 'open'
    | 'disableBackdropClick'
    | 'disableEscapeKeyDown'
    | 'fullScreen'
    | 'onBackdropClick'
    | 'scroll'
    | 'disablePortal'
  > {
  title: ReactNode;
  color?: PropTypes.Color;
  proceedButtonProps?: IActionButtonProps;
  closeButtonProps?: Omit<IActionButtonProps, 'onClick'> | null;
  onClose: () => void;
  loading?: boolean;
  disableContentPadding?: boolean;
  contentSkeletonProps?: Partial<
    Pick<
      ISkeletonProviderProps,
      'className' | 'Skeleton' | 'withForceContentRender'
    >
  >;
}

const Dialog = ({
  title,
  className,
  children,
  proceedButtonProps,
  closeButtonProps,
  color,
  fullScreen,
  loading,
  onClose,
  disableContentPadding = false,
  contentSkeletonProps,
  ...rest
}: IDialogProps): ReactElement => {
  const texts = useTexts();
  const { isDesktop } = useDeviceType();

  const preparedProceedButtonProps = useMemo(
    (): IActionButtonProps | undefined =>
      proceedButtonProps
        ? {
          color,
          ...proceedButtonProps,
          label: proceedButtonProps.label || texts.actions.proceed,
        }
        : undefined,
    [proceedButtonProps, color, texts.actions.proceed],
  );

  const preparedCloseButtonProps = useMemo(
    (): IActionButtonProps | undefined =>
      closeButtonProps !== null
        ? {
          color,
          variant: 'outlined',
          ...closeButtonProps,
          onClick: onClose,
          label: closeButtonProps?.label || texts.actions.cancel,
        }
        : undefined,
    [closeButtonProps, color, onClose, texts.actions.cancel],
  );

  const hasActions = !!(preparedProceedButtonProps || preparedCloseButtonProps);

  const paperProps = useMemo(
    (): PaperProps => ({
      className: classNames(styles.paper, {
        [styles.paperMobile]: !isDesktop,
        [styles.paperDesktop]: isDesktop,
        [styles.paperFullScreen]: fullScreen,
      }),
    }),
    [fullScreen, isDesktop],
  );

  return (
    <BaseDialog
      maxWidth="xl"
      fullScreen={fullScreen}
      color={color}
      onClose={onClose}
      PaperProps={paperProps}
      {...(rest as DialogProps)}
    >
      <div
        className={classNames(
          styles.dialog,
          {
            [loading
              ? styles.dialogFullscreenLoading
              : styles.dialogFullscreen]: fullScreen,
          },
          className,
        )}
      >
        <DialogTitle>
          <div
            className={classNames(styles.dialogTitle, {
              [styles.dialogTitleLoading]: loading,
            })}
          >
            <SkeletonProvider
              className={styles.dialogTitleSkeleton}
              showSkeleton={!!loading}
              Skeleton={DialogTitleSkeleton}
            >
              <span>{title}</span>
            </SkeletonProvider>

            {onClose && (
              <IconButton
                aria-label="close"
                onClick={onClose}
              >
                <CloseIcon />
              </IconButton>
            )}
          </div>
        </DialogTitle>

        <SkeletonProvider
          showSkeleton={!!loading}
          Skeleton={DialogContentSkeleton}
          {...contentSkeletonProps}
        >
          <DialogContent
            className={classNames(styles.content, {
              [styles.contentNoPadding]: disableContentPadding,
            })}
          >
            {children}
          </DialogContent>
        </SkeletonProvider>

        {!loading && hasActions && (
          <DialogActions>
            {typeof preparedProceedButtonProps !== 'undefined' && (
              <ActionButton {...preparedProceedButtonProps} />
            )}
            {typeof preparedCloseButtonProps !== 'undefined' && (
              <ActionButton {...preparedCloseButtonProps} />
            )}
          </DialogActions>
        )}
      </div>
    </BaseDialog>
  );
};

export default Dialog;

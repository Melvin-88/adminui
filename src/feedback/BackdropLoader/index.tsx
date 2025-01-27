import React, { ReactElement, CSSProperties, ReactNode } from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import Backdrop, { BackdropProps } from '@material-ui/core/Backdrop';
import zIndex from '@material-ui/core/styles/zIndex';

import styles from './styles.module.scss';

const backdropStyles: CSSProperties = {
  zIndex: zIndex.modal + 1,
};

export interface IBackdropLoaderProps
  extends Pick<BackdropProps, 'open' | 'className'> {
  onClose?: () => void;
  description?: ReactNode;
}

const BackdropLoader = ({
  onClose,
  description,
  ...rest
}: IBackdropLoaderProps): ReactElement => (
  <Backdrop
    className={styles.root}
    style={backdropStyles}
    onClick={onClose}
    {...rest}
  >
    <CircularProgress className={styles.icon} />
    {description && (
      <div className={styles.description}>
        {typeof description !== 'object' ? (
          <Typography
            variant="body1"
            align="center"
            children={description}
          />
        ) : (
          description
        )}
      </div>
    )}
  </Backdrop>
);

export default BackdropLoader;

import React, { ComponentType, ReactElement, ReactNode, MouseEvent } from 'react';
import { IconButton, SvgIconProps, Tooltip, Typography } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import classNames from 'classnames';

import Label, { ILabelProps } from '^data-display/Label';

import styles from './styles.module.scss';

export interface IPageHeaderLabelProps extends Pick<ILabelProps, 'color'> {
  label: ReactNode;
}

export interface IPageHeaderTitleProps {
  title?: NonNullable<ReactNode>;
  subTitle?: string;
  labels?: IPageHeaderLabelProps[];
  shrink?: boolean;
  className?: string;
  BackIcon?: ComponentType<SvgIconProps>;
  onBackClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const PageHeaderTitle = ({ className, title = '', subTitle, labels, shrink, BackIcon = KeyboardArrowLeft, onBackClick }: IPageHeaderTitleProps): ReactElement => (
  <div
    className={
      classNames(
        styles.pageHeaderTitle,
        {
          [styles.shrink]: shrink,
        },
        className,
      )
    }
  >
    {typeof onBackClick === 'function' && (
      <IconButton
        className={styles.backButton}
        onClick={onBackClick}
      >
        <BackIcon />
      </IconButton>
    )}

    <div className={styles.titles}>
      <Tooltip title={title}>
        <Typography
          className={styles.mainTitle}
          variant={shrink ? 'subtitle2' : 'h6'}
          noWrap
        >
          {title}
        </Typography>
      </Tooltip>

      <div
        className={
          classNames(
            styles.secondaryInfo,
            {
              [styles.hasSubtitle]: !!subTitle,
            },
          )
        }
      >
        {subTitle && (
          <Typography
            className={styles.subTitle}
            variant="caption"
            noWrap
          >
            {subTitle}
          </Typography>
        )}

        {
          labels && (
            <div className={styles.labelWrapper}>
              {labels.map(({ color, label }: IPageHeaderLabelProps, key: number): ReactElement => (
                <Label
                  key={key}
                  color={color}
                  label={label}
                />
              ))}
            </div>
          )
        }
      </div>
    </div>
  </div>
);

export default PageHeaderTitle;

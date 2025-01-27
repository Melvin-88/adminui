import React, { ReactElement, ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';

import { useDeviceType } from '^common/DeviceTypeProvider';

import styles from './styles.module.scss';

const PLACEHOLDER = '-';

const valueAlignments = {
  left: styles.valueLeft,
  right: styles.valueRight,
};

const fixedColumns = {
  label: styles.labelFixed,
  value: styles.valueFixed,
};

const contentAlignments = {
  end: styles.contentEnd,
  start: styles.contentStart,
  center: styles.contentCenter,
  stretch: styles.contentStretch,
};

type TRowItemLayout = 'singleColumn' | 'twoColumns';

export interface IInfoTableRowItem {
  name: ReactNode;
  value?: ReactNode;
  hasDivider?: boolean;
  layout?: TRowItemLayout;
  contentAlignment?: keyof typeof contentAlignments;
  withIdent?: boolean;
}

export interface IInfoTableSection {
  title?: ReactNode;
  rows: IInfoTableRowItem[];
}

export interface IInfoTableProps {
  sections: IInfoTableSection[];
  title?: ReactNode;
  className?: string;
  hasBackground?: boolean;
  valueAlignment?: keyof typeof valueAlignments;
  fixedColumn?: keyof typeof fixedColumns;
  shouldWrap?: boolean;
}

const InfoTable = ({
  sections,
  title,
  className,
  hasBackground,
  valueAlignment = 'left',
  fixedColumn = 'label',
  shouldWrap,
}: IInfoTableProps): ReactElement => {
  const { isMobile } = useDeviceType();

  return (
    <div
      className={classNames(
        styles.infoTable,
        {
          [styles.shouldWrap]: shouldWrap,
          [styles.hasBackground]: hasBackground,
        },
        valueAlignments[valueAlignment],
        fixedColumns[fixedColumn],
        className,
      )}
    >
      {title && (
        <Typography
          variant="h6"
          className={styles.title}
        >
          {title}
        </Typography>
      )}

      {sections.map(
        ({ title, rows }: IInfoTableSection, index: number): ReactElement => (
          <div
            key={index}
            className={styles.section}
          >
            {title && (
              <Typography
                variant="subtitle2"
                className={styles.sectionTitle}
              >
                {title}
              </Typography>
            )}

            {rows.map(
              (
                {
                  name,
                  value,
                  hasDivider,
                  withIdent,
                  layout = isMobile ? 'singleColumn': 'twoColumns',
                  contentAlignment = layout === 'singleColumn'
                    ? 'stretch'
                    : 'start',
                }: IInfoTableRowItem,
                index: number,
              ): ReactElement => (
                <div
                  className={classNames(
                    styles.row,
                    contentAlignments[contentAlignment],
                    {
                      [styles.withDivider]: hasDivider,
                      [styles.twoColumns]: layout === 'twoColumns',
                    },
                  )}
                  key={index}
                >
                  <Typography
                    variant="caption"
                    className={classNames(styles.label, {
                      [styles.withIdent]: withIdent,
                    })}
                  >
                    {name}
                  </Typography>

                  <Typography
                    variant="body2"
                    component="div"
                    className={classNames(styles.value, {
                      [styles.valueWithIdent]: isMobile && withIdent,
                    })}
                  >
                    {value || PLACEHOLDER}
                  </Typography>
                </div>
              ),
            )}
          </div>
        ),
      )}
    </div>
  );
};

export default InfoTable;

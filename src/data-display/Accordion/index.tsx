import React, { ReactElement, ReactNode } from 'react';
import { Accordion as BaseAccordion, AccordionDetails, AccordionDetailsProps, AccordionProps, AccordionSummary, AccordionSummaryProps, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import classNames from 'classnames';

import styles from './styles.module.scss';

const summaryClasses: AccordionSummaryProps['classes'] = {
  root: styles.summary,
  content: styles.content,
};

const detailsClasses: AccordionDetailsProps['classes'] = {
  root: styles.details,
};

export interface IAccordionProps extends Pick<AccordionProps, 'defaultExpanded' | 'onChange' | 'TransitionProps'> {
  label: ReactNode;
  details: ReactNode;
  expandIcon?: ReactNode;
  className?: string;
  labelClassName?: string;
  detailsClassName?: string;
}

const Accordion = ({ className, labelClassName, detailsClassName, label, details, expandIcon, ...rest }: IAccordionProps): ReactElement => (
  <BaseAccordion
    className={classNames(styles.accordion, className)}
    {...rest}
  >
    <AccordionSummary
      classes={summaryClasses}
      className={labelClassName}
      expandIcon={expandIcon || <ExpandMore />}
    >
      <Typography variant="subtitle2">
        {label}
      </Typography>
    </AccordionSummary>

    <AccordionDetails
      className={detailsClassName}
      classes={detailsClasses}
    >
      {details}
    </AccordionDetails>
  </BaseAccordion>
);

export default Accordion;

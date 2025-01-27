import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React, { ReactElement } from 'react';

const TimerIcon = (props: SvgIconProps): ReactElement => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.1032 4.61695L18.3792 5.7547C20.7308 7.63266 22.2405 10.5228 22.2405 13.7595C22.2405 19.4061 17.6466 24 11.9999 24C6.35329 24 1.7594 19.4061 1.7594 13.7595C1.7594 8.47903 5.77677 4.11961 10.9156 3.57633V2.16872H10.8477C10.2488 2.16872 9.7633 1.68323 9.7633 1.08436C9.7633 0.485484 10.2488 0 10.8477 0H13.1522C13.751 0 14.2365 0.485437 14.2365 1.08431C14.2365 1.68319 13.751 2.16867 13.1522 2.16867H13.0843V3.57628C14.3181 3.70669 15.4868 4.05741 16.5513 4.58784L17.2736 3.45277C17.5951 2.94745 18.2654 2.79844 18.7705 3.12C19.2757 3.44152 19.4247 4.11173 19.1032 4.61695ZM14.0875 9.71752C14.4813 9.26616 15.1663 9.21976 15.6174 9.61337C16.0686 10.0071 16.1153 10.6921 15.7216 11.1433L12.817 14.4723C12.4233 14.9235 11.7383 14.9702 11.2871 14.5765C10.8359 14.1828 10.7892 13.4978 11.1829 13.0466L14.0875 9.71752Z"
    />
  </SvgIcon>
);

export default TimerIcon;

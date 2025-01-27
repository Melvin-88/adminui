import React, { FunctionComponent, ReactElement, Key, useCallback } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from '@material-ui/core';

import NotificationService from '^utils/NotificationService';

const Template: StoryFn = (): ReactElement => {
  const handleSuccessButtonClick = useCallback((): Key => NotificationService.success('Success message'), []);
  const handleWarningButtonClick = useCallback((): Key => NotificationService.warning('Warning message'), []);
  const handleInfoButtonClick = useCallback((): Key => NotificationService.info('Some long information message'), []);
  const handleErrorButtonClick = useCallback((): Key => NotificationService.error('Error message'), []);
  const handleLongErrorButtonClick = useCallback((): Key => NotificationService.error('Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message Error message '), []);

  return (
    <div style={{ display: 'flex' }}>
      <Button onClick={handleSuccessButtonClick}>Success</Button>
      <Button onClick={handleWarningButtonClick}>Warning</Button>
      <Button onClick={handleInfoButtonClick}>Information</Button>
      <Button onClick={handleErrorButtonClick}>Error</Button>
      <Button onClick={handleLongErrorButtonClick}>Long Error</Button>
    </div>
  );
};

export const Notifications = Template.bind({});

export default {
  title: 'AdminUI/Feedback/Notifications',
  component: null as unknown as FunctionComponent,
} as Meta;

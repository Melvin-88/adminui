import React, { ReactElement, useCallback, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button } from '@material-ui/core';

import SideBarComponent, { ISideBarProps } from '.';

const Template: StoryFn<ISideBarProps> = (args: ISideBarProps): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenClick = useCallback(
    (): void => {
      setOpen(true);
    },
    [],
  );

  const handleClose = useCallback(
    (): void => {
      setOpen(false);
    },
    [],
  );

  return (
    <div>
      <Button
        onClick={handleOpenClick}
      >
         Open
      </Button>
      <SideBarComponent
        {...args}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export const SimpleSideBar = Template.bind({});

SimpleSideBar.args = {
  title: 'Title',
  children: (
    <div>
       Modal content
    </div>
  ),
} as ISideBarProps;

export const SideBarWithFooter = Template.bind({});

SideBarWithFooter.args = {
  title: 'Title',
  children: (
    <div>
        Modal content
    </div>
  ),
  footer: (
    <div>
        Footer
    </div>
  ),
} as ISideBarProps;

export const LeftSideBar = Template.bind({});

LeftSideBar.args = {
  title: 'Title',
  children: (
    <div>
        Modal content
    </div>
  ),
  anchor: 'left',
} as ISideBarProps;

export const MediumSizeSideBar = Template.bind({});

MediumSizeSideBar.args = {
  title: 'Title',
  children: (
    <div>
       Modal content
    </div>
  ),
  size: 'medium',
} as ISideBarProps;

export default {
  title: 'AdminUI/Feedback/SideBar',
  component: SideBarComponent,
} as Meta<ISideBarProps>;

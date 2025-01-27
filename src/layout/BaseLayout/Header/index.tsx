import React from 'react';
import { Alert as MuiAlert } from '@material-ui/lab';

import Button from '^controls/Button';

const Header = (
  <MuiAlert
    severity="warning"
    variant="outlined"
    action={
      <>
        <Button
          color="secondary"
          size="small"
          variant="text"
        >
          Manage
        </Button>
        <Button
          color="secondary"
          size="small"
          variant="text"
        >
          Dismiss
        </Button>
      </>
    }
  >
    Update customer consent
  </MuiAlert>
);

export default Header;

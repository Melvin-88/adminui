import React, { ReactElement } from 'react';
import BaseAvatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

import useAvatar, { TAvatarBackgroundColor } from './useAvatar';

export interface IAvatarProps {
  name: string;
  backgroundColor?: TAvatarBackgroundColor;
  className?: string;
}

const Avatar = ({
  name,
  className,
  backgroundColor,
}: IAvatarProps): ReactElement => {
  const { displayName, backgroundColorClassName } = useAvatar({
    name,
    backgroundColor,
  });

  return (
    <BaseAvatar className={classNames(backgroundColorClassName, className)}>
      {displayName}
    </BaseAvatar>
  );
};

export default Avatar;

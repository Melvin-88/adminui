import { useMemo } from 'react';

import styles from './styles.module.scss';

export type TAvatarBackgroundColor =
  | 'grey'
  | 'primary'
  | 'secondary'
  | 'red'
  | 'green'
  | 'violet'
  | 'blue';

interface IUseAvatarProps {
  name: string;
  backgroundColor?: TAvatarBackgroundColor;
}

interface IUseAvatarResult {
  displayName: string;
  backgroundColorClassName: string | undefined;
}

const backgroundColorClassMap: Record<TAvatarBackgroundColor, string> = {
  grey: styles.grey,
  primary: styles.primary,
  secondary: styles.secondary,
  red: styles.red,
  green: styles.green,
  violet: styles.violet,
  blue: styles.blue,
};

const backgroundColorClassList = Object.values(backgroundColorClassMap);

const EMPTY_DISPLAY_NAME_FALLBACK = '-';

const getDisplayName = (name: string): string => {
  if (name.length === 0) {
    return EMPTY_DISPLAY_NAME_FALLBACK;
  }
  const words = name.toUpperCase().split(' ');
  const firstWord = words[0];
  const lastWord = words.length > 1 ? words[words.length - 1] : '';

  return `${firstWord[0]}${lastWord[0] || firstWord[1] || ''}`;
};

const resolveBackgroundColorClassName = (name: string): string | undefined =>
  name.length > 0
    ? backgroundColorClassList.find(
      (_: string, index: number): boolean =>
        name.length % (backgroundColorClassList.length - index) === 0,
    )
    : backgroundColorClassMap.grey;

const useAvatar = ({
  name,
  backgroundColor,
}: IUseAvatarProps): IUseAvatarResult =>
  useMemo((): IUseAvatarResult => {
    const nameClean = name.trim();

    return {
      displayName: getDisplayName(nameClean),
      backgroundColorClassName: backgroundColor
        ? backgroundColorClassMap[backgroundColor]
        : resolveBackgroundColorClassName(nameClean),
    };
  }, [name, backgroundColor]);

export default useAvatar;

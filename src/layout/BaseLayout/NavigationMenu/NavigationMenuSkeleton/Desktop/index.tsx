import React, { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

import styles from './styles.module.scss';

const Desktop = (): ReactElement => (
  <div className={styles.skeletonWrapper}>
    <ContentLoader
      width="60"
      viewBox="0 0 60 250"
    >
      <rect
        y="0"
        x="12"
        width="36"
        height="36"
        rx="4"
      />

      <rect
        y="70"
        x="16"
        width="28"
        height="28"
        rx="4"
      />

      <rect
        y="106"
        x="16"
        width="28"
        height="28"
        rx="4"
      />

      <rect
        y="142"
        x="16"
        width="28"
        height="28"
        rx="4"
      />

      <rect
        y="178"
        x="16"
        width="28"
        height="28"
        rx="4"
      />

      <rect
        y="214"
        x="16"
        width="28"
        height="28"
        rx="4"
      />
    </ContentLoader>
    <ContentLoader
      width="60"
      viewBox="0 0 60 80"
    >
      <rect
        y="0"
        x="12"
        width="36"
        height="36"
        rx="4"
      />

      <rect
        y="44"
        x="12"
        width="36"
        height="36"
        rx="4"
      />
    </ContentLoader>
  </div>
);

export default Desktop;

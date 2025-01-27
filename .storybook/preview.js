
import React from 'react';
import GlobalConfig from '../src/common/GlobalConfig';

export const decorators = [
  Story => (
    <GlobalConfig>
      <Story />
    </GlobalConfig>
  ),
];

export const parameters = {
  controls: { expanded: true },
  options: {
    storySort: {
      order: ['Installation guide', 'Color Palette', 'Using RichTextEditor', 'Exposed hooks', 'Exposed utils', 'Exposed types', 'Prevent redirection', 'SCSS utils', 'Validators', 'Masks', 'Media utils'],
    },
  }
};

import Locale from '^enums/Locale';

import TTexts from './TTexts';

export default interface IGlobalConfig {
  locale: Locale;
  textOverrides: Partial<TTexts>;
}

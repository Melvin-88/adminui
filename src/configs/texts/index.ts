import Locale from '^enums/Locale';
import TTexts from '^types/TTexts';

import dk from './dk';

const texts: Record<Locale, TTexts> = {
  [Locale.DK]: dk,
};

export default texts;

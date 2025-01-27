import Locale from '^enums/Locale';
import INumberFormat from '^types/INumberFormat';

import dk from './dk';

const numberFormats: Record<Locale, INumberFormat> = {
  [Locale.DK]: dk,
};

export default numberFormats;

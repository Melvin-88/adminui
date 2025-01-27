import Locale from '^enums/Locale';
import IDateTimeFormat from '^types/IDateTimeFormat';

import dk from './dk';

const dateTimeFormats: Record<Locale, IDateTimeFormat> = {
  [Locale.DK]: dk,
};

export default dateTimeFormats;

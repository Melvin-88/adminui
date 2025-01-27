import daLocale from 'date-fns/locale/da';

import Locale from '^enums/Locale';

const dateTimeLocales: Record<Locale, any> = {
  [Locale.DK]: daLocale,
};

export default dateTimeLocales;

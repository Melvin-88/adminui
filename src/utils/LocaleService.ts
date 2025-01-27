import Locale from '^enums/Locale';

class LocaleService {
  private _locale: Locale = Locale.DK;

  public get locale(): Locale {
    return this._locale;
  }

  public set locale(locale: Locale) {
    this._locale = locale;
  }
}

export default new LocaleService();

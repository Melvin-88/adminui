import AdditionalColorWeight from '^enums/colors/AdditionalColorWeight';
import ColorType from '^enums/colors/ColorType';
import GreyColorWeight from '^enums/colors/GreyColorWeight';
import MainColorWeight from '^enums/colors/MainColorWeight';

import { getColorsMap } from './utils';

const rootStyle = window.getComputedStyle(document.documentElement);

export const primary: Record<MainColorWeight, string> = getColorsMap(ColorType.Primary, Object.values(MainColorWeight), rootStyle);

export const secondary: Record<MainColorWeight, string> = getColorsMap(ColorType.Secondary, Object.values(MainColorWeight), rootStyle);

export const grey: Record<GreyColorWeight, string> = getColorsMap(ColorType.Grey, Object.values(GreyColorWeight), rootStyle);

export const red: Record<AdditionalColorWeight, string> = getColorsMap(ColorType.Red, Object.values(AdditionalColorWeight), rootStyle);

export const green: Record<AdditionalColorWeight, string> = getColorsMap(ColorType.Green, Object.values(AdditionalColorWeight), rootStyle);

export const yellow: Record<AdditionalColorWeight, string> = getColorsMap(ColorType.Yellow, Object.values(AdditionalColorWeight), rootStyle);

export const violet: Record<AdditionalColorWeight, string> = getColorsMap(ColorType.Violet, Object.values(AdditionalColorWeight), rootStyle);

export const blue: Record<AdditionalColorWeight, string> = getColorsMap(ColorType.Blue, Object.values(AdditionalColorWeight), rootStyle);

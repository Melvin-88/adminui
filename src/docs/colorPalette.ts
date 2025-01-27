import * as colors from '^common/ThemeProvider/configs/colors';
import ColorType from '^enums/colors/ColorType';

type TColorRecord = Record<string, string>;

const colorPalette = Object.values(ColorType).reduce(
  (palette: Record<ColorType, TColorRecord>, type: ColorType): Record<ColorType, TColorRecord> => {
    const color = colors[type] as TColorRecord;
    const weightTypes = Object.keys(color);

    // Preserving order for weight types, so that those, which start with 0 (e.g. 000, 050) come first
    const zeroTrailedWeightTypes = weightTypes.filter((type: string): boolean => type.startsWith('0'));
    const otherWeightTypes = weightTypes.filter((type: string): boolean => !type.startsWith('0'));

    palette[type] = [...zeroTrailedWeightTypes, ...otherWeightTypes].reduce(
      (map: TColorRecord, weight: string): TColorRecord => {
        map[`--theme-color-${type}-${weight}`] = color[weight];

        return map;
      },
      {},
    );

    return palette;
  },
  {} as Record<ColorType, TColorRecord>,
);

export default colorPalette;

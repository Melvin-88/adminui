import ColorType from '^enums/colors/ColorType';

const THEME_COLOR_PREFIX = '--theme-color';

export const getColorsMap = <WeightType extends string>(type: ColorType, weights: WeightType[], rootStyle: CSSStyleDeclaration): Record<WeightType, string> => (
  weights
    .reduce(
      (map: Record<WeightType, string>, weight: WeightType): Record<WeightType, string> => {
        const value = rootStyle.getPropertyValue(`${THEME_COLOR_PREFIX}-${type}-${weight}`).trim();

        map[weight] = value;

        return map;
      },
      {} as Record<WeightType, string>,
    )
);

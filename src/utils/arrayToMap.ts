const arrayToMap = <T = any>(array: T[], key: keyof T): Record<string, T> => (
  array.reduce(
    (map: Record<string, T>, item: T): Record<string, T> => {
      map[item[key] as unknown as string] = item;

      return map;
    },
    {},
  )
);

export default arrayToMap;

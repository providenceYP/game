type SomeData = Record<string, unknown>;

const snakelize = (key: string): string => {
  const separator = '_';
  const split = /(?=[A-Z])/;

  return key.split(split).join(separator).toLowerCase();
};

const camelize = (key: string): string => {
  const newKey = key.replace(/[-_\s]+(.)?/g, (match, ch) =>
    ch ? ch.toUpperCase() : '',
  );

  return newKey.substr(0, 1).toLowerCase() + newKey.substr(1);
};

const transformObjectToCase = (
  data: SomeData,
  getNewCase: (key: string) => string,
): SomeData =>
  Object.keys(data).reduce((acc: SomeData, key) => {
    const newKey = getNewCase(key);

    acc[newKey] = data[key];

    return acc;
  }, {});

export { snakelize, camelize, transformObjectToCase };

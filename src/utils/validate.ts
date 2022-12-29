export const validator = (value: string, regex: string) => {
  return value.match(regex);
};

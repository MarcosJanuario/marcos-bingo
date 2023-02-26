export const generateRandomId = (): string => {
  const array = new Uint32Array(2);
  window.crypto.getRandomValues(array);
  return `${array[0]}${array[1]}`;
};

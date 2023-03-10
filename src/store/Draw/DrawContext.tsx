import { createContext } from 'react';

const DrawContext = createContext({
  numbers: [],
  drawnNumbers: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  draw: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  reset: () => {}
});

export default DrawContext;

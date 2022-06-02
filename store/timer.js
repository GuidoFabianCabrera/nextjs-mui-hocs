import { createContext } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  console.log('hola2');

  return <TimerContext.Provider value={{}}>{children}</TimerContext.Provider>;
};

export { TimerProvider, TimerContext };

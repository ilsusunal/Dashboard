import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const OptionContext = createContext();

export const useOptionContext = () => useContext(OptionContext);

export const OptionProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useLocalStorage('selectedOption', 'Statistics');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <OptionContext.Provider value={{ selectedOption, handleOptionChange }}>
      {children}
    </OptionContext.Provider>
  );
};

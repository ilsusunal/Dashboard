import React, { createContext, useContext, useState } from 'react';

const OptionContext = createContext();

export const useOptionContext = () => useContext(OptionContext);

export const OptionProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('Statistics');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <OptionContext.Provider value={{ selectedOption, handleOptionChange }}>
      {children}
    </OptionContext.Provider>
  );
};

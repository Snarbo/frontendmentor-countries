import { useState, createContext, useContext } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'light');
  const [searchedCountry, setSearchedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <StateContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        searchedCountry,
        setSearchedCountry,
        selectedRegion,
        setSelectedRegion,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

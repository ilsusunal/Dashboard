import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [topEmployees, setTopEmployees] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    axios.get('https://demotrainiq.com/case/dashboard')
      .then(response => {
        setTopEmployees(response.data.data.top_employees);
        setTeams(response.data.data.teams);
        setSelectedTeam(response.data.data.teams[0]);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      })
      .finally(() => {
        console.log("Done.")
      });
  }, []);

  return (
    <DataContext.Provider value={{ topEmployees, teams, selectedTeam, setSelectedTeam }}>
      {children}
    </DataContext.Provider>
  );
};
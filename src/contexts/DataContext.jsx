import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CourseProvider } from './CourseContext';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [topEmployees, setTopEmployees] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [activity, setActivity] = useState(null);
  const [compData, setCompData] = useState(null);
  const [coursesInP, setCoursesInP] = useState([]);
  const [coursesUpcoming, setCoursesUpcoming] = useState([]);

  useEffect(() => {
    axios.get('https://demotrainiq.com/case/dashboard')
      .then(response => {
        setTopEmployees(response.data.data.top_employees);
        setTeams(response.data.data.teams);
        setSelectedTeam(response.data.data.teams[0]);
        setActivity(response.data.data.activity_hours);
        setCompData(response.data.data);
        setCoursesInP(response.data.data.in_progress_courses);
        setCoursesUpcoming(response.data.data.upcoming_courses);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      })
      .finally(() => {
        console.log("Done.")
      });
  }, []);

  return (
    <DataContext.Provider value={{ topEmployees, teams, selectedTeam, 
    setSelectedTeam, activity, setActivity,compData, setCompData, 
    coursesInP, coursesUpcoming}}>
      <CourseProvider>
        {children}
      </CourseProvider>
    </DataContext.Provider>
  );
};
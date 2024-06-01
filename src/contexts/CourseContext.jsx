import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CourseContext = createContext();

export const useCourseContext = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [status, setStatus] = useLocalStorage('courseStatus', 'in_progress');
  const [view, setView] = useLocalStorage('courseView', 'table');

  const handleCourseStatus = (courseStatus) => {
    setStatus(courseStatus);
  };

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <CourseContext.Provider value={{ status, setStatus, view, setView, handleCourseStatus, handleViewChange }}>
      {children}
    </CourseContext.Provider>
  );
};

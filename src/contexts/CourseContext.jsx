import React, { createContext, useContext, useState } from 'react';

const CourseContext = createContext();

export const useCourseContext = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [status, setStatus] = useState('in_progress');
  const [view, setView] = useState('table');

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

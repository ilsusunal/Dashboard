import React, {useState} from 'react';
import { useData } from '../contexts/DataContext';
import { useCourseContext } from '../contexts/CourseContext';

export function TableView(){
    const {coursesInP, coursesUpcoming} = useData();
    const { status, handleCourseStatus } = useCourseContext();

    const getFilteredCourses = () => {
      if (status === "in_progress") {
        return coursesInP;
      } else if (status === "upcoming") {
        return coursesUpcoming;
      }
      return [];
    };
  
    const filteredCourses = getFilteredCourses();
    
    const handleDueDateClick = (index) => {
     // calendar popup logic
    };

    return(
        <>
        <div className='mb-4 border-b-4 border-lavender-400'>
          <button
          className={`text-xs md:text-base py-1 px-2 rounded-t ${status === 'in_progress' ? 'bg-lavender-400 text-white font-bold' : 'text-pink-700 font-bold'}`}
          onClick={() => handleCourseStatus('in_progress')}>In Progress</button>
          <button
          className={`text-xs md:text-base py-1 px-2 rounded-t ${status === 'upcoming' ? 'bg-lavender-400 text-white font-bold' : 'text-pink-700 font-bold'}`}
          onClick={() => handleCourseStatus('upcoming')}>Upcoming</button>
        </div>
        <table className='table-auto p-6 '>
        <thead className=''>
          <tr>
            <th>Course</th>
            <th>Assigned</th>
            <th className='hidden md:table-cell'>Description</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course, index) => (
            <tr key={index}>
              <td className='font-medium'>{course.title}</td>
              <td>{course.assigned_to}</td>
              <td className='text-gray-500 hidden md:table-cell'>{course.description}</td>
              <td onClick={() => handleDueDateClick(index)}>{course.due_date}</td>
            </tr>
          ))}
        </tbody>
        </table>
        </>
    )
}
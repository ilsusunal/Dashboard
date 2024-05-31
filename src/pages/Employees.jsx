import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";

export default function Employees(){
    const {teams, setTeams} = useData();
    if (!teams) {
        return <div>Loading...</div>;
    }
    
    return(
        <>
        <table className='bg-white rounded-3xl p-4 space-x-1'>
        <thead className='p-6'>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Contact</th>
            <th>Description</th>
            <th>Due Date</th>
          </tr>
        </thead>
        {/*<tbody>
          {teams.employees.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.assigned_to}</td>
              <td onClick={() => setEditableIndex(index)}>{editableIndex === index ? (
                <select onChange={(e) => handleStatusChange(index, e.target.value)} value={course.status}>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Upcoming">Upcoming</option>
                </select>
              ) : (
                course.status
              )}</td>
              <td>{course.description}</td>
              <td onClick={() => handleDueDateClick(index)}>{course.due_date}</td>
            </tr>
          ))}
          {coursesUpcoming.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.assigned_to}</td>
              <td onClick={() => setEditableIndex(index)}>{editableIndex === index ? (
                <select onChange={(e) => handleStatusChange(index, e.target.value)} value={course.status}>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Upcoming">Upcoming</option>
                </select>
              ) : (
                course.status
              )}</td>
              <td>{course.description}</td>
              <td onClick={() => handleDueDateClick(index)}>{course.due_date}</td>
            </tr>
          ))}
        </tbody>*/}
        </table>
        </>
    )
}
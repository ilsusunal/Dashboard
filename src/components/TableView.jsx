import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";

export function TableView(){
    const {coursesInP, coursesUpcoming} = useData();
    const [editableIndex, setEditableIndex] = useState(null);

    const handleStatusChange = (index, newStatus) => {
        // status change logic here
      };
    
      const handleDueDateClick = (index) => {
        // calendar popup logic
      };

    return(
        <>
        <table className='bg-white rounded-3xl p-4 space-x-1'>
        <thead className='p-6'>
          <tr>
            <th>Course Title</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Description</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {coursesInP.map((course, index) => (
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
        </tbody>
        </table>
        </>
    )
}
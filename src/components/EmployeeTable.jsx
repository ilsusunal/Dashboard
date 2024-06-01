import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";

export function EmployeeTable(){
    const {teams, selectedTeam, setSelectedTeam} = useData();

    if (!teams) {
        return <div>Loading...</div>;
    }

    const handleTeamSelect = (team) => {
      setSelectedTeam(team);
    };
    return(
        <>
        <main className="p-6 bg-white grow rounded-3xl">
        <div className='flex justify-between items-center text-lavender-400 mb-4'>
           <h2 className="text-lavender-400 mb-4">Employee List</h2>
            <button className="px-3 py-1 border rounded-lg border-lavender-400"
                onClick={() => {}}>
                <i className="fa-solid fa-plus px-1 "/>
                Add
            </button> 
        </div>
        <section className="mb-4 border-b-4 border-lavender-400">
            <div className="flex justify-between gap-1">
                {teams.map((team, index) => (
                <button key={index}
                    className={`text-xs md:text-base py-1 px-2 rounded-t ${selectedTeam === team ? 'bg-lavender-400 text-white font-bold' : 'text-pink-700 font-bold'}`}
                    onClick={() => handleTeamSelect(team)}>
                {team.title}
                </button>
                ))}
            </div>
        </section>
        <table className='table-auto p-6 '>
        <thead className=''>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Email</th>
            <th>Score</th>
            <th>Lessons</th>
            <th className='hidden md:table-cell'>Skills</th>
          </tr>
        </thead>
        <tbody>
          {selectedTeam.employees.map((emp, index) => (
            <tr key={index}>
              <td className='font-medium'>{emp.name}</td>
              <td>{emp.title}</td>
              <td>{emp.email}</td>
              <td>{emp.current_score}</td>
              <td>{emp.lessons_taken}</td>
              <td className='text-gray-500 hidden md:table-cell'>{emp.skills_being_developed.map((skill, skillIndex) => (
                    <p key={skillIndex}>#{skill}</p>))}</td>
            </tr>
          ))}
        </tbody>
        </table>
        </main>
        </>
    )
}
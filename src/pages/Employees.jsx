import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";

export default function Employees(){
    const {teams, setTeams} = useData();
    if (!teams) {
        return <div>Loading...</div>;
    }
    
    return(
        <>
        <main className="p-6 bg-white grow rounded-3xl">
        <h2 className="text-lavender-400 mb-4">Team Leaderboard</h2>
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
            <th>Title</th>
            <th>Score</th>
            <th>Employees</th>
            <th className='hidden md:table-cell'>Description</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td className='font-medium'>{team.title}</td>
              <td>{team.overall_score}</td>
              <td>{team.total_employee_count}</td>
              <td className='text-gray-500 hidden md:table-cell'>{team.description}</td>
            </tr>
          ))}
        </tbody>
        </table>
        </main>
        </>
    )
}
import React from 'react';
import { useData } from "../contexts/DataContext";

export function LeaderBoard(){
    const { topEmployees, teams, selectedTeam, setSelectedTeam } = useData();

    const handleTeamSelect = (team) => {
        setSelectedTeam(team);
    };
    return(
        <>
        <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg">
        <h3 className="text-lg mb-6">Leaderboard</h3>
        <section className="grid grid-cols-3 gap-4 mb-6 border-b border-gray-200">
            {topEmployees.map((employee, index) => (
            <div key={index} className="col-span-1 text-center">
                <div className="text-lg font-bold">{index + 1}{index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'}</div>
                <div className="font-bold">{employee.name}</div>
            </div>
            ))}
        </section>
        <section className="mb-6">
            <div className="flex space-x-4">
                {teams.map((team, index) => (
                <button key={index}
                    className={`py-2 px-4 rounded ${selectedTeam === team ? 'bg-pink-700 text-white' : ''}`}
                    onClick={() => handleTeamSelect(team)}>
                {team.title}
                </button>
                ))}
            </div>
        </section>
        {selectedTeam && (
        <section>
            {selectedTeam.employees
            .slice()
            .sort((a, b) => b.current_score - a.current_score)
            .map((employee, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200">
                <div>
                    <div className="font-bold">{employee.name}</div>
                    <div className="text-sm text-gray-500">{employee.title}</div>
                </div>
                <div className="text-center">
                    <div className="font-bold">{employee.lessons_taken}</div>
                    <div className="text-sm text-gray-500">lessons taken</div>
                </div>
                <div className="text-center">
                    <div className="text-lg font-bold">{employee.current_score}</div>
                </div> 
              </div>
            ))}
        </section>
        )}
        </div>
        </>
    )
}
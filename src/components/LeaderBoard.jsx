import React from 'react';
import { useData } from "../contexts/DataContext";

export function LeaderBoard(){
    const { topEmployees, teams, selectedTeam, setSelectedTeam } = useData();

    const handleTeamSelect = (team) => {
        setSelectedTeam(team);
    };
    return(
        <>
        <div className="mx-auto p-6 h-full bg-white grow rounded-3xl">
            <h2 className="text-gray-500 mb-4">Leaderboard</h2>
            <section className="grid grid-cols-3 gap-4 mb-6 border-b border-gray-200 ">
                {topEmployees.map((employee, index) => (
                <div key={index} className="col-span-1 mb-4 border-l-8 pl-2">
                    <div className="text-sm ">{index + 1}{index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'}</div>
                    <div className="text-sm font-bold">{employee.name}</div>
                </div>
                ))}
            </section>
            <section className="mb-6 border-b border-lavender-400">
                <div className="flex justify-between gap-1">
                    {teams.map((team, index) => (
                    <button key={index}
                        className={`text-xs py-1 px-2 rounded-t ${selectedTeam === team ? 'bg-lavender-400 text-white' : ''}`}
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
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
                    <div>
                        <p className="text-sm font-bold">{employee.name}</p>
                        <p className="text-xs text-gray-500">{employee.title}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold">{employee.lessons_taken}</p>
                        <p className="text-xs text-gray-500">lessons taken</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-bold">{employee.current_score}</p>
                    </div> 
                </div>
                ))}
            </section>
            )}
        </div>
        </>
    )
}
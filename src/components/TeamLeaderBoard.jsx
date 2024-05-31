import React from 'react';
import { useData } from "../contexts/DataContext";

export function TeamLeaderBoard(){
    const { teams, selectedTeam, setSelectedTeam } = useData();

    const handleTeamSelect = (team) => {
        setSelectedTeam(team);
    };
    return(
        <>
        <div className="p-6 bg-white grow rounded-3xl">
            <h2 className="text-lavender-400 mb-4">Team Leaderboard</h2>
            <section className="mb-6 border-b border-lavender-400">
                <div className="flex justify-between gap-1">
                    {teams.map((team, index) => (
                    <button key={index}
                        className={`text-xs md:text-base py-1 px-2 rounded-t ${selectedTeam === team ? 'bg-lavender-400 text-white' : ''}`}
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
                <div key={index} className="grid grid-cols-4 py-2 border-b border-gray-200">
                    <div>
                        <p className="text-sm md:text-base font-bold">{employee.name}</p>
                        <p className="text-xs md:text-sm text-gray-500">{employee.title}</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold">{employee.lessons_taken}</p>
                        <p className="text-xs md:text-sm text-gray-500">lessons taken</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm md:text-base font-bold">{employee.current_score}</p>
                        <p className="text-xs md:text-sm text-gray-500">current score</p>
                    </div>
                    <div className="">
                        <p className="text-xs md:text-sm text-gray-500">
                        {employee.skills_being_developed.map((skill, index) => (<p key={index}>#{skill}</p>))}
                        </p>
                    </div> 
                </div>
                ))}
            </section>
            )}
        </div>
        </>
    )
}
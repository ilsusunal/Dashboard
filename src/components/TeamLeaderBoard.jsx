import React from 'react';
import { useData } from "../contexts/DataContext";

export function TeamLeaderBoard(){
    const { teams, selectedTeam, setSelectedTeam } = useData();

    const handleTeamSelect = (team) => {
        setSelectedTeam(team);
    };
    return(
        <>
        <div className="p-6 bg-white dark:bg-indigo-100 grow rounded-3xl">
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
            {selectedTeam && (
            <section>
            <div className="grid grid-cols-5 py-2 border-b-2 border-gray-200 dark:border-white font-bold  text-sm">
                <div className="">Ranking</div>
                <div className="">Employee</div>
                <div className="text-center ">Current Score</div>
                <div className="text-center ">Lessons Taken</div>
                <div className="text-end">Developed Skills</div>
            </div>
            {selectedTeam.employees
                .slice()
                .sort((a, b) => b.current_score - a.current_score)
                .map((employee, index) => (
                    <div key={index} className="grid grid-cols-5 py-2 border-b border-gray-200 dark:border-white">
                        <p className="text-sm font-bold text-yellow-500">{index + 1}.</p>
                        <div>
                            <p className="text-sm font-bold">{employee.name}</p>
                            <p className="text-xs md:text-sm text-gray-500">{employee.title}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-bold">{employee.current_score}</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold">{employee.lessons_taken}</p>
                        </div>
                        <div className="text-end">
                            <ul className="text-xs md:text-sm text-gray-500">
                                {employee.skills_being_developed.map((skill, skillIndex) => (
                                    <li key={skillIndex}>#{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
        </section>
            )}
        </div>
        </>
    )
}
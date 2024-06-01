import React from 'react';
import { useData } from '../contexts/DataContext';

export function TeamCards(){
    const { teams} = useData();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return(
        <>
        <main className="p-6 bg-white grow rounded-3xl">
            <h2 className="text-lavender-400 mb-4">Team Overview</h2>
            <section className=''>
                {teams.sort((a, b) => b.current_score - a.current_score)
                .map((team, index) => (
                <div key={index} className='w-auto h-40 m-4 flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front p-4'>
                        <p className='border-b-2 mb-2 font-medium'>{team.title}</p>
                        <div className='flex justify-between'>
                            <p className='text-gray-500 text-sm'>{team.overall_score}</p>
                            <p>{team.total_employee_count}</p>
                        </div>
                    </div>
                    <div className='flip-card-back p-4'>
                        <p className=''>Team: {team.employees.map((emp, empIndex) => (
                            <p key={empIndex}>#{emp.name}</p>))}</p>
                    </div>
                </div>
                </div>
                ))}
            </section>
        </main>
        </>
    )
}
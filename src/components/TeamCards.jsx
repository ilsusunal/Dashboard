import React from 'react';
import { useData } from '../contexts/DataContext';

export function TeamCards(){
    const { teams} = useData();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return(
        <>
        <main className="p-6 bg-white dark:bg-indigo-100 grow rounded-3xl">
            <h2 className="text-lavender-400 mb-4">Team Overview</h2>
            <section className=''>
                {teams.sort((a, b) => b.current_score - a.current_score)
                .map((team, index) => (
                <div key={index} className='w-auto h-32 m-2 flip-card'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front p-4'>
                        <p className='border-b-2 dark:border-white mb-2 font-medium'>{team.title}</p>
                        <span className='text-gray-500 grid grid-cols-2'>
                            {team.employees.map((emp, empIndex) => (
                            <p key={empIndex}>#{emp.name}</p>))}
                        </span>
                    </div>
                    <div className='flip-card-back p-4 m-auto'>
                        <p className=' text-base'>Overall Score: {team.overall_score}</p>
                        <p>Total Employees: {team.total_employee_count}</p>
                    </div>
                </div>
                </div>
                ))}
            </section>
        </main>
        </>
    )
}
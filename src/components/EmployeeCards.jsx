import React from 'react';
import { useData } from '../contexts/DataContext';

export function EmployeeCards(){
    const { teams} = useData();

    return(
        <>
        <main className="p-6 bg-white grow rounded-3xl">
            <h2 className="text-lavender-400 mb-4">Employee Overview</h2>
            <section className=''>
                {teams.sort((a, b) => b.current_score - a.current_score)
                .map((team, index) => (
                <div key={index}
                className='p-4 m-2 border-2 border-pink-500 rounded-lg'>
                    <p className='border-b-2 mb-2 font-medium'>{team.title}</p>
                    <div className='flex justify-between'>
                       <p className='text-gray-500 text-sm'>{team.overall_score}</p>
                        <p>{team.total_employee_count}</p> 
                    </div>
                </div>
                ))}
            </section>
        </main>
        </>
    )
}
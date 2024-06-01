import React from 'react';
import { useData } from '../contexts/DataContext';

export function EmployeeCards(){
    const {teams} = useData();
    if (!teams) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <main className="p-6 bg-white dark:bg-indigo-100 grow rounded-3xl">
            <h2 className="text-lavender-400 mb-4">Employee Overview</h2>
            <section className='grid grid-cols-2 md:grid-cols-3'>
                {teams.map((team, teamIndex) => (
                    team.employees.map((emp, empIndex) => (
                    <div key={`${teamIndex}-${empIndex}`} className='w-auto h-24 m-1 flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front p-4 flex flex-col justify-center items-center gap-2'>
                                {empIndex % 3 === 0 ? <i className="fa-solid fa-user-tie text-yellow-500 "/> :
                                 empIndex % 3 === 1 ? <i className="fa-solid fa-user-astronaut text-pink-500"/> : 
                                 <i className="fa-solid fa-user-ninja text-lavender-200"/>}
                                <p className='mb-2 text-xs md:font-sm text-center'>{emp.name}</p>
                            </div>
                            <div className='flip-card-back p-4 '>
                                <p className='text-xs text-center'>{emp.title}</p>
                            </div>
                        </div>
                    </div>
                ))
                ))}
            </section>
        </main>
        </>
    )
}
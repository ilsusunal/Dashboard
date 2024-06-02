import React from 'react';
import { useData } from "../contexts/DataContext";

export function TopEmployees(){
    const { topEmployees } = useData();

    return(
        <>
        <div className='flex'>
        <div className="grow bg-white dark:bg-indigo-100 rounded-3xl p-4">
            <h2 className="text-lavender-400 mb-4">Top Employees</h2>
            <section className="grid grid-cols-3 gap-4">
                {topEmployees.map((employee, index) => (
                <div key={index} className="col-span-1 border-l-8 pl-2 dark:border-white">
                    <div className="text-sm ">{index + 1}{index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'}</div>
                    <div className="text-sm font-bold">{employee.name}</div>
                </div>
                ))}
            </section>
        </div></div>
        </>
    )
}
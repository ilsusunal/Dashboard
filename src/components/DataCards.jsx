import React from 'react';
import { useData } from "../contexts/DataContext";

export function DataCards(){
    const { compData } = useData();
    if (!compData) {
        return <div>Loading...</div>;
    }
    return(
        <>
        <div className='flex items-center gap-4'>
            <section className='grow bg-white rounded-3xl flex flex-col items-center px-4 py-3'>
                <p className="text-center text-xs md:text-sm text-gray-500">Avg Score</p>
                <p className="text-sm md:text-lg font-bold">{compData.average_employee_score}</p>
            </section>
            <section className='grow bg-white rounded-3xl flex flex-col items-center px-4 py-3'>
                <p className="text-center text-xs md:text-sm text-gray-500">Completed Courses</p>
                <p className="text-sm md:text-lg font-bold">{compData.total_completed_courses}</p>
            </section>
            <section className='grow bg-white rounded-3xl flex flex-col items-center px-4 py-3 '>
                <p className="text-center text-xs md:text-sm text-gray-500">Total Employees</p>
                <p className="text-sm md:text-lg font-bold">{compData.total_employees}</p>
            </section>
        </div>
        </>
    )
}
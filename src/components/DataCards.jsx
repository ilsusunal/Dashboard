import React from 'react';
import { useData } from "../contexts/DataContext";

export function DataCards(){
    const { compData } = useData();
    if (!compData) {
        return <div>Loading...</div>;
    }
    return(
        <>
        <div className='flex'>
            <section className='bg-white rounded-3xl'>
                <p className="text-xs text-gray-500">Avg Score</p>
                <p className="text-sm font-bold">{compData.average_employee_score}</p>
            </section>
            <section className='bg-white rounded-3xl'>
                <p className="text-xs text-gray-500">Completed Courses</p>
                <p className="text-sm font-bold">{compData.total_completed_courses}</p>
            </section>
            <section className='bg-white rounded-3xl'>
                <p className="text-xs text-gray-500">Total Employees</p>
                <p className="text-sm font-bold">{compData.total_employees}</p>
            </section>
        </div>
        </>
    )
}
import React from 'react';
import { useData } from '../contexts/DataContext';

export function CourseCards(){
    const {coursesInP, coursesUpcoming} = useData();

    return(
        <>
        <main className="p-6 bg-white grow rounded-3xl">
            <h2 className="text-lavender-400 mb-4">Course Overview</h2>
            <section className='sm:grid sm:grid-cols-2'>
                {coursesInP.map((course, index) => (
                <div key={index}
                className='p-4 m-2 border-2 border-yellow-500 rounded-lg'>
                    <p className='border-b-2 mb-2 font-medium'>{course.title}</p>
                    <p className='text-gray-500 text-sm'>{course.description}</p>
                </div>
                ))}
                {coursesUpcoming.map((course, index) => (
                <div key={index}
                className='p-4 m-2  border-2 border-pink-700 rounded-lg'>
                    <p className='border-b-2 mb-2 font-medium'>{course.title}</p>
                    <p className='text-gray-500 text-sm'>{course.description}</p>
                </div>
                ))}
            </section>
        </main>
        </>
    )
}
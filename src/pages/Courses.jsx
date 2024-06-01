import React from 'react';
import { useCourseContext } from '../contexts/CourseContext';
import { CourseTable } from "../components/CourseTable";
import { CourseKanban } from "../components/CourseKanban";
import { Header } from "../components/Header";
import { CourseCards } from '../components/CourseCards';

export default function Courses(){
    const { view, handleViewChange } = useCourseContext();

    return(
        <>
        <main className=' md:grid md:grid-cols-3 gap-4'>
            <section className="mb-4 col-span-2 flex flex-col gap-4 md:mr-4">
                <Header/>
                <div className='p-6 bg-white dark:bg-indigo-100 grow rounded-3xl'>
                <div className='flex justify-between items-center text-lavender-400 mb-4'>
                    <h2 className="">Courses</h2>
                    <div className=''>
                        <button className={`px-1 ${view === 'table' ? 'border-b-2 border-lavender-400 dark:border-white  text-xs md:text-base' : 'text-xs md:text-base'}`}
                            onClick={() => handleViewChange('table')}>
                            <i className="fa-solid fa-table-list px-1 "/>
                            Table
                        </button>
                        <button className={`px-1 ${view === 'kanban' ? 'border-b-2 border-lavender-400 dark:border-white text-xs md:text-base' : 'text-xs md:text-base'}`}
                            onClick={() => handleViewChange('kanban')}>
                            <i className="fa-solid fa-chart-simple px-1"/>
                            Kanban
                        </button>
                    </div>
                </div>
                    {view === 'table' ? <CourseTable /> : <CourseKanban/>}
                </div>
            </section>
            <section>
                <CourseCards/>
            </section>
        </main>
        </>
    )
}
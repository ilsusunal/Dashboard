import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";
import { useCourseContext } from '../contexts/CourseContext';
import { TableView } from "../components/TableView";
import { KanbanView } from "../components/KanbanView";
import { Header } from "../components/Header";
import { CourseCards } from '../components/CourseCards';

export default function Courses(){
    const { view, handleViewChange } = useCourseContext();

    return(
        <>
        <main className=' md:grid md:grid-cols-3 mt-4 gap-4'>
            <section className="mb-4 col-span-2 flex flex-col gap-4 md:mr-4">
                <Header/>
                <div className='p-6 bg-white grow rounded-3xl'>
                <div className='flex justify-between items-center text-lavender-400 mb-4'>
                    <h2 className="">Courses</h2>
                    <div className=''>
                        <button className={`px-1 ${view === 'table' ? 'border-b border-lavender-400 ' : ''}`}
                            onClick={() => handleViewChange('table')}>
                            <i className="fa-solid fa-table-list px-1 "/>
                            Table
                        </button>
                        <button className={`px-1 ${view === 'kanban' ? 'border-b border-lavender-400 ' : ''}`}
                            onClick={() => handleViewChange('kanban')}>
                            <i className="fa-solid fa-chart-simple px-1"/>
                            Kanban
                        </button> 
                    </div>
                </div>
                    {view === 'table' ? <TableView /> : <KanbanView/>}
                </div>
            </section>
            <section>
                <CourseCards/>
            </section>
        </main>
        </>
    )
}
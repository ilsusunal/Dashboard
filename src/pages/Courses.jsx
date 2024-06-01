import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";
import { TableView } from "../components/TableView";
import { KanbanView } from "../components/KanbanView";
import { Header } from "../components/Header";
import { CourseCards } from '../components/CourseCards';

export default function Courses(){
    const [view, setView] = useState('table');
    const {coursesInP, coursesUpcoming} = useData();
    const [status, setStatus] = useState("in_progress")

    const handleCourseStatus = (courseStatus) => {
        setStatus(courseStatus);
    }

    const getFilteredCourses = () => {
        if (status === "in_progress") {
          return coursesInP;
        } else if (status === "upcoming") {
          return coursesUpcoming;
        }
        return [];
      };
    
      const filteredCourses = getFilteredCourses();

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
                        onClick={() => setView('table')}><i className="fa-solid fa-table-list px-1 "/>Table</button>
                        <button className={`px-1 ${view === 'kanban' ? 'border-b border-lavender-400 ' : ''}`}
                        onClick={() => setView('kanban')}><i class="fa-solid fa-chart-simple px-1"/>Kanban</button> 
                    </div>
                </div>
                <div className='mb-4 border-b-4 border-lavender-400'>
                    <button
                    className={`text-xs md:text-base py-1 px-2 rounded-t ${status === 'in_progress' ? 'bg-lavender-400 text-white font-bold' : 'text-pink-700 font-bold'}`}
                    onClick={() => handleCourseStatus('in_progress')}>In Progress</button>
                    <button
                    className={`text-xs md:text-base py-1 px-2 rounded-t ${status === 'upcoming' ? 'bg-lavender-400 text-white font-bold' : 'text-pink-700 font-bold'}`}
                    onClick={() => handleCourseStatus('upcoming')}>Upcoming</button>
                </div>
                    {view === 'table' ? <TableView courses={filteredCourses} /> : <KanbanView/>}
                </div>
            </section>
            <section>
                <CourseCards/>
            </section>
        </main>
        </>
    )
}
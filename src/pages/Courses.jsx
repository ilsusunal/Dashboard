import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";
import { TableView } from "../components/TableView";
import { KanbanView } from "../components/KanbanView";
import { Header } from "../components/Header";

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
                <div className='flex'>
                    <button onClick={() => setView('table')}>Table View</button>
                    <button onClick={() => setView('kanban')}>Kanban View</button>
                    <Header/>
                </div>
                <div className='p-6 bg-white grow rounded-3xl'>
                <h2 className="text-lavender-400 mb-4">Team Leaderboard</h2>
                <div className='mb-4 border-b-4 border-lavender-400'>
                    <button
                    className={`text-xs md:text-base py-1 px-2 rounded-t ${status === 'in_progress' ? 'bg-lavender-400 text-white font-bold' : 'text-pink-700 font-bold'}`}
                    onClick={() => handleCourseStatus('in_progress')}>In Progress</button>
                    <button
                    className={`text-xs md:text-base py-1 px-2 rounded-t ${status === 'upcoming' ? 'bg-lavender-400 text-white font-bold' : 'text-pink-700 font-bold'}`}
                    onClick={() => handleCourseStatus('upcoming')}>Upcoming</button>
                </div>
                    {view === 'table' ? <TableView courses={filteredCourses} /> : <KanbanView courses={filteredCourses} />}
                </div>
            </section>
            <section>
                CARDS
            </section>
        </main>
        </>
    )
}
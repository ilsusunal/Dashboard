import React from 'react';
import { useData } from "../contexts/DataContext";
import { Calendar } from "../components/Calender";

export default function Courses(){
    const { compData } = useData();

    if (!compData) {
        return <div>Loading...</div>;
    }
    return(
        <>
        <div className="md:flex">
            <Calendar events={compData.in_progress_courses} />
        </div>
        </>
    )
}
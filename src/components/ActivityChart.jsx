import React from 'react';
import { useData } from "../contexts/DataContext";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

export function ActivityChart(){
    const {activity} = useData();

    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return(
        <>
        <div className='bg-white dark:bg-indigo-100 rounded-3xl text-xs p-6'>
        <h2 className="text-lavender-400 mb-4">Activity Hours</h2>
        <ResponsiveContainer width="100%" height={260}>
        <LineChart data={activity} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={formatDate} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="hours" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="lessons_taken" stroke="#ffc658" />
        </LineChart>
        </ResponsiveContainer>
        </div>
        </>
    )
}
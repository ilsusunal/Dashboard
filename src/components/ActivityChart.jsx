import React from 'react';
import { useData } from "../contexts/DataContext";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

export function ActivityChart(){
    const {activity, setActivity} = useData();

    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return(
        <>
        <div className='bg-white rounded-3xl text-xs'>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart data={activity} margin={{top: 20, right: 30, left: 20, bottom: 5,}}>
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
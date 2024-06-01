import React from 'react';
import { useData } from "../contexts/DataContext";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer  } from 'recharts';

const COLORS = ['#2e1065', '#4b49ac', '#eab308', '#be185d', '#818cf8', '#a78bfa'];

export function SkillPieCharts(){
    const { compData } = useData();

    if (!compData) {
        return <div>Loading...</div>;
    }

    const skillsInDevelopment = compData.skills_in_development;
    const topSkills = compData.top_skills;

    const renderCustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { skill, employees } = payload[0].payload;
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${skill} : ${employees}`}</p>
                </div>
            );
        }
        return null;
    };
    return (
        <>
        <div className="gap-4 pt-4 h-screen flex flex-col">
            <div className='bg-white dark:bg-indigo-100 flex-grow rounded-3xl p-4 w-full mb-4 flex flex-col'>
                <h2 className="text-lavender-400">Skills in Development</h2>
                <div className="flex-grow"><ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        dataKey="employees"
                        isAnimationActive={true}
                        data={skillsInDevelopment}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={1}
                    >
                        {
                        skillsInDevelopment.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip content={renderCustomTooltip}/>
                </PieChart>
                </ResponsiveContainer></div>
            </div>
            <div className='bg-white dark:bg-indigo-100 flex-grow rounded-3xl p-4 w-full mb-4 flex flex-col'>
                <h2 className="text-lavender-400">Top Skills</h2>
                <div className="flex-grow"><ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        dataKey="employees"
                        isAnimationActive={true}
                        data={topSkills}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={1}
                    >
                        {
                        topSkills.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip content={renderCustomTooltip}/>
                </PieChart>
                </ResponsiveContainer></div>
            </div>
        </div>
        </>
    );
};

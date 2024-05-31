import React from 'react';
import { useData } from "../contexts/DataContext";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer  } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

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
        <div className="md:flex justify-around space-x-4">
            <div className='bg-white rounded-3xl'>
                <h3 className="text-sm text-gray-500 p-4">Skills in Development</h3>
                <ResponsiveContainer width={300} height={300} aspect={1}>
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
                </ResponsiveContainer>
            </div>
            <div className='bg-white rounded-3xl'>
                <h3 className="text-sm text-gray-500 p-4">Top Skills</h3>
                <ResponsiveContainer width={300} height={300} aspect={1}>
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
                </ResponsiveContainer>
            </div>
        </div>
        </>
    );
};

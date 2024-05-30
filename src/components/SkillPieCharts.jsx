import React from 'react';
import { useData } from "../contexts/DataContext";
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export function SkillPieCharts(){
    const { compData } = useData();

    if (!compData) {
        return <div>Loading...</div>;
    }

    const skillsInDevelopment = compData.skills_in_development;
    const topSkills = compData.top_skills;

    const renderCustomLabel = ({cx,cy, midAngle,innerRadius,outerRadius,value,index,}) => {
        const RADIAN = Math.PI / 180;
        const radius = 25 + innerRadius + (outerRadius - innerRadius);
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
        return (
            <text x={x} y={y} fill="#8884d8" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
                {skillsInDevelopment[index].skill}
            </text>
        );
    };
    return (
        <>
        <div className="flex justify-around">
            <div className='bg-white rounded-3xl'>
                <h3>Skills in Development</h3>
                <PieChart width={Math.min(400, window.innerWidth / 3)} height={400}>
                    <Pie
                        dataKey="employees"
                        isAnimationActive={true}
                        data={skillsInDevelopment}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        label={renderCustomLabel}
                        paddingAngle={1}
                    >
                        {
                            skillsInDevelopment.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
            <div className='bg-white rounded-3xl'>
                <h3>Top Skills</h3>
                <PieChart width={Math.min(400, window.innerWidth / 3)} height={400}>
                    <Pie
                        dataKey="employees"
                        isAnimationActive={true}
                        data={topSkills}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                        paddingAngle={1}
                    >
                        {
                            topSkills.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
        </>
    );
};

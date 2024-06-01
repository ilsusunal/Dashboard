import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";

export default function TeamTable(){
    const { teams} = useData();
    const [expandedRows, setExpandedRows] = useState({}); // Ensure this state is properly defined

    const handleToggle = (index) => {
        setExpandedRows(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const getShortDescription = (description) => {
        const maxLength = 50;
        if (description.length > maxLength) {
            return capitalizeFirstLetter(description.substring(0, maxLength)) + "...";
        }
        return capitalizeFirstLetter(description);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (!teams) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <main className="p-6 bg-white grow rounded-3xl">
        <div className='flex justify-between items-center text-lavender-400 mb-4'>
           <h2 className="text-lavender-400 mb-4">Team List</h2>
            <button className="px-3 py-1  border rounded-lg border-lavender-400"
                onClick={() => {}}>
                <i className="fa-solid fa-plus px-1 "/>
                Add
            </button> 
        </div>
        <table className='table-auto p-6 '>
        <thead className=''>
          <tr>
            <th>Title</th>
            <th>Score</th>
            <th>Employees</th>
            <th className='hidden md:table-cell'>Description</th>
          </tr>
        </thead>
        <tbody>
        {teams.sort((a, b) => b.current_score - a.current_score)
            .map((team, index) => (
            <React.Fragment key={index}>
                <tr onClick={() => handleToggle(index)} className="cursor-pointer">
                    <td className='font-medium'>{team.title}</td>
                    <td>{team.overall_score}</td>
                    <td>{team.total_employee_count}</td>
                    <td className='text-gray-500'>
                        {expandedRows[index] ? capitalizeFirstLetter(team.description) : getShortDescription(team.description)}
                        {!expandedRows[index] && team.description.length > 50 && (
                        <span className="text-yellow-500"> see more</span>
                        )}
                    </td>
                </tr>
            </React.Fragment>
        ))}
        </tbody>
        </table>
        </main>
        
        </>
    )
}
import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";

export default function TeamTable(){
    const { teams} = useData();
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getShortDescription = (description) => {
        const maxLength = 120;
        if (description.length > maxLength) {
            return capitalizeFirstLetter(description.substring(0, maxLength)) + "...";
        }
        return capitalizeFirstLetter(description);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const handleSeeMore = (description) => {
        setModalContent(capitalizeFirstLetter(description));
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    if (!teams) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <main className="p-6 bg-white dark:bg-indigo-100 grow rounded-3xl">
            <div className='flex justify-between items-center text-lavender-400 mb-4'>
                <h2 className="text-lavender-400 ">Team List</h2>
                <button className="px-2 py-1 text-xs md:text-base md:px-3 md:py-1 border rounded-lg border-lavender-400  dark:border-white dark:border-2"
                    onClick={() => {}}>
                    <i className="fa-solid fa-plus px-1 " />
                    Add
                </button>
            </div>
            <table className='table-auto p-6'>
                <thead className=''>
                    <tr>
                        <th>Title</th>
                        <th>Score</th>
                        <th className='hidden md:table-cell'>Description</th>
                    </tr>
                </thead>
                <tbody>
                {teams.sort((a, b) => b.current_score - a.current_score)
                    .map((team, index) => (
                    <React.Fragment key={index}>
                        <tr className="cursor-pointer">
                            <td className='font-medium'>{team.title}</td>
                            <td>{team.overall_score}</td>
                            <td className='text-gray-500'>
                                {getShortDescription(team.description)}
                                {team.description.length > 120 && (
                                <span className="text-yellow-500 cursor-pointer" 
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    handleSeeMore(team.description);
                                    }}> see more</span>)}
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
                </tbody>
                </table>
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-indigo-100 500 p-6 rounded-lg max-w-sm w-full mx-4">
                        <div className='flex justify-between items-center mb-4'>
                           <h3 className="text-lg font-semibold">Description</h3> 
                           <button 
                            className="px-4 py-2 bg-yellow-400 text-white rounded-full"
                            onClick={closeModal}
                        ><i className="fa-solid fa-xmark"/></button>
                        </div>
                        <p>{modalContent}</p>
                        
                    </div>
                </div>
            )}
        </>
    )
}
import React, {useState, useEffect} from 'react';
import { useData } from "../contexts/DataContext";
import { DescriptionModal } from '../modal/DescriptionModal';
import { TeamModal } from '../modal/TeamModal';
import { EmployeeModal } from '../modal/EmployeeModal';
import { sortByTitle } from '../utils/Sort';

export default function TeamTable(){
    const { teams } = useData();

    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
    const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);

    const [filteredTeam, setFilteredTeam] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        setFilteredTeam(sortTeams(teams));
      }, [teams]);
      
    const sortTeams = (teamsData) => {
        return sortByTitle(teamsData, sortOrder);
    };

    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setFilteredTeam(sortTeams(filteredTeam));
    };

    const getShortDescription = (description) => {
        const maxLength = 60;
        if (description.length > maxLength) {
            return capitalizeFirstLetter(description.substring(0, maxLength)) + "...";
        }
        return capitalizeFirstLetter(description);
    };

    const capitalizeFirstLetter = (string) => { return string.charAt(0).toUpperCase() + string.slice(1);};

    const handleSeeMore = (description) => {
        setModalContent(capitalizeFirstLetter(description));
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    const handleAddTeam = () => {setIsTeamModalOpen(true); };

    const closeTeamModal = () => { setIsTeamModalOpen(false);};

    const handleTeamSubmit = (data) => {
        console.log("Submitted team data:", data);
        //post request here 
    };

    const handleAddEmployee = () => {setIsEmployeeModalOpen(true);};

    const closeEmployeeModal = () => {setIsEmployeeModalOpen(false);};

    if (!teams) {
        return <div>Loading...</div>;
    }

    return(
        <>
        <main className="grow p-6 bg-white dark:bg-indigo-100 rounded-3xl">
            <div className='flex justify-between items-center text-lavender-400 mb-4'>
                <h2 className="text-lavender-400 ">Team List</h2>
                <div >
                    <button className="mr-1 md:mr-4 px-2 py-1 text-xs md:text-base md:px-3 md:py-1 border-2 rounded-lg border-lavender-400  dark:border-white dark:border-2"
                        onClick={() => {handleAddTeam()}}>
                        <i className="fa-solid fa-plus px-1 " />
                        Team
                    </button>
                    <button className="px-2 py-1 text-xs md:text-base md:px-3 md:py-1 border-2 rounded-lg border-lavender-400  dark:border-white dark:border-2"
                        onClick={() => {handleAddEmployee()}}>
                        <i className="fa-solid fa-plus px-1 " />
                        Member
                    </button>  
                </div>
            </div>
            <table className='grow'>
                <thead className=''>
                    <tr>
                        <th onClick={handleSort} className="cursor-pointer flex items-center">
                            Team
                            <i className={`fa-solid ${sortOrder === 'asc' ? 'fa-arrow-down' : 'fa-arrow-up'} ml-2`}/>
                        </th>
                        <th>Score</th>
                        <th className='hidden md:table-cell'>Employee</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {teams.sort((a, b) => b.current_score - a.current_score)
                    .map((team, index) => (
                    <React.Fragment key={index}>
                        <tr className="cursor-pointer">
                            <td className='font-medium'>{team.title}</td>
                            <td>{team.overall_score}</td>
                            <td className='hidden md:table-cell text-center'>{team.total_employee_count}</td>
                            <td className='text-gray-500'>
                                {getShortDescription(team.description)}
                                {team.description.length > 60 && (
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
            <DescriptionModal
                isOpen={isModalOpen}
                onClose={closeModal}
                content={modalContent}
            />
            <TeamModal
                isOpen={isTeamModalOpen}
                onClose={closeTeamModal}
                onSubmit={handleTeamSubmit}
            />
            <EmployeeModal
                isOpen={isEmployeeModalOpen}
                onClose={closeEmployeeModal}
                onSubmit={handleAddEmployee}
            />
        </>
    )
}
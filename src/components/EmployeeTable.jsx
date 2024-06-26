import React, {useState, useEffect} from 'react';
import { useData } from "../contexts/DataContext";
import { EmployeeModal } from '../modal/EmployeeModal';
import { sortByFirstName } from '../utils/Sort';

export function EmployeeTable(){
  const {teams, selectedTeam, setSelectedTeam} = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredEmp, setFilteredEmp] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    if (selectedTeam && selectedTeam.employees) {
      setFilteredEmp([...selectedTeam.employees]);
    }
  }, [teams, selectedTeam]);;

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };
    
  const handleAddEmployee = (formData) => {
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    //ideally I will send a post request here 
  };
  
  const handleSort = () => {
    const sortedData = sortByFirstName(filteredEmp, sortOrder);
    setFilteredEmp(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  
  if (!teams || !selectedTeam) {
    return <div>Loading...</div>;
  }

  return(
  <>
  <main className="p-6 bg-white dark:bg-indigo-100 grow rounded-3xl">
    <div className='flex justify-between items-center text-lavender-400 mb-4'>
      <h2 className="text-lavender-400">Employee List</h2>
      <button className="px-2 py-1 text-xs md:text-base md:px-3 md:py-1 border-2 rounded-lg border-lavender-400 dark:border-white"
        onClick={() => setIsModalOpen(true)}>
        <i className="fa-solid fa-plus px-1 "/>
           Add
      </button> 
    </div>
    <section className="mb-4 border-b-4 border-lavender-400">
      <div className="flex justify-between gap-1">
        {teams.map((team, index) => (
        <button key={index}
          className={`text-xs md:text-base py-1 px-2 rounded-t ${selectedTeam === team ? 'bg-lavender-400 text-white font-bold' : 'text-pink-700 font-bold'}`}
          onClick={() => handleTeamSelect(team)}>
          {team.title}
        </button>
        ))}
      </div>
    </section>
    <table className='table-auto p-6 '>
      <thead className=''>
        <tr>
          <th onClick={handleSort} className="cursor-pointer flex items-center">
            Employee
            <i className={`fa-solid ${sortOrder === 'asc' ? 'fa-arrow-down' : 'fa-arrow-up'} ml-2`}/>
          </th>
          <th>Title</th>
          <th className="hidden md:table-cell">Email</th>
          <th>Score</th>
          <th className="hidden md:table-cell">Lessons</th>
          <th className='hidden md:table-cell'>Skills</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmp.map((emp, index) => (
          <tr key={index}>
            <td className='font-medium'>{emp.name}</td>
            <td>{emp.title}</td>
            <td className="hidden md:table-cell">{emp.email}</td>
            <td className='text-center'>{emp.current_score}</td>
            <td className="hidden md:table-cell text-center">{emp.lessons_taken}</td>
            <td className='text-gray-500 hidden md:table-cell'>{emp.skills_being_developed.map((skill, skillIndex) => (
              <p key={skillIndex}>#{skill}</p>))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
  <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddEmployee}
      />
  </>
  )
}
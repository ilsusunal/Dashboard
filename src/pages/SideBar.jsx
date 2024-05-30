import { useOptionContext } from '../contexts/OptionContext';

export default function SideBar(){
    const { selectedOption, handleOptionChange } = useOptionContext();

    return(
        <>
        <main className="md:my-12 md:ml-16 md:min-w-[200px] text-white">
            <h1 className="mb-16">SomeCompany</h1>
            <ul className="space-y-8">
                {['Statistics', 'Teams', 'Employees', 'Courses'].map((option) => (
                <li key={option} className={`${ selectedOption === option ? 'bg-indigo-900 rounded-xl min-w-max' : ''}`}>
                <i className={`fa-solid ${option === 'Statistics' ? 'fa-chart-simple' : option === 'Teams' ? 'fa-people-group' : option === 'Employees' ? 'fa-user' : 'fa-book'}`}></i>
                <button className='ml-4' onClick={() => handleOptionChange(option)}>{option}</button>
          </li>
        ))}
            </ul>
        </main>
        
        </>
    )
}
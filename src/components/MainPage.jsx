import { useOptionContext } from '../contexts/OptionContext';
import Statistics from './Statistics';
import Teams from './Teams';
import Employees from './Employees';
import Courses from './Courses';

export default function MainPage(){
    const { selectedOption } = useOptionContext();
    
    return(
        <>
        <div className="bg-white md:rounded-3xl md:m-4 md:w-full md:ml-16 p-8">
            <header className='md:flex md:justify-between md:my-4'>
                <h1>Dashboard</h1>
                <div className='md:space-x-4'>
                    <button>DarkMode</button>
                    <button>Search</button>
                </div>
            </header>
            <main>
               {selectedOption === 'Statistics' && <p><Statistics/></p>}
                {selectedOption === 'Teams' && <Teams />}
                {selectedOption === 'Employees' && <p><Employees/></p>}
                {selectedOption === 'Courses' && <p><Courses/></p>} 
            </main>
        </div>
        </>
    )
}
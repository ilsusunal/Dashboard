import { useOptionContext } from '../contexts/OptionContext';
import Statistics from './Statistics';
import Teams from './Teams';
import Employees from './Employees';
import Courses from './Courses';

export default function MainPage(){
    const { selectedOption } = useOptionContext();
    
    return(
        <>
        <main className="bg-white md:rounded-3xl md:m-4 md:w-full md:ml-16">
            {selectedOption === 'Statistics' && <p><Statistics/></p>}
            {selectedOption === 'Teams' && <Teams />}
            {selectedOption === 'Employees' && <p><Employees/></p>}
            {selectedOption === 'Courses' && <p><Courses/></p>}
        </main>
        </>
    )
}
import { useOptionContext } from '../contexts/OptionContext';
import Statistics from './Statistics';
import Teams from './Teams';
import Employees from './Employees';
import Courses from './Courses';

export default function MainPage(){
    const { selectedOption } = useOptionContext();
    
    return(
        <>
        <div className="dark:bg-indigo-950 bg-indigo-50 md:rounded-3xl md:m-4 md:w-full py-2 px-4 md:py-4 md:px-8">
                {selectedOption === 'Statistics' && <Statistics/>}
                {selectedOption === 'Courses' && <Courses/>}  
                {selectedOption === 'Teams' && <Teams />}
                {selectedOption === 'Employees' && <Employees/>}
                
        </div>
        </>
    )
}
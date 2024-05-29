import { useOptionContext } from '../contexts/OptionContext';

export default function SideBar(){
    const { handleOptionChange } = useOptionContext();

    return(
        <>
        <main className="md:m-16 text-white">
            <h1 className="text-xl font-bold mb-16">SomeCompany</h1>
            <ul className="space-y-6">
                <li><button onClick={() => handleOptionChange('Statistics')}>Statistics</button></li>
                <li><button onClick={() => handleOptionChange('Teams')}>Teams</button></li>
                <li><button onClick={() => handleOptionChange('Employees')}>Employees</button></li>
                <li><button onClick={() => handleOptionChange('Courses')}>Courses</button></li>
            </ul>
        </main>
        
        </>
    )
}
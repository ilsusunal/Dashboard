import React, { useState } from 'react';
import { useOptionContext } from '../contexts/OptionContext';

export default function SideBar(){
    const { selectedOption, handleOptionChange } = useOptionContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <>
        <header className="p-4 flex justify-between items-center  text-white md:hidden">
            <h1>SomeCompany</h1>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
        <main className={`my-2 md:my-12 ml-4 md:ml-16 md:min-w-[200px] text-white ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <h1 className="mb-16 hidden md:block">SomeCompany</h1>
            <ul className="flex justify-around items-center md:block md:space-y-8">
                {['Statistics', 'Teams', 'Employees', 'Courses'].map((option) => (
                    <li key={option} className={`${selectedOption === option ? 'bg-indigo-900 dark:bg-neutral-700 rounded-t md:rounded-md text-xs md:text-base px-1 md:px-4 py-2 md:py-3' : 'text-xs md:text-base px-1 py-2'}`}>
                        <i className={`fa-solid ${option === 'Statistics' ? 'fa-chart-line' : option === 'Teams' ? 'fa-people-group' : option === 'Employees' ? 'fa-user' : 'fa-book'}`}></i>
                        <button className='ml-1 md:ml-4' onClick={() => handleOptionChange(option)}>{option}</button>
                    </li>
                ))}
            </ul>
        </main>
        </>
    )
}
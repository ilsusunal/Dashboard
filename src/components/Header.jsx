import React, { useState } from 'react';
import { useTheme } from "../contexts/DarkModeContext";

export function Header(){
    const [searchWord, setSearchWord] = useState('');
    const { theme, toggleTheme  } = useTheme();
    const [isActive, setIsActive] = useState(false);
    console.log("Dark-mode check:", theme);

    const handleSearch = () => {
        if (searchWord.trim() !== '') {
            window.find(searchWord);
        }else {
            window.getSelection().removeAllRanges();
        }
    };

    const handleChange = (e) => {
        setSearchWord(e.target.value);
        handleSearch();
    };
    
    const handleClick = () => {
        setIsActive(!isActive);
        toggleTheme();
      };
    return(
        <>
        <header className='flex'>
                <div className='flex items-center px-4 py-3 grow rounded-xl mr-4 bg-white dark:bg-indigo-100'>
                    <i className="fa-solid fa-magnifying-glass mr-4 text-lavender-400 dark:text-yellow-500" onClick={() => handleSearch()}/>
                    <input type="text" 
                        placeholder="Search something..." 
                        value={searchWord}
                        onChange={handleChange}
                        className='bg-transparent flex-1 outline-none text-gray-600 text-sm '
                    />
                </div>
                <button className='rounded-xl bg-white dark:bg-indigo-100 min-w-12' onClick={() => handleClick()}>
                    {theme === 'dark' ? <i className="fa-solid fa-moon text-lavender-400"/> : <i className="fa-solid fa-sun text-yellow-500"/>}
                </button>
            </header>
        </>
    )
}
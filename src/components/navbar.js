import React, { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

  }

  // TODO: Add button change animation

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded fixed z-10 top-0 right-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="w-full" id="navbar-default">
          <ul className="flex flex-row py-2">
            <button
              onClick={toggleDarkMode}
              className="ml-auto p-4 transition-colors bg-indigo-700 dark:bg-amber-300 rounded-lg"
            >
              <div className="text-white">
                {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
              </div>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
import React, { useContext} from 'react';
import { ImSwitch } from "react-icons/im"


import { Context } from "../context/Context"

const ThemeSettings = () => {
    const { theme, setTheme } = useContext(Context);
  return (
    <div>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-dark dark:text-black  bg-white shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
         <ImSwitch/>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-white-500 dark:text-white bg-dark focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
         <ImSwitch/>
        </button>
      )}
    </div>
  );
};

export default ThemeSettings;
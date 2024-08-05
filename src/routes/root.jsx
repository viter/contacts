import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import light from '../assets/light.png';
import dark from '../assets/dark.png';

const Root = () => {
  const [mode, setMode] = useState('light');
  const changeMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(mode);
  }, [mode]);
  return (
    <main className="max-w-[1280px] min-w-[400px] w-full ml-auto mr-auto px-3">
      <div className="flex justify-center pt-5 mb-12 relative">
        <div
          className="w-8 h-8 rounded-full p-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 hover:cursor-pointer"
          onClick={changeMode}
        >
          <img src={mode === 'dark' ? light : dark} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </main>
  );
};

export default Root;

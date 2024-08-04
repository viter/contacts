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
    console.log(mode);
  }, [mode]);
  return (
    <div className={clsx(mode, 'bg-slate-100 dark:bg-slate-700 h-screen')}>
      <main className="max-w-[1280px] min-w-[400px] w-[1000px] ml-auto mr-auto">
        <div className="flex justify-center pt-5 mb-12" onClick={changeMode}>
          <div className="w-8 h-8 rounded-full p-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 hover:cursor-pointer">
            <img src={mode === 'dark' ? light : dark} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Root;

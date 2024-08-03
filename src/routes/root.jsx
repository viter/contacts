import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <p>Root</p>
      <Outlet />
    </div>
  );
};

export default Root;

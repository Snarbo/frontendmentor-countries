import { useStateContext } from '../store/Context';
import { Outlet } from 'react-router-dom';

import Header from '../Components/Master/Header';

const Root = () => {
  const { currentTheme } = useStateContext();

  return (
    <div className={`countries ${currentTheme}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;

import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../store/Context';

import LightDarkMode from './LightDarkMode';

const Header = () => {
  const navigate = useNavigate();
  const { setSearchedCountry, setSelectedRegion } = useStateContext();

  const home = () => {
    navigate('/');
    setSearchedCountry('');
    setSelectedRegion('');
  };

  return (
    <header className="header py-[30px] px-4 shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] lg:py-6 lg:px-20">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="header-logo cursor-pointer" onClick={home}>
            <h1 className="text-sm font-extrabold lg:text-2xl">Where in the world?</h1>
          </div>
          <LightDarkMode />
        </div>
      </div>
    </header>
  );
};

export default Header;

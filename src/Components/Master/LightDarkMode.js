import { useEffect } from 'react';
import { useStateContext } from '../../store/Context';

const LightDarkMode = () => {
  const { currentTheme, setCurrentTheme } = useStateContext();

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const strokeColor = currentTheme === 'light' ? '#111517' : 'none';

  return (
    <button className="dark-light-toggle flex items-center" onClick={toggleTheme}>
      <svg className="mr-2 lg:w-5 lg:h-5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            id="Path"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
            fill="white"
            stroke={strokeColor}
          />
        </g>
      </svg>
      <span className="text-xs font-semibold cursor-pointer lg:text-base">Dark Mode</span>
    </button>
  );
};

export default LightDarkMode;

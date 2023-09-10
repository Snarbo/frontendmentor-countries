import { useState } from 'react';
import { useStateContext } from '../../store/Context';

const Filters = () => {
  const [showRegions, setShowRegions] = useState(false);
  const { currentTheme, setSearchedCountry, selectedRegion, setSelectedRegion } = useStateContext();

  const handleSearchedCountry = (e) => setSearchedCountry(e.target.value);
  const handleShowRegion = () => setShowRegions((prevState) => !prevState);

  const searchBgColor = currentTheme === 'light' ? '#B2B2B2' : '#fff';
  const chevronBgColor = currentTheme === 'light' ? '#000' : '#fff';

  return (
    <section className="countries-filters lg:flex lg:justify-between">
      <div className="countries-filter-country flex items-center rounded-[5px] py-4 px-8 shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] lg:py-5 lg:w-[480px]">
        <svg className="mr-[26px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
            fill={searchBgColor}
          />
        </svg>
        <input className="flex-1 text-xs leading-5 bg-transparent outline-none lg:text-sm" type="text" placeholder="Search for a country..." onChange={handleSearchedCountry} />
      </div>
      <div className="countries-filter-region relative mt-10 w-[200px] lg:m-0">
        <div className="head flex justify-between items-center rounded-[5px] py-3.5 pl-6 pr-5 cursor-pointer shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] lg:py-5 lg:h-full" onClick={handleShowRegion}>
          <p className="text-xs leading-5 lg:text-sm">{selectedRegion ? selectedRegion : 'Filter by Region'}</p>
          <svg className={`rotate-180 transition ${showRegions ? 'rotate-0' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z" fill={chevronBgColor} />
          </svg>
        </div>
        {showRegions && (
          <div className="body absolute left-0 right-0 rounded-[5px] py-3.5 px-6 shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] lg:py-4">
            <p className="text-xs cursor-pointer lg:text-sm" onClick={() => setSelectedRegion('')}>
              All
            </p>
            <p className={`mt-2 text-xs cursor-pointer lg:text-sm ${selectedRegion === 'Africa' ? 'active' : ''}`} onClick={() => setSelectedRegion('Africa')}>
              Africa
            </p>
            <p className={`mt-2 text-xs cursor-pointer lg:text-sm ${selectedRegion === 'America' ? 'active' : ''}`} onClick={() => setSelectedRegion('Americas')}>
              America
            </p>
            <p className={`mt-2 text-xs cursor-pointer lg:text-sm ${selectedRegion === 'Asia' ? 'active' : ''}`} onClick={() => setSelectedRegion('Asia')}>
              Asia
            </p>
            <p className={`mt-2 text-xs cursor-pointer lg:text-sm ${selectedRegion === 'Europe' ? 'active' : ''}`} onClick={() => setSelectedRegion('Europe')}>
              Europe
            </p>
            <p className={`mt-2 text-xs cursor-pointer lg:text-sm ${selectedRegion === 'Oceania' ? 'active' : ''}`} onClick={() => setSelectedRegion('Oceania')}>
              Oceania
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Filters;

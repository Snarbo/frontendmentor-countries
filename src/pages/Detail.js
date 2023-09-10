import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useStateContext } from '../store/Context';

import countriesList from '../Components/data.json';

const Detail = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const country = countriesList.find((obj) => obj.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (country === undefined) navigate('/');
  }, [country, navigate]);

  //

  const { currentTheme } = useStateContext();
  const [countryCurrencies, setCountryCurrencies] = useState('');
  const [countryLanguages, setCountryLanguages] = useState('');
  const [countryBorders, setCountryBorders] = useState(country.borders || []);

  useEffect(() => {
    if (country.currencies) setCountryCurrencies(country.currencies.map((currency) => currency.name).join(', '));
    if (country.languages) setCountryLanguages(country.languages.map((language) => language.name).join(', '));
    if (country.borders) setCountryBorders(countriesList.filter((country) => countryBorders.includes(country.alpha3Code)).map((country) => country.name));
  }, [country]);

  const backBgColor = currentTheme === 'light' ? '#111517' : '#fff';

  return (
    <div className="countries-detail pt-10 px-[30px] pb-[60px] min-h-screen lg:p-20">
      <div className="container">
        <section className="countries-detail-navigation flex">
          <Link className="flex items-center rounded-sm py-1.5 px-6 text-sm font-light shadow-[0_0_7px_0_rgba(0,0,0,0.3)]" to="/">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
                fill={backBgColor}
              />
            </svg>{' '}
            Back
          </Link>
        </section>
        <section className="countries-item mt-16 lg:flex">
          <img className="countries-item-image rounded-[5px] w-full h-max lg:w-[300px] xl:w-[560px]" src={country.flags.svg} alt={country.name} />
          <div className="countries-item-details mt-11 lg:mt-10 lg:ml-[145px]">
            <h2 className="countries-item-name text-[22px] font-extrabold lg:text-[32px]">{country.name}</h2>
            <div className="countries-item-facts mt-4 lg:grid lg:grid-cols-2 lg:gap-[115px] lg:mt-6">
              <div>
                {country.nativeName && (
                  <p className="text-sm font-light leading-8 lg:text-base">
                    <b className="font-semibold">Native Name: </b>
                    {country.nativeName}
                  </p>
                )}
                {country.population && (
                  <p className="text-sm font-light leading-8 lg:mt-3 lg:text-base">
                    <b className="font-semibold">Population: </b>
                    {country.population.toLocaleString()}
                  </p>
                )}
                {country.region && (
                  <p className="text-sm font-light leading-8 lg:mt-3 lg:text-base">
                    <b className="font-semibold">Region: </b>
                    {country.region}
                  </p>
                )}
                {country.subregion && (
                  <p className="text-sm font-light leading-8 lg:mt-3 lg:text-base">
                    <b className="font-semibold">Sub Region: </b>
                    {country.subregion}
                  </p>
                )}
                {country.capital && (
                  <p className="text-sm font-light leading-8 lg:mt-3 lg:text-base">
                    <b className="font-semibold">Capital: </b>
                    {country.capital}
                  </p>
                )}
              </div>
              <div className="mt-8 lg:m-0">
                {country.topLevelDomain && (
                  <p className="text-sm font-light leading-8 lg:text-base">
                    <b className="font-semibold">Top Level Domain: </b>
                    {country.topLevelDomain}
                  </p>
                )}
                {countryCurrencies && (
                  <p className="text-sm font-light leading-8 lg:mt-3 lg:text-base">
                    <b className="font-semibold">Currencies: </b>
                    {countryCurrencies}
                  </p>
                )}
                {countryLanguages && (
                  <p className="text-sm font-light leading-8 lg:mt-3 lg:text-base">
                    <b className="font-semibold">Languages: </b>
                    {countryLanguages}
                  </p>
                )}
              </div>
            </div>
            {countryBorders.length > 1 && (
              <div className="countries-item-borders mt-8 lg:mt-[70px] lg:flex">
                <h3 className="text-base font-semibold leading-6 lg:mt-1 lg:mr-4">Border Countries: </h3>
                <ul className="flex flex-wrap mt-4 lg:flex-1 lg:mt-0 lg:mb-[-10px]">
                  {countryBorders.map((country, idx) => (
                    <li className="mr-2.5 mb-2.5 py-2.5 px-[30px] text-xs font-light leading-none shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] lg:text-sm lg:leading-none" key={idx}>
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;

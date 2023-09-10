import React, { useState, useEffect, useCallback } from 'react';
import { useStateContext } from '../../store/Context';
import countriesList from '../data.json';
import CountryItem from './CountryItem';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchedCountry, selectedRegion } = useStateContext();

  const nameSearch = useCallback(() => {
    return countriesList.filter((country) => searchedCountry === '' || country.name.toLowerCase().includes(searchedCountry.toLowerCase()));
  }, [searchedCountry]);

  const regionSearch = useCallback(() => {
    return countriesList.filter((country) => selectedRegion === 'All' || country.region.toLowerCase() === selectedRegion.toLowerCase());
  }, [selectedRegion]);

  const nameAndRegionSearch = useCallback(() => {
    const nameFiltered = nameSearch();
    const regionFiltered = regionSearch();

    return countriesList.filter((country) => {
      const nameMatch = nameFiltered.includes(country);
      const regionMatch = regionFiltered.includes(country);

      return nameMatch && regionMatch;
    });
  }, [nameSearch, regionSearch]);

  useEffect(() => {
    setIsLoading(true);

    if (searchedCountry !== '' || selectedRegion !== '') {
      const debounceTimer = setTimeout(() => {
        const filtered = searchedCountry !== '' && selectedRegion === '' ? nameSearch() : searchedCountry === '' && selectedRegion !== '' ? regionSearch() : nameAndRegionSearch();

        setCountries(filtered);
        setIsLoading(false);
      }, 300);

      return () => {
        clearTimeout(debounceTimer);
      };
    } else {
      setCountries(countriesList);
      setIsLoading(false);
    }
  }, [searchedCountry, selectedRegion, nameSearch, regionSearch, nameAndRegionSearch]);

  return (
    <section className="countries-list-container mt-8 px-10 lg:mt-12 lg:p-0">
      {isLoading ? (
        <p className="font-extrabold text-lg">Loading...</p>
      ) : countries.length === 0 ? (
        <p className="font-extrabold text-lg">No results found.</p>
      ) : (
        <div className="countries-list grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.map((country) => (
            <CountryItem key={country.id} id={country.id} flag={country.flag} name={country.name} population={country.population.toLocaleString()} region={country.region} capital={country.capital} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CountriesList;

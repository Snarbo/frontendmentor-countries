import { Link } from 'react-router-dom';

const CountryItem = ({ id, flag, name, population, region, capital }) => {
  return (
    <article className="country-item shadow-[0_0_7px_2px_rgba(0,0,0,0.03)]">
      <Link className="flex flex-col h-full" to={`/detail/` + id}>
        <div className="country-item-head">
          <img className="country-item-image rounded-t-[5px] w-full h-[160px] object-cover" src={flag} alt={name} />
        </div>
        <div className="country-item-body flex-1 rounded-b-[5px] p-6 pb-[45px]">
          <h3 className="country-item-name font-extrabold text-lg">{name}</h3>
          {population && (
            <p className="country-item-population mt-4 text-sm font-light leading-4">
              <span className="font-semibold">Population:</span> {population}
            </p>
          )}
          {region && (
            <p className="country-item-population mt-2 text-sm font-light leading-4">
              <span className="font-semibold">Region:</span> {region}
            </p>
          )}
          {capital && (
            <p className="country-item-population mt-2 text-sm font-light leading-4">
              <span className="font-semibold">Capital:</span> {capital}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
};

export default CountryItem;

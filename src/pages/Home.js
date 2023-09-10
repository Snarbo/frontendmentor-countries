import Filters from '../Components/Countries/Filters';
import CountriesList from '../Components/Countries/CountriesList';

const Home = () => {
  return (
    <div className="home pt-6 px-4 pb-[65px] min-h-screen lg:pt-12 lg:px-20 lg:pb-[45px]">
      <div className="container">
        <Filters />
        <CountriesList />
      </div>
    </div>
  );
};

export default Home;

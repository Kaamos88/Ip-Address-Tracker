import { useSelector } from "react-redux";

import Details from "./Details";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";

const Header = () => {
  const { isLoading } = useSelector((store) => store.search);

  return (
    <header id="header" className="lg:w-[1440px] h-2/5 lg:h-1/4 mx-auto">
      <h1 className="text-white text-center text-3xl font-semibold py-8 lg:py-5">
        IP Address Tracker
      </h1>
      <SearchBar />
      {!isLoading ? (
        <Details />
      ) : (
        <div className="flex justify-center items-center relative min-h-[8rem] top-10 z-[500] bg-white w-11/12 lg:w-4/5 rounded-xl mx-auto">
          <Spinner />
        </div>
      )}
    </header>
  );
};

export default Header;

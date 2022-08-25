import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeoIp } from "../features/search/searchSlice";
import Details from "./Details";
import SearchBar from "./SearchBar";

const Header = () => {
  const { isLoading } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => () => dispatch(getGeoIp()), []);
  return (
    <header id="header" className="lg:w-[1440px] h-2/5 lg:h-1/4 mx-auto">
      <h1 className="text-white text-center text-3xl font-semibold py-8 lg:py-5">
        IP Address Tracker
      </h1>
      <SearchBar />
      {!isLoading ? <Details /> : ""}
    </header>
  );
};

export default Header;

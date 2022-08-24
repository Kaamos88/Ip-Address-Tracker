import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeoIp } from "../features/search/searchSlice";
import Details from "./Details";
import SearchBar from "./SearchBar";

const Header = () => {
  const {isLoading} = useSelector(store => store.search);
  const dispatch = useDispatch();
  useEffect(() => () => dispatch(getGeoIp()),[])
  return (
    <header id="header" className="w-[1440px] h-[23%] mx-auto">
      <h1 className="text-white text-center text-3xl font-bold py-5">IP Address Tracker</h1>
      <SearchBar />
      {!isLoading ? <Details /> : ''}
    </header>
  );
};

export default Header;

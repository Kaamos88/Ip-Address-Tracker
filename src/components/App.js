import React, { useEffect } from "react";
import Header from "./Header";
import GeoMap from "./GeoMap";
import Spinner from "./Spinner";
import { getGeoIp } from "../features/search/searchSlice";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const { isLoading } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => () => dispatch(getGeoIp()), []);
  return (
    <div className="h-screen">
      <Header />
      {!isLoading ? (
        <GeoMap />
      ) : (
        <div className="bg-slate-200 h-3/4 lg:w-[1440px] mx-auto flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default App;

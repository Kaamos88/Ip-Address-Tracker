import React from "react";
import Header from "./Header";
import GeoMap from "./GeoMap";
import { useSelector } from "react-redux";

const App = () => {
  const {isLoading} = useSelector(store => store.search);
  return (
    <div className="h-screen">
      <Header />
      {!isLoading? <GeoMap /> : ''}
    </div>
  );
};

export default App;

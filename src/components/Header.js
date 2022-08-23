import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header id="header" className="w-[1440px] h-[23%] mx-auto">
      <h1 className="text-white text-center text-3xl font-bold py-5">IP Address Tracker</h1>
      <SearchBar />
    </header>
  );
};

export default Header;

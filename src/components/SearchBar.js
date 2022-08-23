import { useDispatch, useSelector } from "react-redux";
import { searchTerm } from "../features/search/searchSlice";

const SearchBar = () => {
  const { term } = useSelector(store => store.search);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTerm(''))
    
  };

  return (
    <>
      <form onSubmit={onSubmit} className="flex justify-center h-12">
        <input
          value={term}
          onChange={(e) => dispatch(searchTerm(e.target.value))}
          placeholder="Search for any IP address or domain"
          className="w-1/3 rounded-l-xl p-3"
        />
        <button type="submit" className="px-5 rounded-r-xl bg-black hover:bg-[#2b2b2b] text-white">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>{" "}
        </button>
      </form>
    </>
  );
};

export default SearchBar;

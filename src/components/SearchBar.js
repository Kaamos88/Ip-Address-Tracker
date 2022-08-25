import { useDispatch, useSelector } from "react-redux";
import { setText, searchTerm, getGeoIp } from "../features/search/searchSlice";

const SearchBar = () => {
  const { text } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTerm(text));
    dispatch(setText(""));
    dispatch(getGeoIp());
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex w-11/12 lg:w-2/5 mx-auto">
          <input
            value={text}
            onChange={(e) => dispatch(setText(e.target.value))}
            placeholder="Search for any IP address or domain"
            className="w-full rounded-l-xl pl-6 py-4 lg:py-3 text-lg outline-none cursor-pointer"
          />
          <button
            type="submit"
            className="px-6 rounded-r-xl bg-black hover:bg-[#2b2b2b] text-white"
          >
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="M2 1l6 6-6 6"
              />
            </svg>{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;

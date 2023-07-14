import { useDataContext } from "../contexts/DataContext";

export const Navbar = () => {
  const { dispatch } = useDataContext();

  const searchHandler = (e) => {
    dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value });
  };
  return (
    <>
      <div className="w-full  flex p-4 justify-between shadow-md">
        <h1 className="text-3xl text-rose-600 ">MeetUp</h1>
        <div className="w-1/3">
          <input
            type="text"
            placeholder="search events.."
            onChange={(e) => searchHandler(e)}
            className="w-full px-2 py-1 rounded-lg border"
          />
        </div>
      </div>
    </>
  );
};

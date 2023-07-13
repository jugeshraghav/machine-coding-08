export const Navbar = () => {
  return (
    <>
      <div className="w-full bg-rose-100 flex p-4 justify-between shadow-md">
        <h1 className="text-3xl text-rose-600">MeetUp</h1>
        <div className="w-1/3">
          <input
            type="text"
            placeholder="search events.."
            className="w-full px-2 py-1 rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

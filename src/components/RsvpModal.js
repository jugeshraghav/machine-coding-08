import { useDataContext } from "../contexts/DataContext";

export const RsvpModal = ({ id, show, onClose }) => {
  const {
    state: { events },
    dispatch,
  } = useDataContext();

  const rsvpHandler = () => {
    const updatedEventArr = events?.meetups?.map((meetup) =>
      meetup?.id === id ? { ...meetup, isPaid: !meetup?.isPaid } : meetup
    );
    console.log(updatedEventArr);

    dispatch({ type: "UPDATE_RSVP", payload: updatedEventArr });
    onClose();
  };
  return (
    <>
      {show && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-rose-300/[0.5] flex justify-center items-center z-40"
          onClick={() => onClose()}
        >
          <div
            className=" p-5 bg-white shadow-xl rounded-md flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-2xl font-bold">Complete your RSVP</h1>
            <p className="text-sm">Fill in your Information</p>
            <form onSubmit={() => rsvpHandler()}>
              <div className="flex flex-col gap-2">
                <input
                  required
                  className="p-1 rounded border"
                  placeholder="Enter your name"
                />
                <input
                  required
                  className="p-1 rounded border"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2">
                <p>* You have to make the payment at the Venue</p>
                <button
                  type="submit"
                  className="bg-rose-600 text-white text-sm px-2 py-1 rounded w-20 mt-2 hover:bg-white  hover:border hover:border-rose-600 hover:text-rose-600 "
                >
                  RSVP
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

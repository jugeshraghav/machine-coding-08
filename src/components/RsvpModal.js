import { useState } from "react";
import { useDataContext } from "../contexts/DataContext";

export const RsvpModal = ({ eId, show, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {
    state: { events },
    dispatch,
  } = useDataContext();

  const rsvpHandler = () => {
    const updatedEventArr = events?.meetups?.map((meetup) =>
      meetup?.id === eId ? { ...meetup, isPaid: !meetup?.isPaid } : meetup
    );
    console.log(updatedEventArr);

    dispatch({ type: "UPDATE_RSVP", payload: updatedEventArr });
    onClose();
  };
  return (
    <>
      {show && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-rose-300/[0.5] flex justify-center items-center "
          onClick={() => onClose()}
        >
          <div
            className=" p-5 bg-white shadow-xl rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-2xl font-bold">Complete your RSVP</h1>
            <p className="text-sm">Fill in your Information</p>
            <div className="flex flex-col gap-2">
              <input
                onChange={(e) => setName(e.target.value)}
                className="p-1 rounded border"
                placeholder="Enter your name"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-1 rounded border"
                placeholder="Enter your email"
              />
            </div>

            <p>* You have to make the payment at the Venue</p>
            <button
              className="bg-rose-600 text-white text-sm px-2 py-1 rounded"
              onClick={() => rsvpHandler()}
            >
              RSVP
            </button>
          </div>
        </div>
      )}
    </>
  );
};

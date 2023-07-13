import { useParams } from "react-router-dom";
import { useDataContext } from "../contexts/DataContext";
import { Navbar } from "../components/Navbar";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useState } from "react";
import { RsvpModal } from "../components/RsvpModal";

export const EventDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const { eId } = useParams();
  const {
    state: {
      events: { meetups },
    },
  } = useDataContext();
  const currentEvent = meetups?.find(({ id }) => id === eId);

  //   const startDate = new Date(currentEvent?.eventStartTime);
  //   const endDate = new Date(currentEvent?.eventEndTime);
  console.log(showModal);
  return (
    <>
      <RsvpModal
        show={showModal}
        onClose={() => setShowModal(false)}
        id={eId}
      />
      <Navbar />
      <div className="flex gap-6 m-4">
        <div className="w-1/2 text-left">
          <h1 className="text-2xl">{currentEvent?.title}</h1>
          <h1 className="text-sm ">
            <span className="font-bold"> Hosted By:</span>{" "}
            <span className="text-slate-400">{currentEvent?.hostedBy}</span>
          </h1>
          <img src={currentEvent?.eventThumbnail} alt={currentEvent?.title} />
          <h1 className="font-bold text-xl">Details</h1>
          <p>{currentEvent?.eventDescription}</p>
          <h1 className="font-bold text-2xl">Additional Information:</h1>
          <p className="text-sm">
            <span className="font-bold">Dress Code:</span>
            {currentEvent?.additionalInformation?.dressCode}
          </p>
          <p className="text-sm">
            <span className="font-bold">Age Restriction:</span>
            {currentEvent?.additionalInformation?.ageRestrictions}
          </p>
          <h1 className="text-lg font-bold">Event Tags</h1>
          <div className="flex gap-1">
            {currentEvent?.eventTags?.map((tag, index) => (
              <button
                key={index}
                className="bg-rose-600 text-white text-sm px-2 py-1 rounded-full"
              >
                {tag}
              </button>
            ))}{" "}
          </div>
        </div>
        <div className="w-1/2 text-left">
          <div className="bg-white">
            <div>
              <span>
                <AiOutlineClockCircle />
              </span>
              <div>
                <p>{currentEvent?.eventStartTime} to </p>
                <p>{currentEvent?.eventEndTime} </p>
              </div>
            </div>
            <div>
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>{currentEvent?.location}</p>
                <p>{currentEvent?.address}</p>
              </div>
            </div>
            <div>
              <span>
                <LiaRupeeSignSolid />
                <p>{currentEvent?.price}</p>
              </span>
            </div>
          </div>
          <div>
            <h1>Speakers:</h1>
            <div className="flex gap-2">
              {currentEvent?.speakers?.map(
                ({ name, image, designation }, index) => (
                  <div className="bg-white shadow-lg rounded">
                    <img
                      src={image}
                      alt={name}
                      className="w-24 h-24 rounded-full"
                    />
                    <h1>{name}</h1>
                    <p>{designation}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <button
            className="bg-rose-600 text-white text-sm px-2 py-1 rounded cursor-pointer disabled:bg-slate-400"
            disabled={currentEvent?.isPaid}
            onClick={() => setShowModal(true)}
          >
            {currentEvent?.isPaid ? "RSVPed" : "RSVP"}
          </button>
        </div>
      </div>
    </>
  );
};

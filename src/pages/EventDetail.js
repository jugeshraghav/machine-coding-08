import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "../contexts/DataContext";
import { useState } from "react";
import { RsvpModal } from "../components/RsvpModal";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaBackward } from "react-icons/fa";

export const EventDetail = () => {
  const {
    state: {
      events: { meetups },
    },
  } = useDataContext();
  const [showModal, setShowModal] = useState(false);
  const { eId } = useParams();
  const navigate = useNavigate();

  const currentEvent = meetups?.find(({ id }) => id === eId);

  return (
    <>
      <RsvpModal
        show={showModal}
        onClose={() => setShowModal(false)}
        id={eId}
      />

      <div className=" bg-slate-50 flex flex-col justify-center w-full px-2   gap-4 md:flex-row md:gap-6 py-6 md:justify-around relative">
        {/* **********************Left Section Event Details *********************/}
        <div className=" text-left md:w-1/2 ">
          <h1 className="text-2xl font-bold my-1">{currentEvent?.title}</h1>
          <h1 className="text-sm my-1">
            <span className="font-bold "> Hosted By:</span>{" "}
            <span className="text-slate-400">{currentEvent?.hostedBy}</span>
          </h1>
          <img
            src={currentEvent?.eventThumbnail}
            alt={currentEvent?.title}
            className="w-full"
          />
          <div className="my-4">
            <h1 className="font-bold text-xl">Details</h1>
            <p className="text-sm">{currentEvent?.eventDescription}</p>
          </div>
          <div>
            {" "}
            <h1 className="font-bold text-2xl">Additional Information:</h1>
            <p className="text-sm">
              <span className="font-bold">Dress Code:</span>
              {currentEvent?.additionalInformation?.dressCode}
            </p>
            <p className="text-sm">
              <span className="font-bold">Age Restriction:</span>
              {currentEvent?.additionalInformation?.ageRestrictions}
            </p>
          </div>

          <div className="my-4">
            {" "}
            <h1 className="text-lg font-bold">Event Tags</h1>
            <div className="flex gap-1">
              {currentEvent?.eventTags?.map((tag, index) => (
                <button
                  key={index}
                  className="bg-rose-600 text-white text-sm px-4 py-1 rounded-full"
                >
                  {tag}
                </button>
              ))}{" "}
            </div>
          </div>
        </div>

        {/****************  Right Section Of Event Details ***************************/}
        <div className=" text-left flex flex-col gap-6">
          {/********************  Time Details Section *************************/}
          <div className="bg-white shadow-xl p-5 rounded flex flex-col gap-2 ">
            <div className="flex gap-2 items-center text-sm">
              <span>
                <AiOutlineClockCircle />
              </span>
              <div>
                <p>
                  {new Date(currentEvent?.eventStartTime)
                    .toLocaleString()
                    .toUpperCase()}{" "}
                  to{" "}
                </p>
                <p>
                  {new Date(currentEvent?.eventEndTime)
                    .toLocaleString()
                    .toUpperCase()}{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>{currentEvent?.location}</p>
                <p>{currentEvent?.address}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <span>
                <LiaRupeeSignSolid />
              </span>
              <p>{currentEvent?.price}</p>
            </div>
          </div>

          {/* **********************Speakers Section***************** */}
          {currentEvent?.speakers?.length > 0 && (
            <div>
              <h1 className="text-xl font-bold">Speakers:</h1>
              <div className="flex gap-2">
                {currentEvent?.speakers?.map(
                  ({ name, image, designation }, index) => (
                    <div
                      className="bg-white shadow-lg rounded w-36 flex flex-col p-2 items-center"
                      key={index}
                    >
                      <img
                        src={image}
                        alt={name}
                        className="w-20 h-20  rounded-full"
                      />
                      <h1 className="text-sm font-bold w-full text-center ">
                        {name}
                      </h1>
                      <p className="text-sm text-slate-500 text-center w-full">
                        {designation}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/****************  RSVP Button********************* */}
          {new Date() < new Date(currentEvent?.eventEndTime) ? (
            <button
              className="bg-rose-600 text-white text-sm px-2 py-2 rounded w-20 mt-2 hover:bg-white  hover:border hover:border-rose-600 hover:text-rose-600 disabled:bg-slate-500 disabled:hover:border-0 disabled:hover:text-white"
              disabled={currentEvent?.isPaid}
              onClick={() => setShowModal(true)}
            >
              {currentEvent?.isPaid ? "RSVPed" : "RSVP"}
            </button>
          ) : (
            <h1 className="text-lg font-bold">Event Passed</h1>
          )}
        </div>

        <FaBackward
          className="text-xl absolute top-1 left-1 cursor-pointer "
          onClick={() => navigate(-1)}
        />
      </div>
    </>
  );
};

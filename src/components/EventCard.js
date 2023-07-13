import { useNavigate } from "react-router-dom";

export const EventCard = ({ event }) => {
  const { id, title, eventStartTime, eventEndTime, eventThumbnail, eventType } =
    event;

  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-48 h-64  flex flex-col justify-between p-2 cursor-pointer hover:shadow-2xl"
        onClick={() => navigate(`/event-detail/${id}`)}
      >
        <div className="relative h-2/3">
          <img src={eventThumbnail} alt={title} className="rounded h-full" />
          <p className="bg-white rounded absolute top-1 left-1 text-sm p-1">
            {eventType}
          </p>
        </div>
        <div>
          <p className="text-slate-500 text-left text-sm">{eventStartTime}</p>
          <h1 className="text-xl text-left"> {title}</h1>
        </div>
      </div>
    </>
  );
};

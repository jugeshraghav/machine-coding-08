import { useNavigate } from "react-router-dom";

export const EventCard = ({ event }) => {
  const { id, title, eventStartTime, eventThumbnail, eventType } = event;

  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-48 h-64 bg-white flex flex-col  p-2 cursor-pointer shadow-2xl gap-4 hover:bg-rose-100"
        onClick={() => navigate(`/event-detail/${id}`)}
      >
        <div className="relative h-2/3">
          <img src={eventThumbnail} alt={title} className="rounded h-full" />
          <p className="bg-white rounded absolute top-1 left-1 text-sm p-1">
            {eventType}
          </p>
        </div>
        <div className="flex flex-col gap-2 h-1/3">
          <p className="text-slate-500 text-left text-sm">{eventStartTime}</p>
          <h1 className="text-lg text-left"> {title}</h1>
        </div>
      </div>
    </>
  );
};

import { EventCard } from "../components/EventCard";
import { Navbar } from "../components/Navbar";
import { useDataContext } from "../contexts/DataContext";

export const Home = () => {
  const {
    state: { events, typeOfEvent },
    dispatch,
  } = useDataContext();

  //handlers
  const handleEventType = (e) => {
    dispatch({ type: "SET_TYPE_OF_EVENT", payload: e.target.value });
  };

  //calculated values
  const filteredArr = typeOfEvent
    ? typeOfEvent !== "All"
      ? events?.meetups?.filter(({ eventType }) => eventType === typeOfEvent)
      : events?.meetups
    : events?.meetups;
  return (
    <>
      <Navbar />
      <div>
        <h1>Meetup Events</h1>
        <select
          onClick={(e) => handleEventType(e)}
          placeholder="Select Event Type"
        >
          <option value="All">All</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <div className="flex gap-2 flex-wrap m-5 justify-evenly">
        {filteredArr?.map((event) => (
          <EventCard event={event} key={event?.id} />
        ))}
      </div>
    </>
  );
};

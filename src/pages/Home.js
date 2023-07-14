import { useDataContext } from "../contexts/DataContext";
import { EventCard } from "../components/EventCard";

export const Home = () => {
  const {
    state: { events, typeOfEvent, searchText },
    dispatch,
  } = useDataContext();

  //handlers
  const handleEventType = (e) => {
    dispatch({ type: "SET_TYPE_OF_EVENT", payload: e.target.value });
  };

  //calculated values
  const searchedEventsArr = events?.meetups?.filter(
    ({ eventTags, title }) =>
      title.toLowerCase().includes(searchText.toLowerCase()) ||
      eventTags.some((tag) =>
        tag.toLowerCase().includes(searchText.toLowerCase())
      )
  );
  const filteredArr = typeOfEvent
    ? typeOfEvent !== "All"
      ? searchedEventsArr.filter(({ eventType }) => eventType === typeOfEvent)
      : searchedEventsArr
    : searchedEventsArr;
  return (
    <>
      <div className="bg-slate-50 w-full h-full">
        <div className="flex justify-between p-4 ">
          <h1 className="font-bold text-xl">Meetup Events</h1>
          <select
            onClick={(e) => handleEventType(e)}
            placeholder="Select Event Type"
            className="w-48 shadow-lg"
          >
            <option value="All">All</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        <div className="flex gap-9 flex-wrap m-5 justify-center ">
          {filteredArr.length > 0 ? (
            filteredArr?.map((event) => (
              <EventCard event={event} key={event?.id} />
            ))
          ) : (
            <h1 className="text-xl">No Events</h1>
          )}
        </div>
      </div>
    </>
  );
};

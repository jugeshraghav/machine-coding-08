import { Data } from "../data/Data";

const initial_state = {
  events: Data,
  typeOfEvent: "",
  searchText: "",
};
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_TYPE_OF_EVENT":
      return { ...state, typeOfEvent: payload };
    case "UPDATE_RSVP":
      return { ...state, events: { ...state?.events, meetups: payload } };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: payload };
    default:
      return state;
  }
};
export { initial_state, reducer };

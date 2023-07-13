import { Data } from "../data/Data";

const initial_state = {
  events: Data,
  typeOfEvent: "",
};
const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(state);
  switch (type) {
    case "SET_TYPE_OF_EVENT":
      return { ...state, typeOfEvent: payload };
    case "UPDATE_RSVP":
      return { ...state, events: { ...state?.events, meetups: payload } };
    default:
      return state;
  }
};
export { initial_state, reducer };

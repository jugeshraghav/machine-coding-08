import { createContext, useContext, useReducer } from "react";
import { reducer, initial_state } from "../reducers/DataReducer";
const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);
export { useDataContext, DataProvider };

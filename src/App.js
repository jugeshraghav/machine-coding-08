import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { EventDetail } from "./pages/EventDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-detail/:eId" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;

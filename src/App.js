import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { EventDetail } from "./pages/EventDetail";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-detail/:eId" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;

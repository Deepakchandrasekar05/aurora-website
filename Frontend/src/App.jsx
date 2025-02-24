import { Routes, Route } from "react-router-dom"; 
import "./App.css";
import Home from "./pages/home.jsx";
import Team from "./pages/team.jsx";
import Competition from "./pages/competition.jsx";
import Sponsorship from "./pages/sponsership.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/competition" element={<Competition />} />
      <Route path="/sponsorship" element={<Sponsorship />} />
    </Routes>
  );
}

export default App;

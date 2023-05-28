import AgentListHome from "./compontents/Agent/AgentListHome";
import AgentPage from "./compontents/Agent/AgentPage";
import AgentListFavorite from "./compontents/Agent/AgentListFavorite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./compontents/Header";
import AgentListRole from "./compontents/Agent/AgentListRole";
import Home from './compontents/HomePage';
import Maps from './compontents/Maps/Maps';
import Weapons from './compontents/Weapons/Weapons';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/valorant-agents/" element={<AgentListHome />} />
            <Route path="/valorant-agents/role/:role" element={<AgentListRole />} />
            <Route path="/valorant-agents/favorites" element={<AgentListFavorite />} />
            <Route path="/valorant-agents/agent/:id" element={<AgentPage />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/weapons" element={<Weapons />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

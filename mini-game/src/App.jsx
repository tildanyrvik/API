import {BrowserRouter, Routes, Route} from "react-router-dom";
import Game from "../src/pages/game.jsx";
import Registration from "./pages/registration.jsx";
import Login from "./pages/login.jsx";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration /> } />
          <Route path="/game" element={<Game /> } />
          <Route path="/login" element={<Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

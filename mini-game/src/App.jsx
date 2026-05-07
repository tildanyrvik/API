import {BrowserRouter, Routes, Route} from "react-router-dom";
import Game from "../src/pages/game.jsx";
import Registration from "./pages/registration.jsx";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <route path="/" element={<Registration /> } />
          <route path="/game" element={<Game /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

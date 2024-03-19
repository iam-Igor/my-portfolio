import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./comps/NavBar";
import { HomePage } from "./comps/HomePage";
import { GoUpButton } from "./comps/GoUpButton";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <GoUpButton />
    </BrowserRouter>
  );
}

export default App;

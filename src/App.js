import "./App.css";
import { Home } from "./screens/Home";
import { Resources } from "./screens/Resources";
import { Contact } from "./screens/Contact";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="container mt-10">
      <header className=" flex justify-between items-center mb-5 ">
        <img className="w-10" src="images/graven-logo.jpeg" alt="Logos du site" />
        <nav className="flex justify-end">
          <NavLink
            className="mr-5"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to="/"
          >
            Accueil
          </NavLink>{" "}
          <br></br>
          <NavLink
            className="mr-5"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to="/resources"
          >
            Resources
          </NavLink>
          <br></br>
          <NavLink
            className="mr-5"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

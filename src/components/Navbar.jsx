import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path) =>
    `transition ${
      location.pathname === path
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold tracking">Japhet Jeremiah</h1>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 text-sm">
        <Link to="/" className={linkClass("/")}>Home</Link>
        <Link to="/projects" className={linkClass("/projects")}>Projects</Link>
        <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
      </div> 

      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-2xl"
      >
        ☰
      </button>

      {/* Mobile menu*/}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4 absolute top-16 left-0 w-full">
          <Link to="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/projects" className={linkClass("/projects")} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className={linkClass("/contact")} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
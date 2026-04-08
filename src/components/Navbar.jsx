import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `transition ${
      location.pathname === path 
        ? "text-white" 
        : "text-gray-400 hover:text-white"
  }`;


  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold tracking">Japhet Jeremiah</h1>
      <div className="flex gap-6 text-sm mt-2">
        <Link to="/" className="mx-2 hover:underline">
          Home
        </Link>
        <Link to="/projects" className="mx-2 hover:underline">
          Projects
        </Link>
        <Link to="/contact" className="mx-2 hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
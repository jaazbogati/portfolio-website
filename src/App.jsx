import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Toaster position="top-right"/>
      <BrowserRouter>
          <Navbar />
          <div className="min-h-screen bg-gray-100">
            <div className="max-w-6xl mx-auto p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer className="flex flex-col flex-grow" />
          </div>
      </BrowserRouter>
    </>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


export default function Home() {

  
const roles = [
  {text: "Developer", color: "text-blue-600" },
  {text: "Data Engineer", color: "text-purple-600" },
  {text: "Data Analyst", color: "text-green-600" },
];

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % roles.length);
  }, 2500); //change every 2.5s
  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 items-center justify-center text-center space-y-6">
      <h1 className="text-5xl font-bold leading-tight">Welcome to My Portfolio</h1>
      <p className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Looking for a {" "}
         <span className="inline-block min-w-[180px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index].text}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className={`${roles[index].color}`}
            >
              {roles[index].text}
            </motion.span>
          </AnimatePresence>
        </span>
        ?<br/> 
      </p>
      <p>
        Check out my projects and feel free to contact me
      </p>

      <div className="mt-16 max-w-4xl w-full">
        <h2 className="text-2xl font-semibold mb-6 text-left">
          Featured Project
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-6 border flex flex-col md:flex-row gap-6">
          
          {/* Screenshot */}
          <img
            src="/pictures/Incident-tracker-dashboard.png"
            alt="Incident Tracker"
            className="rounded-lg w-full md:w-1/2 object-cover hover:scale-105 transition duration-300"
          />

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Incident Tracker System
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Full-stack incident management system with authentication, role-based access,
                analytics dashboard, and real-time tracking.
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">Flask</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">PostgreSQL</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">Docker</span>
              </div>
            </div>

            <a
              href="https://incident-tracker-ui.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              View Live →
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-3xl text-center space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          I am a software-oriented Technical Support Engineer with a strong focus on scalability,
          reliability, and maintainability. I enjoy analytical problem-solving and building
          production-ready systems that solve real-world challenges.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          My work spans backend engineering, data handling, and clean frontend design. I enjoy
          working across the full stack — from designing APIs and managing databases to building
          intuitive user interfaces and deploying applications to the cloud.
        </p>
      </div>

      <div className="flex gap-4">
        <a href="/projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Projects
        </a>
        <a href="/contact" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Contact Me
        </a>
      </div>
    </div>
  );
}
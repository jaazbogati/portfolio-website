export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white/70 backdrop-blur-md pt-8 pb-10 text-center text-sm text-gray-500">

      <p>© {new Date().getFullYear()} Japhet Jeremiah</p>

      <div className="flex justify-center gap-6 mt-2">
        <a href="https://github.com/jaazbogati" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/JaphetJeremiah" target="_blank">LinkedIn</a>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        Built with React & Tailwind
      </p>

    </footer>
  );
}
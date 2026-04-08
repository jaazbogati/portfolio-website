export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border">
      <img src="/pictures/Incident-tracker-activities_analytics.png" alt="analytic board" className="rounded-lg w-full h-48 object-cover hover:scale-105 transition duration-300" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <a 
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-auto text-blue-500 font-medium hover:underline"
        >
            Live Demo 
        </a>
      </div>
    </div>
  );
}
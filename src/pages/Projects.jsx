import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard 
                    title="Incident Tracker"
                    description="Full-stack incident management system with JWT auth, analytics dashboard, and role-based access."
                    link="https://incident-tracker-ui.vercel.app"
                />
            </div>
        </div>
    )
}
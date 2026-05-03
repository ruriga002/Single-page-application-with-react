import ProjectCard from "./ProjectCard";

function ProjectList({ projects, searchTerm }) {
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="project-grid">
      {filteredProjects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      )}
    </div>
  );
}

export default ProjectList;
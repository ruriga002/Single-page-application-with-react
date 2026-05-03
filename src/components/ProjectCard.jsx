function ProjectCard({ project }) {
  return (
    <div className="card">
      <h2>{project.title}</h2>
      {project.description && <p>{project.description}</p>}
    </div>
  );
}

export default ProjectCard;
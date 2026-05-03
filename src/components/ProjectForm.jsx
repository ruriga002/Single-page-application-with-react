import { useState } from "react";

function ProjectForm({ projects, setProjects }) {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      ...formData,
      id: Date.now()
    };

    setProjects([...projects, newProject]);

    setFormData({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Project title"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        }
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
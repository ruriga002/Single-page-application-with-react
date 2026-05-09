import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

import "../styles/main.css";

function Home() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <h1>Personal Project Showcase App</h1>
     

      <div className="projects-section">
      <ProjectForm projects={projects} setProjects={setProjects} />
      <ProjectList projects={projects} searchTerm={searchTerm} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
    </div>
  );
}

export default Home;
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

function Home() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h1>My Portfolio</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectForm projects={projects} setProjects={setProjects} />
      <ProjectList projects={projects} searchTerm={searchTerm} />
    </div>
  );
}

export default Home;
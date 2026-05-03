import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import ProjectCard from "../components/ProjectCard";

describe("ProjectCard", () => {
  test("renders project title", () => {
    render(<ProjectCard project={{ title: "Test Project" }} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  test("renders project description", () => {
    render(
      <ProjectCard
        project={{
          title: "Test Project",
          description: "This is a test project."
        }}
      />
    );
    expect(screen.getByText("This is a test project.")).toBeInTheDocument();
  });
});
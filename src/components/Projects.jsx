import { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <>
          <p className="label">Projects</p>
          <h2>Things I've built</h2>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;

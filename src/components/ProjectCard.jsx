const ProjectCard = ({ project, onSelect }) => {
  const { title, description, stack, image } = project;

  return (
    <article className="project-card">
      <button className="project-card-link" onClick={() => onSelect(project)}>
        {image && (
          <img className="project-card-image" src={image} alt={`${title} website preview`} />
        )}
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="stack-tags">
          {stack.map((tech) => (
            <li key={tech} className="label">
              {tech}
            </li>
          ))}
        </ul>

        <span className="view-details label">View details →</span>
      </button>
    </article>
  );
};

export default ProjectCard;

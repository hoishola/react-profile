const ProjectDetail = ({ project, onBack }) => {
  const { title, description, details, stack, github, live } = project;

  return (
    <div className="project-detail">
      <button className="breadcrumb" onClick={onBack}>
        <span>Projects</span>
        <span aria-hidden="true"> › </span>
        <span className="breadcrumb-current">{title}</span>
      </button>

      <h2>{title}</h2>
      <p className="project-detail-description">{description}</p>

      {details && <p className="project-detail-body">{details}</p>}

      <dl className="meta-list">
        {live && (
          <div className="meta-row">
            <dt className="label">Website</dt>
            <dd>
              <a href={live} target="_blank" rel="noreferrer">
                {live}
              </a>
            </dd>
          </div>
        )}
        <div className="meta-row">
          <dt className="label">Stack</dt>
          <dd>{stack.join(' / ')}</dd>
        </div>
        {github && (
          <div className="meta-row">
            <dt className="label">Source</dt>
            <dd>
              <a href={github} target="_blank" rel="noreferrer">
                {github}
              </a>
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
};

export default ProjectDetail;

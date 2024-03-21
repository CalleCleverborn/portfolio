import { projectData } from "../data/projectData";

export const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="project-item-box">
        {projectData.map(({ id, title, imageUrl, description }) => (
          <div key={id} className="project-item">
            <img
              src={imageUrl}
              alt={description}
              className="project-image"
            ></img>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

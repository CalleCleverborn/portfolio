import { experienceData } from "../data/experienceData"; // Importing the data
import { schoolData } from "../data/schoolData";

export const Experience = () => {
  return (
    <div id="experience" className="experience-container">
      <div className="school-box">
        {schoolData.map(({ id, url, description, label, time }) => (
          <div key={id} className="school-item">
            <img src={url} alt={description} className="school-logo" />
            <div className="school-info">
              <h2 className="school-label">{label}</h2>
              <h3 className="school-description">{description}</h3>
              <p className="school-time">{time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="experience-logo-box">
        {experienceData.map(({ id, Icon, label }) => (
          <div key={id} className="text-logo-container">
            <Icon className="experience-logo" />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

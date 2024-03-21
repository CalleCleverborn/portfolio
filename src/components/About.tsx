import avatar from "../assets/avatar.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { selfData } from "../data/selfData";

export const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-text-avatar-container">
        <div className="about-text-container">
          <h2>{selfData.greeting}</h2>
          <h3>{selfData.occupation}</h3>
          <p>{selfData.description}</p>
        </div>
        <div className="about-avatar-container">
          <img src={avatar} alt="Carl" className="about-avatar" />
        </div>
      </div>

      <div className="header-sociallinks">
        <a href="https://www.linkedin.com/in/clclvr">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="#">
          <FaGithub className="social-icon" />
        </a>
      </div>
    </div>
  );
};

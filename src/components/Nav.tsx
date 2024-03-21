import { useState, useEffect } from "react";

export const Nav = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const aboutOffset = document.getElementById("about")?.offsetTop || 0;
    const projectsOffset = document.getElementById("projects")?.offsetTop || 0;
    const experienceOffset =
      document.getElementById("experience")?.offsetTop || 0;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition >= experienceOffset) {
      setActiveSection("experience");
    } else if (scrollPosition >= projectsOffset) {
      setActiveSection("projects");
    } else if (scrollPosition >= aboutOffset) {
      setActiveSection("about");
    } else {
      setActiveSection("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <a
              className={activeSection === "about" ? "active" : ""}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={activeSection === "projects" ? "active" : ""}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={activeSection === "experience" ? "active" : ""}
              href="#experience"
            >
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

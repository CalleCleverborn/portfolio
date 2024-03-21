import { About } from "./About";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Header } from "./Header";

export const Layout = () => (
  <>
    <div className="main-container">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
    </div>
  </>
);

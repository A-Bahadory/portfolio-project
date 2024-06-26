import "./skills.css";
import Card from "../Card/Card.jsx";
function Skills() {
  return (
    <>
      <div className="skills-overview">
        <h1 className="skills-overview-h1">Skills Overview</h1>
        <p>
          Below is a quick overview of my main technical skill sets and tools I
          use.
        </p>
        <p>Want to find out more about my experience ?</p>
      </div>
      <div className="skill-section">
        <Card />
      </div>
    </>
  );
}
export default Skills;

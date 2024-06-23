import "./card-component.css";
export default function Others() {
  return (
    <div className="body">
      <h1>Projects</h1>
      <div className="container">
        <div className="card">
          <div className="pokmon-image">
            <img src="skills.webp" alt="" />
          </div>
          <div className="content">
            <ul>
              <div>
                <a
                  href="https://fullstack-project-team.netlify.app"
                  target="_blank"
                >
                  Full Stack team project
                </a>
              </div>
              <div>
                <a href="https://cyf-a-bahadory-tv.netlify.app" target="_blank">
                  TV Show
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

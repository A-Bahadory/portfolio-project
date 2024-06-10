import "./nav.css";
import { Icon } from "@iconify/react";
function NavBar() {
  return (
    <div className="nav">
      <div className="media-section">
        <li>
          <a href="https://www.linkedin.com/in/a-bahadory/" target="_blank">
            <Icon className="icon" icon="entypo-social:linkedin-with-circle" />
          </a>
        </li>
        <li>
          <a href="https://github.com/A-Bahadory" target="_blank">
            <Icon className="icon" icon="f7:logo-github" />
          </a>
        </li>
        <li>
          <a href="https://x.com/a_bahadory" target="_blank">
            <Icon className="icon" icon="arcticons:x-twitter" />
          </a>
        </li>
      </div>

      <div className="resume">
        <a href="Bahadory-CV.pdf" target="_blank">
          RESUME
        </a>
      </div>
    </div>
  );
}

export default NavBar;

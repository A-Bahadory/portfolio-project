import "./nav.css";
import { Icon } from "@iconify/react";
function NavBar() {
  return (
    <div className="nav">
      <div className="media-section">
        <ul className="nav-list">
          <li></li>
          <li>
            <a href="https://www.linkedin.com/in/a-bahadory/" target="_blank">
              <Icon icon="entypo-social:linkedin-with-circle" />
            </a>
          </li>
          <li>
            <a href="https://github.com/A-Bahadory" target="_blank">
              <Icon icon="f7:logo-github" />
            </a>
          </li>
          <li>
            <a href="https://x.com/a_bahadory" target="_blank">
              <Icon icon="arcticons:x-twitter" />
            </a>
          </li>
        </ul>
      </div>

      <ul className="nav-list">
        <li>
          <div className="resume">
            <a href="Bahadory-CV.pdf" target="_blank">
              RESUME
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

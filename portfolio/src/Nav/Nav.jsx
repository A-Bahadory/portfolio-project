import "./nav.css";
function NavBar() {
  return (
    <div className="nav">
      <div className="media-section">
        <ul className="nav-list">
          <li>
            <a href="about">github</a>
          </li>
          <li>
            <a href="project">lindin</a>
          </li>
          <li>
            <a href="resume">whatsapp</a>
          </li>
          <li>
            <a href="contact">facebook</a>
          </li>
        </ul>
      </div>

      <ul className="nav-list">
        <li>
          <a href="about">ABOUT</a>
        </li>
        <li>
          <a href="project">PROJECTS</a>
        </li>
        <li>
          <a href="resume">RESUME</a>
        </li>
        <li>
          <a href="contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

import "./card-component.css";
import { Icon } from "@iconify/react";
export default function Frontend() {
  return (
    <div className="body">
      <h1>Frontend</h1>
      <div className="container">
        <div className="card">
          <div className="pokmon-image">
            <img src="frontend_webdeveloper.jpeg" alt="" />
          </div>
          <div className="content">
            <ul>
              <p>React</p>
              <p>javaScript(js)</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Jest</p>
              <p>Vite</p>
            </ul>
            <ul>
              <div>
                <Icon icon="skill-icons:react-light" />
              </div>
              <div>
                <Icon icon="vscode-icons:file-type-js-official" />
              </div>
              <div>
                <Icon icon="ph:file-html-thin" />
              </div>
              <div>
                <Icon icon="vaadin:css" />
              </div>
              <div>
                <Icon icon="skill-icons:jest" />
              </div>
              <dir>
                <Icon icon="devicon:vitejs" />
              </dir>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

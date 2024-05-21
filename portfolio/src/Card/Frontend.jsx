import "./F.css";
import { Icon } from "@iconify/react";
export default function Frontend() {
  return (
    <div className="body">
      <h1>Frontend</h1>
      <div className="container">
        <div className="card">
          <div className="pokmon-image">
            <img
              src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5928299/og_image/optimized/op-Ten-Front-End-Design-Rules-For-Developers_Luke-Social-33a3a7c9b759fdaa22973906070f8065.png"
              alt=""
            />
          </div>
          <div className="content">
            <ul>
              <p>React</p>
              <p>javaScript(js)</p>
              <p>HTL</p>
              <p>css</p>
              <p>JEST</p>
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
